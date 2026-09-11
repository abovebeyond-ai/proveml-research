import ProveML.Kleene
/-!
# The fact store, the registry, and one condition

The store is a partial function from paths (`type:id.field`) to values. A
field may carry a unit at `path._unit`; the surface value a fact is compared
against is the value followed by its unit, as text. The registry is a partial
function from names to thresholds: a field, an operator with its bound, and
an optional unit the store must match.

Numbers are a parameter `ν` with a decidable order: the model does not care
whether a deployment stores integers or decimals, only that they compare.
-/
namespace ProveML

variable {ν : Type} [LT ν] [LE ν] [DecidableEq ν]
  [DecidableRel (α := ν) (· < ·)] [DecidableRel (α := ν) (· ≤ ·)] [ToString ν]

inductive Val (ν : Type) where
  | num (n : ν)
  | str (s : String)
  deriving DecidableEq, Repr

def Val.show : Val ν → String
  | .num n => toString n
  | .str s => s

/-- A flat key-value store: paths to values, absent paths to `none`. -/
abbrev Store (ν : Type) := String → Option (Val ν)

/-- The text a fact is compared against: the value, then the unit if the store declares one. -/
def surface (S : Store ν) (p : String) : Option String :=
  match S p with
  | none => none
  | some v =>
    match S (p ++ "._unit") with
    | some (.str u) => some (v.show ++ " " ++ u)
    | _ => some v.show

/-- The field a path addresses: `student:100.passRate` is `passRate`; a bare `student:100` has none. -/
def fieldOf (p : String) : Option String :=
  match p.splitOn ":" with
  | [_, rest] =>
    match rest.splitOn "." with
    | [_] => none
    | _ :: fs => some (".".intercalate fs)
    | [] => none
  | _ => none

inductive Op (ν : Type) where
  | lt (b : ν) | gt (b : ν) | lte (b : ν) | gte (b : ν)
  | between (lo hi : ν)          -- lo ≤ v < hi
  | diffGt (b : ν)               -- the materialised difference exceeds b
  | eq (s : String) | neq (s : String)   -- on the value's text, so categorical fields qualify
  | mem (vs : List String)
  | isNull
  deriving Repr

structure Threshold (ν : Type) where
  field : String
  op : Op ν
  unit : Option String := none
  deriving Repr

abbrev Registry (ν : Type) := String → Option (Threshold ν)

/-- One operator against one value. Unresolved when an ordering operator meets text. -/
def evalOp : Op ν → Val ν → K
  | .isNull, _ => .ff
  | .eq s, v => if v.show = s then .tt else .ff
  | .neq s, v => if v.show = s then .ff else .tt
  | .mem vs, v => if vs.contains v.show then .tt else .ff
  | .lt b, .num n => if n < b then .tt else .ff
  | .gt b, .num n => if b < n then .tt else .ff
  | .lte b, .num n => if n ≤ b then .tt else .ff
  | .gte b, .num n => if b ≤ n then .tt else .ff
  | .between lo hi, .num n => if lo ≤ n ∧ n < hi then .tt else .ff
  | .diffGt b, .num n => if b < n then .tt else .ff
  | _, .str _ => .uu

/-- Does the store's unit at `p` satisfy what the threshold asks? -/
def unitOk (S : Store ν) (p : String) : Option String → Bool
  | none => true
  | some u => S (p ++ "._unit") == some (.str u)

/--
A named threshold against the store, in an entity context. The explicit path
form `NAME(type:id.field)` may pick the entity but never the field: a name
defined on `passRate` pointed at `absent` is unresolved, not a comparison.
-/
def evalAtom (S : Store ν) (R : Registry ν) (ctx : Option String)
    (name : String) (explicit : Option String) : K :=
  match R name with
  | none => .uu
  | some t =>
    let path? : Option String :=
      match explicit with
      | some p => if fieldOf p = some t.field then some p else none
      | none => ctx.map (· ++ "." ++ t.field)
    match path? with
    | none => .uu
    | some p =>
      match t.op with
      | .isNull => if (S p).isNone then .tt else .ff
      | _ =>
        match S p with
        | none => .uu
        | some v => if unitOk S p t.unit then evalOp t.op v else .uu

/-- A condition: a threshold name (with an optional explicit path), a reference
to an earlier labelled judgment, the connectives, or text the grammar rejects
(a bare comparison, an unknown form), which is unresolved by construction. -/
inductive Cond where
  | atom (name : String) (path : Option String)
  | ref (label : String)
  | not (c : Cond)
  | and (a b : Cond)
  | or (a b : Cond)
  | invalid
  deriving Repr

/-- Earlier judgments in the document, by label. -/
abbrev Labels := String → Option K

def evalCond (S : Store ν) (R : Registry ν) (ctx : Option String) (L : Labels) : Cond → K
  | .atom n p => evalAtom S R ctx n p
  | .ref l => (L l).getD .uu
  | .not c => (evalCond S R ctx L c).not
  | .and a b => (evalCond S R ctx L a).and (evalCond S R ctx L b)
  | .or a b => (evalCond S R ctx L a).or (evalCond S R ctx L b)
  | .invalid => .uu

end ProveML

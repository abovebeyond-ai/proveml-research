import ProveML.Store
/-!
# A document and its verdicts

A document is the sequence of constructs the tokenizer finds, in order. The
verifier folds over it with three pieces of state: the entity in force, the
stack of contexts that scoped entities pushed, and the judgments made so far
by label. Every construct yields exactly one verdict.

Binding is the whole subtlety: a fact binds to the entity in force, which is
the last simple entity at the current depth, or the scoped entity whose braces
enclose it; closing a scope restores the context that was in force when it
opened, `none` included.
-/

namespace ProveML

variable {ν : Type} [LT ν] [LE ν] [DecidableEq ν]
  [DecidableRel (α := ν) (· < ·)] [DecidableRel (α := ν) (· ≤ ·)] [ToString ν]

/-- Where a fact points: a field of the entity in force, or an absolute path of its own. -/
inductive Target where
  | rel (field : String)
  | abs (path : String)
  deriving Repr, DecidableEq

inductive Tok where
  | entity (path name : String) (sc : Bool)
  | close
  | fact (target : Target) (value : String)
  | infer (label : String) (c : Cond)
  deriving Repr

inductive Verdict where
  | entityVerified (path name : String)
  | entityNotFound (path : String)
  | nameMismatch (path name expected : String)
  | factVerified (path value : String)
  | factNoContext (field value : String)
  | fieldNotFound (path value : String)
  | valueMismatch (path value expected : String)
  | inferVerified (label : String) (c : Cond)
  | inferFailed (label : String) (c : Cond)
  | inferUnverifiable (label : String) (c : Cond)
  deriving Repr

structure St where
  ctx : Option String := none
  stack : List (Option String) := []
  labels : Labels := fun _ => none

def entityVerdict (S : Store ν) (p n : String) : Verdict :=
  match S (p ++ ".name") with
  | none => .entityNotFound p
  | some v => if v.show = n then .entityVerified p n else .nameMismatch p n v.show

/-- The path a fact addresses: its own, or a field of the entity in force. -/
def targetPath (ctx : Option String) : Target → Option String
  | .abs q => some q
  | .rel f => ctx.map (· ++ "." ++ f)

def targetField : Target → String
  | .abs q => q
  | .rel f => f

/-- Compare a value with what the store shows at a path. -/
def compareAt (S : Store ν) (q value : String) : Verdict :=
  match surface S q with
  | none => .fieldNotFound q value
  | some expected => if expected = value then .factVerified q value else .valueMismatch q value expected

def factVerdict (S : Store ν) (ctx : Option String) (t : Target) (value : String) : Verdict :=
  match targetPath ctx t with
  | none => .factNoContext (targetField t) value
  | some q => compareAt S q value

/-- One construct at a time. An entity becomes the entity in force, and a scoped one remembers the entity that was in force before it; a close restores that entity; a fact binds to the entity in force, or to its own absolute path; a judgment records its verdict under its label. -/
def step (S : Store ν) (R : Registry ν) (st : St) : Tok → St × Verdict
  | .entity p n sc =>
    let st' := { st with ctx := some p, stack := if sc then st.ctx :: st.stack else st.stack }
    (st', entityVerdict S p n)
  | .close =>
    match st.stack with
    | [] => (st, .factNoContext "" "")   -- an unmatched close leaves the context alone; see `verify` below
    | c :: rest => ({ st with ctx := c, stack := rest }, .factNoContext "" "")
  | .fact t v => (st, factVerdict S st.ctx t v)
  | .infer l c =>
    let k := evalCond S R st.ctx st.labels c
    let st' := { st with labels := fun l' => if l' = l then some k else st.labels l' }
    (st', match k with
      | .tt => .inferVerified l c
      | .ff => .inferFailed l c
      | .uu => .inferUnverifiable l c)

/-- A close is not a construct and yields no verdict; everything else yields one. -/
def isConstruct : Tok → Bool
  | .close => false
  | _ => true

def go (S : Store ν) (R : Registry ν) : St → List Tok → List Verdict
  | _, [] => []
  | st, t :: ts =>
    let (st', v) := step S R st t
    if isConstruct t then v :: go S R st' ts else go S R st' ts

/-- The verifier: one verdict per construct, in document order. -/
def verify (S : Store ν) (R : Registry ν) (d : List Tok) : List Verdict :=
  go S R {} d

def verifiedCount (vs : List Verdict) : Nat :=
  vs.countP fun
    | .entityVerified .. | .factVerified .. | .inferVerified .. => true
    | _ => false

end ProveML

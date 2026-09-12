import ProveML.Verify
/-!
# What the verifier guarantees

Five properties, each one a sentence the paper makes:

1. **Verified means equal to the store.** A fact verdict `factVerified q v` is
   only ever produced when the store's surface value at `q` is exactly `v`
   (`verify_fact_sound`); an entity verdict only when the stored name at the
   id equals the rendered name (`verify_entity_sound`). There is no tolerance.
2. **A verified judgment rests on a registered bound that holds** of a value
   the store returns at the bound path, with the unit the threshold asked for
   (`evalAtom_tt_registered`, `evalAtom_tt_holds`).
3. **Nothing unresolved contributes to a verdict.** Evaluation is monotone in
   the information order under registry growth (`evalCond_mono`): registering
   more names can decide an unresolved verdict, never flip a decided one. A
   verified judgment stays verified (`evalCond_tt_stable`), a failed one stays
   failed (`evalCond_ff_stable`), and against the empty registry everything is
   unresolved (`evalCond_empty`). `NOT` of unresolved being unresolved is what
   makes this hold.
4. **Closing a scope restores the context in force when it opened**
   (`scope_restores`).
5. **The store may grow too, for every operator but `isNull`**
   (`evalAtom_store_mono`), and `isNull` holds wherever the store is silent,
   including at a field the record's type never carries (`isNull_vacuous`):
   the vacuity the judgment study met, stated so the specification can close it.

Determinism needs no theorem: `verify` is a function of the document, the
store and the registry, and of nothing else.
-/

set_option linter.unusedSectionVars false
set_option linter.unusedVariables false

namespace ProveML


variable {ν : Type} [LT ν] [LE ν] [DecidableEq ν]
  [DecidableRel (α := ν) (· < ·)] [DecidableRel (α := ν) (· ≤ ·)] [ToString ν]

theorem compareAt_sound (S : Store ν) (q value q' v : String)
    (h : compareAt S q value = .factVerified q' v) :
    q' = q ∧ v = value ∧ surface S q = some value := by
  unfold compareAt at h
  cases hs : surface S q with
  | none => rw [hs] at h; cases h
  | some e =>
    rw [hs] at h
    simp only at h
    by_cases he : e = value
    · rw [if_pos he] at h; cases h; subst he; exact ⟨rfl, rfl, rfl⟩
    · rw [if_neg he] at h; cases h

theorem factVerdict_sound (S : Store ν) (ctx : Option String) (t : Target) (value q v : String)
    (h : factVerdict S ctx t value = .factVerified q v) :
    surface S q = some v ∧ v = value := by
  unfold factVerdict at h
  cases hp : targetPath ctx t with
  | none => rw [hp] at h; cases h
  | some q' =>
    rw [hp] at h
    obtain ⟨rfl, rfl, hs⟩ := compareAt_sound S q' value q v h
    exact ⟨hs, rfl⟩

end ProveML

namespace ProveML

variable {ν : Type} [LT ν] [LE ν] [DecidableEq ν]
  [DecidableRel (α := ν) (· < ·)] [DecidableRel (α := ν) (· ≤ ·)] [ToString ν]

theorem entityVerdict_sound (S : Store ν) (p n q m : String)
    (h : entityVerdict S p n = .entityVerified q m) :
    q = p ∧ m = n ∧ ∃ v, S (p ++ ".name") = some v ∧ v.show = n := by
  unfold entityVerdict at h
  cases hs : S (p ++ ".name") with
  | none => rw [hs] at h; cases h
  | some v =>
    rw [hs] at h
    simp only at h
    by_cases hv : v.show = n
    · rw [if_pos hv] at h; cases h; exact ⟨rfl, rfl, v, rfl, hv⟩
    · rw [if_neg hv] at h; cases h

/-- What `go` produces for one token is `step`'s verdict, then the rest. -/
theorem mem_go (S : Store ν) (R : Registry ν) (st : St) (t : Tok) (ts : List Tok) (v : Verdict)
    (h : v ∈ go S R st (t :: ts)) :
    (isConstruct t = true ∧ v = (step S R st t).2) ∨ v ∈ go S R (step S R st t).1 ts := by
  simp only [go] at h
  split at h
  · rename_i hc
    rcases List.mem_cons.mp h with h | h
    · exact Or.inl ⟨hc, h⟩
    · exact Or.inr h
  · exact Or.inr h

theorem step_fact_sound (S : Store ν) (R : Registry ν) (st : St) (t : Tok) (q v : String)
    (h : (step S R st t).2 = .factVerified q v) : surface S q = some v := by
  cases t with
  | entity p n sc =>
    simp only [step] at h
    exact absurd h (by unfold entityVerdict; split <;> (try split) <;> simp)
  | close => simp only [step] at h; split at h <;> cases h
  | fact tg val => exact (factVerdict_sound S st.ctx tg val q v h).1
  | infer l c => simp only [step] at h; split at h <;> cases h

theorem step_entity_sound (S : Store ν) (R : Registry ν) (st : St) (t : Tok) (p n : String)
    (h : (step S R st t).2 = .entityVerified p n) :
    ∃ v, S (p ++ ".name") = some v ∧ v.show = n := by
  cases t with
  | entity p' n' sc =>
    simp only [step] at h
    obtain ⟨rfl, rfl, w⟩ := entityVerdict_sound S p' n' p n h
    exact w
  | close => simp only [step] at h; split at h <;> cases h
  | fact tg val =>
    simp only [step] at h
    exact absurd h (by unfold factVerdict compareAt; split <;> (try split) <;> (try split) <;> simp)
  | infer l c => simp only [step] at h; split at h <;> cases h

theorem go_fact_sound (S : Store ν) (R : Registry ν) (d : List Tok) (q v : String) :
    ∀ st, Verdict.factVerified q v ∈ go S R st d → surface S q = some v := by
  induction d with
  | nil => intro st hm; simp [go] at hm
  | cons t ts ih =>
    intro st hm
    rcases mem_go S R st t ts _ hm with ⟨_, hv⟩ | hrest
    · exact step_fact_sound S R st t q v hv.symm
    · exact ih _ hrest

theorem go_entity_sound (S : Store ν) (R : Registry ν) (d : List Tok) (p n : String) :
    ∀ st, Verdict.entityVerified p n ∈ go S R st d → ∃ v, S (p ++ ".name") = some v ∧ v.show = n := by
  induction d with
  | nil => intro st hm; simp [go] at hm
  | cons t ts ih =>
    intro st hm
    rcases mem_go S R st t ts _ hm with ⟨_, hv⟩ | hrest
    · exact step_entity_sound S R st t p n hv.symm
    · exact ih _ hrest

/-- Lifted to a document: every fact the verifier calls verified is the store's own surface value. -/
theorem verify_fact_sound (S : Store ν) (R : Registry ν) (d : List Tok) (q v : String)
    (h : Verdict.factVerified q v ∈ verify S R d) : surface S q = some v :=
  go_fact_sound S R d q v {} h

theorem verify_entity_sound (S : Store ν) (R : Registry ν) (d : List Tok) (p n : String)
    (h : Verdict.entityVerified p n ∈ verify S R d) :
    ∃ v, S (p ++ ".name") = some v ∧ v.show = n :=
  go_entity_sound S R d p n {} h

end ProveML

namespace ProveML

variable {ν : Type} [LT ν] [LE ν] [DecidableEq ν]
  [DecidableRel (α := ν) (· < ·)] [DecidableRel (α := ν) (· ≤ ·)] [ToString ν]

/-! ## 2. A verified judgment rests on a registered bound that holds -/

/-- The path an atom evaluates at, once the name resolved to a threshold. -/
def atomPath (ctx : Option String) (t : Threshold ν) : Option String → Option String
  | some p => if fieldOf p = some t.field then some p else none
  | none => ctx.map (· ++ "." ++ t.field)

theorem evalAtom_eq (S : Store ν) (R : Registry ν) (ctx : Option String) (name : String) (ex : Option String) :
    evalAtom S R ctx name ex =
      match R name with
      | none => .uu
      | some t =>
        match atomPath ctx t ex with
        | none => .uu
        | some p =>
          match t.op with
          | .isNull => if (S p).isNone then .tt else .ff
          | _ => match S p with
            | none => .uu
            | some v => if unitOk S p t.unit then evalOp t.op v else .uu := by
  unfold evalAtom atomPath
  cases R name <;> cases ex <;> rfl

/-- An atom that holds names a registered threshold. -/
theorem evalAtom_tt_registered (S : Store ν) (R : Registry ν) (ctx : Option String) (name : String) (ex : Option String)
    (h : evalAtom S R ctx name ex = .tt) : ∃ t, R name = some t := by
  rw [evalAtom_eq] at h
  cases hr : R name with
  | none => rw [hr] at h; cases h
  | some t => exact ⟨t, rfl⟩

/-- An atom that holds, under any operator but `isNull`, names a stored value the operator holds of,
with the unit the threshold asked for. -/
theorem evalAtom_tt_holds (S : Store ν) (R : Registry ν) (ctx : Option String) (name : String) (ex : Option String)
    (t : Threshold ν) (hr : R name = some t) (hop : t.op ≠ .isNull)
    (h : evalAtom S R ctx name ex = .tt) :
    ∃ p v, atomPath ctx t ex = some p ∧ S p = some v ∧ unitOk S p t.unit = true ∧ evalOp t.op v = .tt := by
  rw [evalAtom_eq, hr] at h
  simp only at h
  cases hp : atomPath ctx t ex with
  | none => rw [hp] at h; cases h
  | some p =>
    rw [hp] at h
    simp only at h
    cases hS : S p with
    | none => rw [hS] at h; cases h
    | some v =>
      rw [hS] at h
      simp only at h
      by_cases hu : unitOk S p t.unit = true
      · rw [if_pos hu] at h; exact ⟨p, v, rfl, hS, hu, h⟩
      · rw [if_neg hu] at h; cases h

end ProveML

namespace ProveML

variable {ν : Type} [LT ν] [LE ν] [DecidableEq ν]
  [DecidableRel (α := ν) (· < ·)] [DecidableRel (α := ν) (· ≤ ·)] [ToString ν]

/-! ## 3. Nothing unresolved contributes to a verdict

`R ⊑ R'` when every name `R` holds, `R'` holds with the same threshold: the
registry grew. Under growth an atom can only go from unresolved to decided,
and the connectives preserve that, so a whole condition can only go from
unresolved to decided. A verified judgment therefore stays verified when the
deployment registers more names, a failed one stays failed, and no verified
judgment ever rested on a name that was not there.
-/

def Registry.le (R R' : Registry ν) : Prop := ∀ n t, R n = some t → R' n = some t

theorem evalAtom_mono (S : Store ν) {R R' : Registry ν} (hR : Registry.le R R')
    (ctx : Option String) (name : String) (ex : Option String) :
    evalAtom S R ctx name ex ≤ evalAtom S R' ctx name ex := by
  rw [evalAtom_eq, evalAtom_eq]
  cases hr : R name with
  | none => exact K.uu_le _
  | some t =>
    rw [hR name t hr]
    exact K.le_refl _

theorem evalCond_mono (S : Store ν) {R R' : Registry ν} (hR : Registry.le R R')
    (ctx : Option String) (L : Labels) : ∀ c : Cond, evalCond S R ctx L c ≤ evalCond S R' ctx L c
  | .atom n p => evalAtom_mono S hR ctx n p
  | .ref _ => K.le_refl _
  | .not c => K.not_mono (evalCond_mono S hR ctx L c)
  | .and a b => K.and_mono (evalCond_mono S hR ctx L a) (evalCond_mono S hR ctx L b)
  | .or a b => K.or_mono (evalCond_mono S hR ctx L a) (evalCond_mono S hR ctx L b)
  | .invalid => K.le_refl _

/-- A judgment that holds keeps holding when the registry grows. -/
theorem evalCond_tt_stable (S : Store ν) {R R' : Registry ν} (hR : Registry.le R R')
    (ctx : Option String) (L : Labels) (c : Cond) (h : evalCond S R ctx L c = .tt) :
    evalCond S R' ctx L c = .tt :=
  K.le_tt_iff.mp (h ▸ evalCond_mono S hR ctx L c)

/-- And one that fails keeps failing: registering more names never rescues a false judgment. -/
theorem evalCond_ff_stable (S : Store ν) {R R' : Registry ν} (hR : Registry.le R R')
    (ctx : Option String) (L : Labels) (c : Cond) (h : evalCond S R ctx L c = .ff) :
    evalCond S R' ctx L c = .ff :=
  K.le_ff_iff.mp (h ▸ evalCond_mono S hR ctx L c)

/-- In particular, against the empty registry nothing holds and nothing fails: every judgment is unresolved. -/
theorem evalCond_empty (S : Store ν) (ctx : Option String) (c : Cond) :
    evalCond S (fun _ => none) ctx (fun _ => none) c = .uu := by
  induction c with
  | atom n p => rw [evalCond, evalAtom_eq]
  | ref l => rfl
  | not c ih => simp only [evalCond, ih]; rfl
  | and a b iha ihb => simp only [evalCond, iha, ihb]; rfl
  | or a b iha ihb => simp only [evalCond, iha, ihb]; rfl
  | invalid => rfl

/-! ## 4. Closing a scope restores the context that was in force when it opened -/

/-- A body that opens no scope of its own and closes none. -/
def flat : List Tok → Bool
  | [] => true
  | .entity _ _ true :: _ => false
  | .close :: _ => false
  | _ :: ts => flat ts

def runState (S : Store ν) (R : Registry ν) : St → List Tok → St
  | st, [] => st
  | st, t :: ts => runState S R (step S R st t).1 ts

theorem runState_append (S : Store ν) (R : Registry ν) (st : St) (a b : List Tok) :
    runState S R st (a ++ b) = runState S R (runState S R st a) b := by
  induction a generalizing st with
  | nil => rfl
  | cons t ts ih => simp only [List.cons_append, runState]; exact ih _

theorem runState_flat_stack (S : Store ν) (R : Registry ν) (body : List Tok) (hb : flat body = true) :
    ∀ st, (runState S R st body).stack = st.stack := by
  induction body with
  | nil => intro st; rfl
  | cons t ts ih =>
    intro st
    cases t with
    | entity p n sc =>
      cases sc with
      | true => simp [flat] at hb
      | false => simp only [flat] at hb; simp only [runState, step]; exact ih hb _
    | close => simp [flat] at hb
    | fact tg v => simp only [flat] at hb; simp only [runState, step]; exact ih hb _
    | infer l c => simp only [flat] at hb; simp only [runState, step]; exact ih hb _

theorem scope_restores (S : Store ν) (R : Registry ν) (st : St) (p n : String) (body : List Tok)
    (hb : flat body = true) :
    (runState S R st ([.entity p n true] ++ body ++ [.close])).ctx = st.ctx := by
  rw [runState_append, runState_append]
  have h1 : runState S R st [Tok.entity p n true] = { st with ctx := some p, stack := st.ctx :: st.stack } := rfl
  rw [h1]
  have hstack := runState_flat_stack S R body hb { st with ctx := some p, stack := st.ctx :: st.stack }
  generalize runState S R { st with ctx := some p, stack := st.ctx :: st.stack } body = st' at hstack ⊢
  simp only [runState, step]
  rw [hstack]

end ProveML

namespace ProveML

variable {ν : Type} [LT ν] [LE ν] [DecidableEq ν]
  [DecidableRel (α := ν) (· < ·)] [DecidableRel (α := ν) (· ≤ ·)] [ToString ν]

/-! ## 5. The store may grow too, with one exception

Growth of the store, `S ⊑ S'`, is the same monotone story for every operator
but one. `isNull` holds precisely where the store has nothing, so adding a
value flips it from holding to failing; and it holds at a path a record's
type never carries at all. That is the vacuous truth the judgment study met
(`IS_MISSING` on `evaluated` verified for every class), stated here so the
specification can close it: a missing field is not a null value.
-/

def Store.le (S S' : Store ν) : Prop := ∀ p v, S p = some v → S' p = some v

theorem unitOk_mono {S S' : Store ν} (hS : Store.le S S') (p : String) (u : Option String)
    (h : unitOk S p u = true) : unitOk S' p u = true := by
  cases u with
  | none => rfl
  | some u =>
    simp only [unitOk, beq_iff_eq] at h ⊢
    exact hS _ _ h

theorem evalAtom_store_mono {S S' : Store ν} (hS : Store.le S S') (R : Registry ν)
    (ctx : Option String) (name : String) (ex : Option String)
    (hnull : ∀ t, R name = some t → t.op ≠ .isNull) :
    evalAtom S R ctx name ex ≤ evalAtom S' R ctx name ex := by
  rw [evalAtom_eq, evalAtom_eq]
  cases hr : R name with
  | none => exact K.uu_le _
  | some t =>
    simp only
    cases hp : atomPath ctx t ex with
    | none => exact K.uu_le _
    | some p =>
      simp only
      have hne := hnull t hr
      cases ho : t.op
      case isNull => exact absurd ho hne
      all_goals
        simp only
        rcases hv : S p with _ | v
        · exact K.uu_le _
        · rw [hS p v hv]
          simp only
          by_cases hu : unitOk S p t.unit = true
          · rw [if_pos hu, if_pos (unitOk_mono hS p t.unit hu)]; exact K.le_refl _
          · rw [if_neg hu]; exact K.uu_le _

/-- The exception, stated: an `isNull` threshold holds wherever the store is silent. -/
theorem isNull_vacuous (S : Store ν) (R : Registry ν) (ctx : Option String) (name : String) (ex : Option String)
    (t : Threshold ν) (hr : R name = some t) (ht : t.op = .isNull) (p : String)
    (hp : atomPath ctx t ex = some p) (hS : S p = none) :
    evalAtom S R ctx name ex = .tt := by
  rw [evalAtom_eq, hr]
  simp only
  rw [hp]
  simp only
  split
  · rw [hS]; rfl
  · rename_i h; exact absurd ht h

end ProveML

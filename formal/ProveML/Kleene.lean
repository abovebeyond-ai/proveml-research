/-!
# Three-valued verdicts

A ProveML condition evaluates to one of three values: it holds, it does not
hold, or it cannot be resolved (an unregistered name, a missing operand, a
unit that does not match). The third value is not false. The connectives are
those of Kleene's strong three-valued logic: false wins a conjunction,
true wins a disjunction, and negation leaves the unresolved unresolved.

The last clause is the one that matters: without it, `NOT` of a threshold
nobody defined would verify.
-/

namespace ProveML

inductive K where
  | tt
  | ff
  | uu
  deriving DecidableEq, Repr

namespace K

def not : K → K
  | tt => ff
  | ff => tt
  | uu => uu

def and : K → K → K
  | ff, _  => ff
  | _,  ff => ff
  | tt, tt => tt
  | _,  _  => uu

def or : K → K → K
  | tt, _  => tt
  | _,  tt => tt
  | ff, ff => ff
  | _,  _  => uu

/-- The information order: the unresolved verdict is below both decided ones. -/
def le : K → K → Prop
  | uu, _ => True
  | tt, tt => True
  | ff, ff => True
  | _, _ => False

instance : LE K := ⟨le⟩

instance (a b : K) : Decidable (a ≤ b) := by
  cases a <;> cases b <;> simp [LE.le, le] <;> exact inferInstance

/-- Negating the unresolved leaves it unresolved: NOT of an unverifiable condition is still unverifiable. -/
theorem not_uu : not uu = uu := rfl
theorem not_not (a : K) : not (not a) = a := by cases a <;> rfl
theorem and_ff_left (a : K) : and ff a = ff := by cases a <;> rfl
theorem and_ff_right (a : K) : and a ff = ff := by cases a <;> rfl
theorem or_tt_left (a : K) : or tt a = tt := by cases a <;> rfl
theorem or_tt_right (a : K) : or a tt = tt := by cases a <;> rfl
theorem and_comm (a b : K) : and a b = and b a := by cases a <;> cases b <;> rfl
theorem or_comm (a b : K) : or a b = or b a := by cases a <;> cases b <;> rfl
/-- An unresolved operand never produces a decided conjunction on its own. -/
theorem and_uu_tt : and uu tt = uu := rfl
theorem or_uu_ff : or uu ff = uu := rfl

theorem le_refl (a : K) : a ≤ a := by cases a <;> decide
theorem uu_le (a : K) : uu ≤ a := by cases a <;> decide

/-- Every connective is monotone in the information order: resolving an
operand never flips a decided verdict, it can only decide an unresolved one. -/
theorem not_mono {a b : K} (h : a ≤ b) : not a ≤ not b := by
  cases a <;> cases b <;> first | decide | exact absurd h (by decide)
theorem and_mono {a a' b b' : K} (ha : a ≤ a') (hb : b ≤ b') : and a b ≤ and a' b' := by
  cases a <;> cases a' <;> cases b <;> cases b' <;> first | decide | exact absurd ha (by decide) | exact absurd hb (by decide)
theorem or_mono {a a' b b' : K} (ha : a ≤ a') (hb : b ≤ b') : or a b ≤ or a' b' := by
  cases a <;> cases a' <;> cases b <;> cases b' <;> first | decide | exact absurd ha (by decide) | exact absurd hb (by decide)

/-- A decided verdict stays what it is under refinement. -/
theorem le_tt_iff {a : K} : tt ≤ a ↔ a = tt := by cases a <;> decide
theorem le_ff_iff {a : K} : ff ≤ a ↔ a = ff := by cases a <;> decide

end K
end ProveML

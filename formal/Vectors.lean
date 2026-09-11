import ProveML
/-!
The paper's own examples, run through the model, printed as JSON test vectors.
`formal/check-vectors.mjs` runs the same documents through the JavaScript
package and compares verdict for verdict, so the implementation is checked
against the thing the theorems are about, not against itself.
-/
open ProveML

abbrev N := Int

def store : Store N := fun p =>
  match p with
  | "company:aapl.name" => some (.str "Apple Inc.")
  | "company:aapl.revenue" => some (.num 391035000000)
  | "company:aapl.revenue._unit" => some (.str "USD")
  | "company:aapl.netIncome" => some (.num 93736000000)
  | "company:aapl.netIncome._unit" => some (.str "USD")
  | "offering:10012.name" => some (.str "6ZW")
  | "offering:10012.passRate" => some (.num 74)
  | "offering:10012.studentCount" => some (.num 8)
  | "offering:10050.name" => some (.str "5WEWI")
  | "offering:10050.passRate" => some (.num 75)
  | "student:20321.name" => some (.str "Nathan Lambert")
  | "student:20321.passRate" => some (.num 7)
  | "student:20321.absent" => some (.num 29)
  | "account:901.name" => some (.str "Acme Corp")
  | "account:901.balance" => some (.num 12400)
  | "account:901.balance._unit" => some (.str "EUR")
  | _ => none

def registry : Registry N := fun n =>
  match n with
  | "IS_STRONG" => some { field := "passRate", op := .gte 75 }
  | "IS_PASSING" => some { field := "passRate", op := .gte 50 }
  | "IS_LOW_PASS" => some { field := "passRate", op := .lt 25 }
  | "IS_HIGH_ABSENCE" => some { field := "absent", op := .gt 10 }
  | "IS_GREY_RISK" => some { field := "absent", op := .gt 30 }
  | "IS_SMALL_SAMPLE" => some { field := "studentCount", op := .lt 5 }
  | "IS_NEGATIVE_BALANCE" => some { field := "balance", op := .lt 0, unit := some "EUR" }
  | "IS_MISSING" => some { field := "evaluated", op := .isNull }
  | _ => none

/-- A vector: the ProveML text as the package reads it, the same document as the model reads it. -/
structure Vec where
  name : String
  text : String
  doc : List Tok

def vectors : List Vec := [
  { name := "canonical value verifies, display aside",
    text := "@[company:aapl]{Apple Inc.} reported revenue of %[revenue]{391035000000 USD}.",
    doc := [.entity "company:aapl" "Apple Inc." false, .fact (.rel "revenue") "391035000000 USD"] },
  { name := "the rounded form in the claim fails",
    text := "@[company:aapl]{Apple Inc.} reported revenue of %[revenue]{$391 billion}.",
    doc := [.entity "company:aapl" "Apple Inc." false, .fact (.rel "revenue") "$391 billion"] },
  { name := "a judgment at the bound: 74 is not strong, 75 is",
    text := "@[offering:10012]{6ZW} is ?[a: IS_STRONG]{strong} and ?[b: IS_PASSING]{passing}. @[offering:10050]{5WEWI} is ?[c: IS_STRONG]{strong}.",
    doc := [.entity "offering:10012" "6ZW" false, .infer "a" (.atom "IS_STRONG" none), .infer "b" (.atom "IS_PASSING" none),
            .entity "offering:10050" "5WEWI" false, .infer "c" (.atom "IS_STRONG" none)] },
  { name := "NOT of an unregistered name is unresolved, not verified",
    text := "@[offering:10012]{6ZW} is ?[a: NOT IS_MOTIVATED]{unmotivated} and ?[b: NOT IS_STRONG]{not strong}.",
    doc := [.entity "offering:10012" "6ZW" false, .infer "a" (.not (.atom "IS_MOTIVATED" none)), .infer "b" (.not (.atom "IS_STRONG" none))] },
  { name := "false wins a conjunction even beside an unregistered name; NOT of that, by label, verifies",
    text := "@[offering:10012]{6ZW} ?[a: IS_STRONG AND IS_MOTIVATED]{x} ?[b: NOT @a]{y}",
    doc := [.entity "offering:10012" "6ZW" false, .infer "a" (.and (.atom "IS_STRONG" none) (.atom "IS_MOTIVATED" none)),
            .infer "b" (.not (.ref "a"))] },
  { name := "an explicit path picks the entity, never the field",
    text := "@[offering:10012]{6ZW} has a pupil @[student:20321]{Nathan Lambert} with ?[a: IS_HIGH_ABSENCE]{high absence}, ?[b: IS_GREY_RISK]{grey risk}, and the class is ?[c: IS_STRONG(offering:10012.passRate)]{strong} and ?[d: IS_STRONG(student:20321.absent)]{strong}.",
    doc := [.entity "offering:10012" "6ZW" false, .entity "student:20321" "Nathan Lambert" false,
            .infer "a" (.atom "IS_HIGH_ABSENCE" none), .infer "b" (.atom "IS_GREY_RISK" none),
            .infer "c" (.atom "IS_STRONG" (some "offering:10012.passRate")), .infer "d" (.atom "IS_STRONG" (some "student:20321.absent"))] },
  { name := "a scope closes and the earlier context returns",
    text := "@[offering:10012 \"6ZW\"]{ has %[passRate]{74}% } and @[student:20321 \"Nathan Lambert\"]{ has %[absent]{29} absences } while %[studentCount]{8} pupils.",
    doc := [.entity "offering:10012" "6ZW" true, .fact (.rel "passRate") "74", .close,
            .entity "student:20321" "Nathan Lambert" true, .fact (.rel "absent") "29", .close,
            .fact (.rel "studentCount") "8"] },
  { name := "no context: a fact before any entity",
    text := "The pass rate is %[passRate]{74}%.",
    doc := [.fact (.rel "passRate") "74"] },
  { name := "a unit the threshold asks for, present and matching",
    text := "@[account:901]{Acme Corp} has %[balance]{12400 EUR} and is ?[n: IS_NEGATIVE_BALANCE]{in the red}.",
    doc := [.entity "account:901" "Acme Corp" false, .fact (.rel "balance") "12400 EUR", .infer "n" (.atom "IS_NEGATIVE_BALANCE" none)] },
  { name := "isNull holds where the record type never carries the field (the vacuity the study met)",
    text := "@[offering:10012]{6ZW} has ?[m: IS_MISSING]{no data}.",
    doc := [.entity "offering:10012" "6ZW" false, .infer "m" (.atom "IS_MISSING" none)] },
  { name := "a wrong name at a known id, and an unknown id",
    text := "@[offering:10012]{6ZX} and @[offering:99999]{Nowhere} with %[passRate]{74}%.",
    doc := [.entity "offering:10012" "6ZX" false, .entity "offering:99999" "Nowhere" false, .fact (.rel "passRate") "74"] }
]

def statusOf : Verdict → String
  | .entityVerified .. => "verified"
  | .entityNotFound .. => "entity-not-found"
  | .nameMismatch .. => "name-mismatch"
  | .factVerified .. => "verified"
  | .factNoContext .. => "no-context"
  | .fieldNotFound .. => "field-not-found"
  | .valueMismatch .. => "value-mismatch"
  | .inferVerified .. => "verified"
  | .inferFailed .. => "failed"
  | .inferUnverifiable .. => "unverifiable"

def esc (s : String) : String :=
  s.foldl (fun acc c => acc ++ (if c = '"' then "\\\"" else if c = '\\' then "\\\\" else String.singleton c)) ""

def main : IO Unit := do
  let mut out := "["
  let mut first := true
  for v in vectors do
    let statuses := (verify store registry v.doc).map statusOf
    let js := "[" ++ ",".intercalate (statuses.map (fun s => "\"" ++ s ++ "\"")) ++ "]"
    out := out ++ (if first then "\n" else ",\n") ++ "  {\"name\": \"" ++ esc v.name ++ "\", \"text\": \"" ++ esc v.text ++ "\", \"expected\": " ++ js ++ "}"
    first := false
  IO.println (out ++ "\n]")

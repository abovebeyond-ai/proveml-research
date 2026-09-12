# A formal model of the ProveML verifier

The semantics the paper describes, as Lean 4 definitions, with the properties the paper
claims as theorems. Zero dependencies beyond Lean itself.

- `ProveML/Kleene.lean`: the three-valued verdict and its connectives (Kleene's strong logic), with their laws and monotonicity.
- `ProveML/Store.lean`: the store, the registry, the operators, one condition.
- `ProveML/Verify.lean`: a document as a list of constructs; binding, scopes, labels; one verdict per construct.
- `ProveML/Theorems.lean`: soundness of facts and entities, soundness of judgments, monotonicity under registry and store growth, scope restoration, and the `isNull` exception.
- `Vectors.lean`: the paper's examples run through the model, printed as `vectors.json`.
- `check-vectors.mjs`: the JavaScript package on the same texts, verdict for verdict.

```
lake build                      # every theorem, no sorry
lake exe vectors > vectors.json # what the model says
node check-vectors.mjs          # does the package agree
```

What is modelled is the judgment: which verdict a construct gets. What is not modelled is the
tokenizer, the map from text to constructs; the vectors cover that link by hand, and the two
implementations (JavaScript and Go) cover it by their own suites. Numbers are a parameter with
a decidable order, so the model does not choose between integers and decimals.

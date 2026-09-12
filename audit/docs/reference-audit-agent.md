# ProveML Reference Audit (Agent Export)

This is the compact agent-facing export of the reference audit.
Use it instead of the HTML page when you want structured citation review without UI markup.

## Totals

- Total references: 107
- Cited in paper: 62
- Source passages curated: 0
- Summary reviewed: 0
- Auto summary candidates: 57
- Exact rendered blocks: 132

## Highest-Attention References

None.

## Records

### euaiact
Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence
- authors: European Parliament and Council of the European Union
- year: 2024
- venue: Unknown
- source url: https://eur-lex.europa.eu/eli/reg/2024/1689/
- source label: references/raw/euaiact.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 107: begin(abstract) Organizations deploy LLMs in consequential settings [aiindex2026,magesh2025] and regulation now reaches generated text [euaiact,art50guidelines2026], yet the text seldom carries a link between a claim and the data behind it that a machine can check [citednotverified,rao2026]. ProveML is a Markdown extension of three inline constructs that declare entities, bind facts to a data source and check qualitative judgments against pre-declared thresholds. Verification is deterministic, exact comparison against a flat key-value store with no model in the loop: milliseconds per response, explainable, usable inside a generation loop or on text the model did not produce. Its semantics is stated formally and its guarantees, that verified means equal to the store and that no unregistered name can decide a judgment, are machine-checked. The verifier also reports coverage, the share of a text's numbers that sit inside any claim.
- line 119: Hallucination is structural, not incidental: calibrated language models must hallucinate at a rate approaching the fraction of facts appearing exactly once in training [kalai2024], and standard training pipelines reward guessing over acknowledging uncertainty [kalai2025]. Regulation no longer adds urgency; it adds exposure. The EU AI Act's transparency duties have applied since 2 August 2026, with the Commission's Article 50 guidelines adopted two weeks before; the Digital Omnibus deferred only one of those duties, machine-readable marking by systems already on the market, to 2 December 2026 [euaiact,art50guidelines2026,omnibus2026]. But the Code of Practice that operationalises these duties concerns marking the origin of content and says nothing about its accuracy [transparencycode2026]: a text can be fully compliant and wrong. And the problem has not gone away with better models: the leading legal research tools hallucinated on 17–33% of queries when tested in 2024, despite vendor claims of near-elimination [magesh2025], and a 2026 survey of court filings found more than a thousand containing fabricated citations, a number growing year over year [liu2026citations].

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: Do you want to help improving EUR-Lex ? This is a list of experimental features that you can enable. These features are still under development; they are not fully tested, and might reduce EUR-Lex stability. Don't forget to give your feedback!

### magesh2025
Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools
- authors: Magesh, V. and Surani, F. and Dahl, M. and Suzgun, M. and Manning, C. D. and Ho, D. E.
- year: 2025
- venue: Journal of Empirical Legal Studies
- source url: https://doi.org/10.1111/jels.12413
- source label: references/raw/magesh2025.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 107: begin(abstract) Organizations deploy LLMs in consequential settings [aiindex2026,magesh2025] and regulation now reaches generated text [euaiact,art50guidelines2026], yet the text seldom carries a link between a claim and the data behind it that a machine can check [citednotverified,rao2026]. ProveML is a Markdown extension of three inline constructs that declare entities, bind facts to a data source and check qualitative judgments against pre-declared thresholds. Verification is deterministic, exact comparison against a flat key-value store with no model in the loop: milliseconds per response, explainable, usable inside a generation loop or on text the model did not produce. Its semantics is stated formally and its guarantees, that verified means equal to the store and that no unregistered name can decide a judgment, are machine-checked. The verifier also reports coverage, the share of a text's numbers that sit inside any claim.
- line 119: Hallucination is structural, not incidental: calibrated language models must hallucinate at a rate approaching the fraction of facts appearing exactly once in training [kalai2024], and standard training pipelines reward guessing over acknowledging uncertainty [kalai2025]. Regulation no longer adds urgency; it adds exposure. The EU AI Act's transparency duties have applied since 2 August 2026, with the Commission's Article 50 guidelines adopted two weeks before; the Digital Omnibus deferred only one of those duties, machine-readable marking by systems already on the market, to 2 December 2026 [euaiact,art50guidelines2026,omnibus2026]. But the Code of Practice that operationalises these duties concerns marking the origin of content and says nothing about its accuracy [transparencycode2026]: a text can be fully compliant and wrong. And the problem has not gone away with better models: the leading legal research tools hallucinated on 17–33% of queries when tested in 2024, despite vendor claims of near-elimination [magesh2025], and a 2026 survey of court filings found more than a thousand containing fabricated citations, a number growing year over year [liu2026citations].
- line 121: The models are meanwhile in production. Generative AI is used in at least one business function at 70% of surveyed organizations [aiindex2026], in legal research [magesh2025] and in clinical documentation [wright2026]. Even systems built to cite fall short: in 2026 the citations of frontier deep-research agents checked out against their sources for only 39–77% of citations, and 10.7% of the citation URLs of the two commercial deep research agents had no archived record and likely never existed, against 4.8% for search-augmented models [citednotverified,rao2026], three years after the first generative search engines fully supported about half of their sentences [liu2023verifiability], a rate the ALCE benchmark reproduced for the best models of the time [alce]; and whether a citation holds is judged by a person or by another model rather than by a deterministic check [ais,citednotverified].

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: Varun Magesh, Faiz Surani, Matthew Dahl, Mirac Suzgun, Christopher D. Manning, and Daniel E. Ho

### citednotverified
Cited but Not Verified: Parsing and Evaluating Source Attribution in LLM Deep Research Agents
- authors: Onweller, H. and Lumer, E. and Huber, A. and Ramchandani, P. and Subbiah, V. K. and Feld, C.
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2605.06635
- source label: references/raw/citednotverified.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 107: begin(abstract) Organizations deploy LLMs in consequential settings [aiindex2026,magesh2025] and regulation now reaches generated text [euaiact,art50guidelines2026], yet the text seldom carries a link between a claim and the data behind it that a machine can check [citednotverified,rao2026]. ProveML is a Markdown extension of three inline constructs that declare entities, bind facts to a data source and check qualitative judgments against pre-declared thresholds. Verification is deterministic, exact comparison against a flat key-value store with no model in the loop: milliseconds per response, explainable, usable inside a generation loop or on text the model did not produce. Its semantics is stated formally and its guarantees, that verified means equal to the store and that no unregistered name can decide a judgment, are machine-checked. The verifier also reports coverage, the share of a text's numbers that sit inside any claim.
- line 121: The models are meanwhile in production. Generative AI is used in at least one business function at 70% of surveyed organizations [aiindex2026], in legal research [magesh2025] and in clinical documentation [wright2026]. Even systems built to cite fall short: in 2026 the citations of frontier deep-research agents checked out against their sources for only 39–77% of citations, and 10.7% of the citation URLs of the two commercial deep research agents had no archived record and likely never existed, against 4.8% for search-augmented models [citednotverified,rao2026], three years after the first generative search engines fully supported about half of their sentences [liu2023verifiability], a rate the ALCE benchmark reproduced for the best models of the time [alce]; and whether a citation holds is judged by a person or by another model rather than by a deterministic check [ais,citednotverified].

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Large language models (LLMs) power deep research agents that synthesize information from hundreds of web sources into cited reports, yet these citations cannot be reliably verified. Current approaches either trust models to self-cite accurately, risking bias, or employ retrieval-augmented generation (RAG) that does not validate source accessibility, relevance, or factual consistency.…

### art50guidelines2026
Guidelines on the implementation of the transparency obligations for certain AI systems under Article 50 of the AI Act
- authors: European Commission
- year: 2026
- venue: Unknown
- source url: https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems
- source label: references/raw/art50guidelines2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 107: begin(abstract) Organizations deploy LLMs in consequential settings [aiindex2026,magesh2025] and regulation now reaches generated text [euaiact,art50guidelines2026], yet the text seldom carries a link between a claim and the data behind it that a machine can check [citednotverified,rao2026]. ProveML is a Markdown extension of three inline constructs that declare entities, bind facts to a data source and check qualitative judgments against pre-declared thresholds. Verification is deterministic, exact comparison against a flat key-value store with no model in the loop: milliseconds per response, explainable, usable inside a generation loop or on text the model did not produce. Its semantics is stated formally and its guarantees, that verified means equal to the store and that no unregistered name can decide a judgment, are machine-checked. The verifier also reports coverage, the share of a text's numbers that sit inside any claim.
- line 119: Hallucination is structural, not incidental: calibrated language models must hallucinate at a rate approaching the fraction of facts appearing exactly once in training [kalai2024], and standard training pipelines reward guessing over acknowledging uncertainty [kalai2025]. Regulation no longer adds urgency; it adds exposure. The EU AI Act's transparency duties have applied since 2 August 2026, with the Commission's Article 50 guidelines adopted two weeks before; the Digital Omnibus deferred only one of those duties, machine-readable marking by systems already on the market, to 2 December 2026 [euaiact,art50guidelines2026,omnibus2026]. But the Code of Practice that operationalises these duties concerns marking the origin of content and says nothing about its accuracy [transparencycode2026]: a text can be fully compliant and wrong. And the problem has not gone away with better models: the leading legal research tools hallucinated on 17–33% of queries when tested in 2024, despite vendor claims of near-elimination [magesh2025], and a 2026 survey of court filings found more than a thousand containing fabricated citations, a number growing year over year [liu2026citations].

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: These guidelines define the scope of transparency obligations for providers and deployers of AI systems under Article 50 of the AI Act.

### aiindex2026
The 2026 AI Index Report
- authors: Stanford HAI
- year: 2026
- venue: Unknown
- source url: https://hai.stanford.edu/ai-index/2026-ai-index-report/economy
- source label: references/raw/aiindex2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 107: begin(abstract) Organizations deploy LLMs in consequential settings [aiindex2026,magesh2025] and regulation now reaches generated text [euaiact,art50guidelines2026], yet the text seldom carries a link between a claim and the data behind it that a machine can check [citednotverified,rao2026]. ProveML is a Markdown extension of three inline constructs that declare entities, bind facts to a data source and check qualitative judgments against pre-declared thresholds. Verification is deterministic, exact comparison against a flat key-value store with no model in the loop: milliseconds per response, explainable, usable inside a generation loop or on text the model did not produce. Its semantics is stated formally and its guarantees, that verified means equal to the store and that no unregistered name can decide a judgment, are machine-checked. The verifier also reports coverage, the share of a text's numbers that sit inside any claim.
- line 121: The models are meanwhile in production. Generative AI is used in at least one business function at 70% of surveyed organizations [aiindex2026], in legal research [magesh2025] and in clinical documentation [wright2026]. Even systems built to cite fall short: in 2026 the citations of frontier deep-research agents checked out against their sources for only 39–77% of citations, and 10.7% of the citation URLs of the two commercial deep research agents had no archived record and likely never existed, against 4.8% for search-augmented models [citednotverified,rao2026], three years after the first generative search engines fully supported about half of their sentences [liu2023verifiability], a rate the ALCE benchmark reproduced for the best models of the time [alce]; and whether a citation holds is judged by a person or by another model rather than by a deterministic check [ais,citednotverified].

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: This chapter analyzes the economic footprint of AI across the private sector and its implications for labor markets, productivity, and the future of work.

### rao2026
Detecting and Correcting Reference Hallucinations in Commercial LLMs and Deep Research Agents
- authors: Rao, Delip and Wong, Eric and Callison-Burch, Chris
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2604.03173
- source label: references/raw/rao2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 107: begin(abstract) Organizations deploy LLMs in consequential settings [aiindex2026,magesh2025] and regulation now reaches generated text [euaiact,art50guidelines2026], yet the text seldom carries a link between a claim and the data behind it that a machine can check [citednotverified,rao2026]. ProveML is a Markdown extension of three inline constructs that declare entities, bind facts to a data source and check qualitative judgments against pre-declared thresholds. Verification is deterministic, exact comparison against a flat key-value store with no model in the loop: milliseconds per response, explainable, usable inside a generation loop or on text the model did not produce. Its semantics is stated formally and its guarantees, that verified means equal to the store and that no unregistered name can decide a judgment, are machine-checked. The verifier also reports coverage, the share of a text's numbers that sit inside any claim.
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].
- line 121: The models are meanwhile in production. Generative AI is used in at least one business function at 70% of surveyed organizations [aiindex2026], in legal research [magesh2025] and in clinical documentation [wright2026]. Even systems built to cite fall short: in 2026 the citations of frontier deep-research agents checked out against their sources for only 39–77% of citations, and 10.7% of the citation URLs of the two commercial deep research agents had no archived record and likely never existed, against 4.8% for search-augmented models [citednotverified,rao2026], three years after the first generative search engines fully supported about half of their sentences [liu2023verifiability], a rate the ALCE benchmark reproduced for the best models of the time [alce]; and whether a citation holds is judged by a person or by another model rather than by a deterministic check [ais,citednotverified].

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: We organize this study around six research questions: RQ1 (Prevalence) How prevalent are citation URL failures across commercial LLMs and deep research agents?

### kalai2025
Why Language Models Hallucinate
- authors: Kalai, A. T. and Nachum, O. and Vempala, S. S. and Zhang, E.
- year: 2025
- venue: Unknown
- source url: https://arxiv.org/abs/2509.04664
- source label: references/raw/kalai2025.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].
- line 119: Hallucination is structural, not incidental: calibrated language models must hallucinate at a rate approaching the fraction of facts appearing exactly once in training [kalai2024], and standard training pipelines reward guessing over acknowledging uncertainty [kalai2025]. Regulation no longer adds urgency; it adds exposure. The EU AI Act's transparency duties have applied since 2 August 2026, with the Commission's Article 50 guidelines adopted two weeks before; the Digital Omnibus deferred only one of those duties, machine-readable marking by systems already on the market, to 2 December 2026 [euaiact,art50guidelines2026,omnibus2026]. But the Code of Practice that operationalises these duties concerns marking the origin of content and says nothing about its accuracy [transparencycode2026]: a text can be fully compliant and wrong. And the problem has not gone away with better models: the leading legal research tools hallucinated on 17–33% of queries when tested in 2024, despite vendor claims of near-elimination [magesh2025], and a 2026 survey of court filings found more than a thousand containing fabricated citations, a number growing year over year [liu2026citations].

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Like students facing hard exam questions, large language models sometimes guess when uncertain, producing plausible yet incorrect statements instead of admitting uncertainty. Such &#34;hallucinations&#34; persist even in state-of-the-art systems and undermine trust. We argue that language models hallucinate because the training and evaluation procedures reward guessing over acknowledging uncertainty, and we analyze the statistical causes of hallucinations in the modern training pipeline.…

### ji2023
Survey of Hallucination in Natural Language Generation
- authors: Ji, Z. and Lee, N. and Frieske, R. and Yu, T. and Su, D. and Xu, Y. and Ishii, E. and Bang, Y. J. and Madotto, A. and Fung, P.
- year: 2023
- venue: ACM Computing Surveys
- source url: https://doi.org/10.1145/3571730
- source label: references/raw/ji2023.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: Research output : Contribution to journal › Review article › peer-review

### clark2021
All That's `Human' Is Not Gold: Evaluating Human Evaluation of Generated Text
- authors: Clark, Elizabeth and August, Tal and Serrano, Sofia and Haduong, Nikita and Gururangan, Suchin and Smith, Noah A.
- year: 2021
- venue: Proc. ACL-IJCNLP (Volume 1: Long Papers)
- source url: https://doi.org/10.18653/v1/2021.acl-long.565
- source label: references/raw/clark2021.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Elizabeth Clark, Tal August, Sofia Serrano, Nikita Haduong, Suchin Gururangan, Noah A. Smith. Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers). 2021.

### jakesch2023
Human heuristics for AI-generated language are flawed
- authors: Jakesch, Maurice and Hancock, Jeffrey T. and Naaman, Mor
- year: 2023
- venue: Proceedings of the National Academy of Sciences
- source url: https://doi.org/10.1073/pnas.2208839120
- source label: references/raw/jakesch2023.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Human communication is increasingly intermixed with language generated by AI. Across chat, email, and social media, AI systems suggest words, complete sentences, or produce entire conversations. AI-generated language is often not identified as such but presented as language written by humans, raising concerns about novel forms of deception and manipulation. Here, we study how humans discern whether verbal self-presentations, one of the most personal and consequential forms of language, were generated by AI.…

### jones2026
Large language models pass a standard three-party Turing test
- authors: Jones, Cameron R. and Bergen, Benjamin K.
- year: 2026
- venue: Proceedings of the National Academy of Sciences
- source url: https://doi.org/10.1073/pnas.2524472123
- source label: references/raw/jones2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].

Source passages:
- None

Summary passages:
- [normalized] meta description :: The Turing test asks whether a machine can imitate human behavior so well that another human cannot reliably tell the difference. It is not only the oldest and most discussed test of AI but can also provide insight into what cues people use to ...

### russell2025
People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text
- authors: Russell, Jenna and Karpinska, Marzena and Iyyer, Mohit
- year: 2025
- venue: Proc. ACL (Volume 1: Long Papers)
- source url: https://doi.org/10.18653/v1/2025.acl-long.267
- source label: references/raw/russell2025.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Jenna Russell, Marzena Karpinska, Mohit Iyyer. Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers). 2025.

### zhou2024
Relying on the Unreliable: The Impact of Language Models' Reluctance to Express Uncertainty
- authors: Zhou, Kaitlyn and Hwang, Jena D. and Ren, Xiang and Sap, Maarten
- year: 2024
- venue: Proc. ACL (Volume 1: Long Papers)
- source url: https://doi.org/10.18653/v1/2024.acl-long.198
- source label: references/raw/zhou2024.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Kaitlyn Zhou, Jena D. Hwang, Xiang Ren, Maarten Sap. Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers). 2024.

### xiong2024
Can LLMs Express Their Uncertainty? An Empirical Evaluation of Confidence Elicitation in LLMs
- authors: Xiong, Miao and Hu, Zhiyuan and Lu, Xinyang and Li, Yifei and Fu, Jie and He, Junxian and Hooi, Bryan
- year: 2024
- venue: Proc. ICLR
- source url: https://arxiv.org/abs/2306.13063
- source label: references/raw/xiong2024.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Empowering large language models to accurately express confidence in their answers is essential for trustworthy decision-making. Previous confidence elicitation methods, which primarily rely on white-box access to internal model information or model fine-tuning, have become less suitable for LLMs, especially closed-source commercial APIs. This leads to a growing need to explore the untapped area of black-box approaches for LLM uncertainty estimation.…

### cao2024
Characterizing Multimodal Long-form Summarization: A Case Study on Financial Reports
- authors: Cao, Tianyu and Raman, Natraj and Dervovic, Danial and Tan, Chenhao
- year: 2024
- venue: Unknown
- source url: https://arxiv.org/abs/2404.06162
- source label: references/raw/cao2024.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: Summarization, the task of condensing the input text while preserving important information, is ubiquitous and has attracted a lot of interest in the AI community. Recent work demonstrates the strong capability of large language models (LLMs) in summarization. In fact, Pu et al. (2023) finds a clear preference for LLM-generated summaries over human-written ones and even declares the death of summarization.

### liu2023verifiability
Evaluating Verifiability in Generative Search Engines
- authors: Liu, Nelson F. and Zhang, Tianyi and Liang, Percy
- year: 2023
- venue: Findings of the Association for Computational Linguistics: EMNLP 2023
- source url: https://doi.org/10.18653/v1/2023.findings-emnlp.467
- source label: references/raw/liu2023verifiability.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 117: Large Language Models (LLMs) produce fluent, contextually appropriate text that untrained readers can no longer reliably distinguish from human-authored content [clark2021,jakesch2023,jones2026]; readers who write with these models daily still can [russell2025]. The fluency carries no reliable signal of the model's own uncertainty: deployed models rarely volunteer uncertainty even when they are wrong, verbalised confidence is systematically overconfident, and the training pipeline rewards a confident guess over an admission of ignorance [zhou2024,xiong2024,kalai2025]. And the fluency coexists with a fundamental reliability problem: LLMs hallucinate [ji2023]. They generate text that is plausible but factually incorrect: fabricated citations, 3–13% of the citation URLs supplied by commercial models and deep research agents in 2026 having no archived record and likely never having existed [rao2026]; numbers with no basis in the source [cao2024]; and statements whose citations do not support them [liu2023verifiability].
- line 121: The models are meanwhile in production. Generative AI is used in at least one business function at 70% of surveyed organizations [aiindex2026], in legal research [magesh2025] and in clinical documentation [wright2026]. Even systems built to cite fall short: in 2026 the citations of frontier deep-research agents checked out against their sources for only 39–77% of citations, and 10.7% of the citation URLs of the two commercial deep research agents had no archived record and likely never existed, against 4.8% for search-augmented models [citednotverified,rao2026], three years after the first generative search engines fully supported about half of their sentences [liu2023verifiability], a rate the ALCE benchmark reproduced for the best models of the time [alce]; and whether a citation holds is judged by a person or by another model rather than by a deterministic check [ais,citednotverified].

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Nelson Liu, Tianyi Zhang, Percy Liang. Findings of the Association for Computational Linguistics: EMNLP 2023. 2023.

### kalai2024
Calibrated Language Models Must Hallucinate
- authors: Kalai, A. T. and Vempala, S. S.
- year: 2024
- venue: Proc. STOC
- source url: https://arxiv.org/abs/2311.14648
- source label: references/raw/kalai2024.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 119: Hallucination is structural, not incidental: calibrated language models must hallucinate at a rate approaching the fraction of facts appearing exactly once in training [kalai2024], and standard training pipelines reward guessing over acknowledging uncertainty [kalai2025]. Regulation no longer adds urgency; it adds exposure. The EU AI Act's transparency duties have applied since 2 August 2026, with the Commission's Article 50 guidelines adopted two weeks before; the Digital Omnibus deferred only one of those duties, machine-readable marking by systems already on the market, to 2 December 2026 [euaiact,art50guidelines2026,omnibus2026]. But the Code of Practice that operationalises these duties concerns marking the origin of content and says nothing about its accuracy [transparencycode2026]: a text can be fully compliant and wrong. And the problem has not gone away with better models: the leading legal research tools hallucinated on 17–33% of queries when tested in 2024, despite vendor claims of near-elimination [magesh2025], and a 2026 survey of court filings found more than a thousand containing fabricated citations, a number growing year over year [liu2026citations].

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Recent language models generate false but plausible-sounding text with surprising frequency. Such &#34;hallucinations&#34; are an obstacle to the usability of language-based AI systems and can harm people who rely upon their outputs. This work shows that there is an inherent statistical lower-bound on the rate that pretrained language models hallucinate certain types of facts, having nothing to do with the transformer LM architecture or data quality.…

### omnibus2026
Regulation (EU) 2026/1744 of the European Parliament and of the Council of 8 July 2026 amending Regulations (EU) 2024/1689, (EU) 2018/1139 and (EU) 2023/1230 as regards the simplification of the implementation of harmonised rules on artificial intelligence (Digital Omnibus on AI)
- authors: European Parliament and Council of the European Union
- year: 2026
- venue: Unknown
- source url: https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng
- source label: references/raw/omnibus2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 119: Hallucination is structural, not incidental: calibrated language models must hallucinate at a rate approaching the fraction of facts appearing exactly once in training [kalai2024], and standard training pipelines reward guessing over acknowledging uncertainty [kalai2025]. Regulation no longer adds urgency; it adds exposure. The EU AI Act's transparency duties have applied since 2 August 2026, with the Commission's Article 50 guidelines adopted two weeks before; the Digital Omnibus deferred only one of those duties, machine-readable marking by systems already on the market, to 2 December 2026 [euaiact,art50guidelines2026,omnibus2026]. But the Code of Practice that operationalises these duties concerns marking the origin of content and says nothing about its accuracy [transparencycode2026]: a text can be fully compliant and wrong. And the problem has not gone away with better models: the leading legal research tools hallucinated on 17–33% of queries when tested in 2024, despite vendor claims of near-elimination [magesh2025], and a 2026 survey of court filings found more than a thousand containing fabricated citations, a number growing year over year [liu2026citations].

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: Do you want to help improving EUR-Lex ? This is a list of experimental features that you can enable. These features are still under development; they are not fully tested, and might reduce EUR-Lex stability. Don't forget to give your feedback!

### transparencycode2026
Code of Practice on Transparency of AI-generated Content
- authors: European AI Office
- year: 2026
- venue: Unknown
- source url: https://digital-strategy.ec.europa.eu/en/faqs/signing-code-practice-transparency-ai-generated-content
- source label: references/raw/transparencycode2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 119: Hallucination is structural, not incidental: calibrated language models must hallucinate at a rate approaching the fraction of facts appearing exactly once in training [kalai2024], and standard training pipelines reward guessing over acknowledging uncertainty [kalai2025]. Regulation no longer adds urgency; it adds exposure. The EU AI Act's transparency duties have applied since 2 August 2026, with the Commission's Article 50 guidelines adopted two weeks before; the Digital Omnibus deferred only one of those duties, machine-readable marking by systems already on the market, to 2 December 2026 [euaiact,art50guidelines2026,omnibus2026]. But the Code of Practice that operationalises these duties concerns marking the origin of content and says nothing about its accuracy [transparencycode2026]: a text can be fully compliant and wrong. And the problem has not gone away with better models: the leading legal research tools hallucinated on 17–33% of queries when tested in 2024, despite vendor claims of near-elimination [magesh2025], and a 2026 survey of court filings found more than a thousand containing fabricated citations, a number growing year over year [liu2026citations].

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: The Code of Practice on Transparency of AI-generated Content was published in June 2026. Providers and deployers can sign the code as a way to comply with the obligations for transparency of AI-generated Content.

### liu2026citations
Who Checks the Citations? Benchmarking Legal Hallucination Detection
- authors: Liu, Patty and Stammbach, Dominik and Henderson, Peter
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2606.21155
- source label: references/raw/liu2026citations.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 119: Hallucination is structural, not incidental: calibrated language models must hallucinate at a rate approaching the fraction of facts appearing exactly once in training [kalai2024], and standard training pipelines reward guessing over acknowledging uncertainty [kalai2025]. Regulation no longer adds urgency; it adds exposure. The EU AI Act's transparency duties have applied since 2 August 2026, with the Commission's Article 50 guidelines adopted two weeks before; the Digital Omnibus deferred only one of those duties, machine-readable marking by systems already on the market, to 2 December 2026 [euaiact,art50guidelines2026,omnibus2026]. But the Code of Practice that operationalises these duties concerns marking the origin of content and says nothing about its accuracy [transparencycode2026]: a text can be fully compliant and wrong. And the problem has not gone away with better models: the leading legal research tools hallucinated on 17–33% of queries when tested in 2024, despite vendor claims of near-elimination [magesh2025], and a 2026 survey of court filings found more than a thousand containing fabricated citations, a number growing year over year [liu2026citations].

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Attorneys, judges, and pro se filers increasingly use AI to draft legal documents, yet these tools frequently fabricate citations. Despite predictions that newer models would hallucinate less or that court sanctions would deter negligent filers, we found over 1,000 filings containing fabricated citations---with this number growing year-over-year. This study evaluates whether AI-based systems can mitigate these errors by automatically detecting hallucinations.…

### alce
Enabling Large Language Models to Generate Text with Citations
- authors: Gao, T. and Yen, H. and Yu, J. and Chen, D.
- year: 2023
- venue: Proc. EMNLP
- source url: https://doi.org/10.18653/v1/2023.emnlp-main.398
- source label: references/raw/alce.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 121: The models are meanwhile in production. Generative AI is used in at least one business function at 70% of surveyed organizations [aiindex2026], in legal research [magesh2025] and in clinical documentation [wright2026]. Even systems built to cite fall short: in 2026 the citations of frontier deep-research agents checked out against their sources for only 39–77% of citations, and 10.7% of the citation URLs of the two commercial deep research agents had no archived record and likely never existed, against 4.8% for search-augmented models [citednotverified,rao2026], three years after the first generative search engines fully supported about half of their sentences [liu2023verifiability], a rate the ALCE benchmark reproduced for the best models of the time [alce]; and whether a citation holds is judged by a person or by another model rather than by a deterministic check [ais,citednotverified].

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Tianyu Gao, Howard Yen, Jiatong Yu, Danqi Chen. Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing. 2023.

### ais
Measuring Attribution in Natural Language Generation Models
- authors: Rashkin, H. and Nikolaev, V. and Lamm, M. and Aroyo, L. and Collins, M. and Das, D. and Petrov, S. and Tomar, G. S. and Turc, I. and Reitter, D.
- year: 2023
- venue: Computational Linguistics
- source url: https://doi.org/10.1162/coli_a_00486
- source label: references/raw/ais.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 121: The models are meanwhile in production. Generative AI is used in at least one business function at 70% of surveyed organizations [aiindex2026], in legal research [magesh2025] and in clinical documentation [wright2026]. Even systems built to cite fall short: in 2026 the citations of frontier deep-research agents checked out against their sources for only 39–77% of citations, and 10.7% of the citation URLs of the two commercial deep research agents had no archived record and likely never existed, against 4.8% for search-augmented models [citednotverified,rao2026], three years after the first generative search engines fully supported about half of their sentences [liu2023verifiability], a rate the ALCE benchmark reproduced for the best models of the time [alce]; and whether a citation holds is judged by a person or by another model rather than by a deterministic check [ais,citednotverified].

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Hannah Rashkin, Vitaly Nikolaev, Matthew Lamm, Lora Aroyo, Michael Collins, Dipanjan Das, Slav Petrov, Gaurav Singh Tomar, Iulia Turc, David Reitter. Computational Linguistics, Volume 49, Issue 4 - December 2023. 2023.

### wright2026
Enterprise-wide simultaneous deployment of ambient scribe technology: lessons learned from an academic health system
- authors: Wright, Aileen P. and Nall, Carolynn K. and Franklin, Jacob J. H. and Horst, Sara N. and Kumah-Crystal, Yaa A. and Wright, Adam T. and Mize, Dara E.
- year: 2026
- venue: Journal of the American Medical Informatics Association
- source url: https://doi.org/10.1093/jamia/ocaf186
- source label: references/raw/wright2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 121: The models are meanwhile in production. Generative AI is used in at least one business function at 70% of surveyed organizations [aiindex2026], in legal research [magesh2025] and in clinical documentation [wright2026]. Even systems built to cite fall short: in 2026 the citations of frontier deep-research agents checked out against their sources for only 39–77% of citations, and 10.7% of the citation URLs of the two commercial deep research agents had no archived record and likely never existed, against 4.8% for search-augmented models [citednotverified,rao2026], three years after the first generative search engines fully supported about half of their sentences [liu2023verifiability], a rate the ALCE benchmark reproduced for the best models of the time [alce]; and whether a citation holds is judged by a person or by another model rather than by a deterministic check [ais,citednotverified].

Source passages:
- None

Summary passages:
- [normalized] meta description :: To report on the feasibility of a simultaneous, enterprise-wide deployment of EHR-integrated ambient scribe technology across a large academic health system. On January 15, 2025, ambient scribing was made available to over 2400 ambulatory and ...

### ixbrl
Inline XBRL Part 1: Specification 1.1
- authors: XBRL International
- year: 2013
- venue: Unknown
- source url: https://www.xbrl.org/specification/inlinexbrl-part1/rec-2013-11-18/inlinexbrl-part1-rec-2013-11-18.html
- source label: references/raw/ixbrl.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 123: The response this paper takes is not to make the model more truthful but to make its claims checkable: every marked claim either matches an addressable record or is flagged, deterministically, before anyone reads it. In short, ProveML is iXBRL for AI-generated text. Financial reporting solved a version of this problem two decades ago by embedding machine-readable tags in human-readable filings, so a regulator can audit a number without reading the prose around it [ixbrl]. ProveML applies that idea where the author is a model rather than a person, and adds what that setting needs: entity scoping, so a value is bound to the record it describes, and a threshold registry, so a qualitative judgment is a declared predicate rather than a choice of adjective; Figure fig:render-errors shows what that buys the reader.
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.
- line 397: begin(table)[h] centering small begin(tabular)(llcccc) toprule Approach & Category & Determ. & Structured & Inline & Inference midrule FActScore, SAFE, FacTool, HallDetect & Fact-checking & – & – & – & – Guardrail and grounding scorers & Guardrails & – & – & – & – Schema validators, decode-time grammars & Schema & checkmark & – & – & – ClaimDB, Evergreen, VeriFin & Data-grounded & Partial & checkmark & – & – FullCite & Inline citation & – & – & checkmark & – iXBRL$^*$ & Inline tagging & checkmark & checkmark & checkmark & – SymGen & Inline tagging & checkmark & checkmark & checkmark & – PCN & Inline tagging & checkmark & checkmark & checkmark & – Claim-locked reporting & Inline tagging & checkmark & checkmark & checkmark & Partial FinGround & Hybrid post-hoc & Partial & checkmark & – & – ProveML & Inline tagging & checkmark & checkmark & checkmark & checkmark bottomrule end(tabular) caption(Comparison across representative verification approaches. Determ. = deterministic. Structured = against structured data. Inline = claim-level markup in text. Inference = composable threshold checks within natural language text. The guardrails row reflects the predominant model-based grounding mode, in which a trained model scores a response against its source and a threshold decides the outcome (Amazon Bedrock Guardrails contextual grounding check [bedrockgrounding2026], Azure AI Content Safety groundedness detection [azuregroundedness2026], Vectara's HHEM [vectarahhem2026] and similar); Amazon Bedrock's separate Automated Reasoning checks add formal logic checks against a declared policy and validate only what the policy's variables capture, not author-marked claims in the text [bedrockautoreasoning2026]. Claim-locked reporting ties language strength to statistical thresholds but does not compose them. FinGround recomputes arithmetic claims deterministically but decomposes and types them with a model, hence Partial; the data-grounded row is Partial for the same reason, since Evergreen compiles claims to queries on an LLM query engine and VeriFin grounds and derives its operands with a model before the Z3 check. $^*$The XBRL formula family provides document-level computation and assertion checks over the facts in a report [xbrlvalidation2009,xbrlvalueassertions2009]; the Inline XBRL specification is scoped to syntax and to mapping it into an XBRL instance, and defines no claim-scoped inference [ixbrl].) label(tab:related) end(table)

Source passages:
- None

Summary passages:
- None

### commonmark
CommonMark Spec
- authors: MacFarlane, John
- year: 2024
- venue: Unknown
- source url: https://spec.commonmark.org/0.31.2/
- source label: references/raw/commonmark.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 139: ProveML extends Markdown with three constructs, using characters ( texttt(@), texttt(%), texttt(?)) that do not conflict with standard Markdown syntax. Instruction-tuned models routinely answer in Markdown [sun2025idiosyncrasies], and a CommonMark-conformant renderer passes the constructs through unchanged, because characters not given an interpretation by any Markdown rule are parsed as plain textual content [commonmark]; in our runs every model produced the markup on every query.

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: Markdown is a plain text format for writing structured documents, based on conventions for indicating formatting in email and usenet posts. It was developed by John Gruber (with help from Aaron Swartz) and released in 2004 in the form of a syntax description and a Perl script ( Markdown.pl ) for converting Markdown to HTML. In the next decade, dozens of implementations were developed in many languages. Some extended the original Markdown syntax with conventions for footnotes, tables, and other document elements.…

### sun2025idiosyncrasies
Idiosyncrasies in Large Language Models
- authors: Sun, Mingjie and Yin, Yida and Xu, Zhiqiu and Kolter, J. Zico and Liu, Zhuang
- year: 2025
- venue: Proc. ICML
- source url: https://arxiv.org/abs/2502.12150
- source label: references/raw/sun2025idiosyncrasies.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 139: ProveML extends Markdown with three constructs, using characters ( texttt(@), texttt(%), texttt(?)) that do not conflict with standard Markdown syntax. Instruction-tuned models routinely answer in Markdown [sun2025idiosyncrasies], and a CommonMark-conformant renderer passes the constructs through unchanged, because characters not given an interpretation by any Markdown rule are parsed as plain textual content [commonmark]; in our runs every model produced the markup on every query.

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: In this paper, we investigate whether LLMs exhibit idiosyncrasies that enable their outputs to be reliably differentiated. Inspired by recent studies on dataset bias in computer vision ( Liu & He, 2025 ; Zeng et al., 2024 ) , which showed that images from different large-scale datasets can be accurately distinguished by standard neural networks, we consider a similar synthetic classification task to assess the separability of responses generated between different LLMs.…

### nadkarni1999
Organization of Heterogeneous Scientific Data Using the EAV/CR Representation
- authors: Nadkarni, Prakash M. and Marenco, Luis and Chen, Roland and Skoufos, Emmanouil and Shepherd, Gordon and Miller, Perry
- year: 1999
- venue: Journal of the American Medical Informatics Association
- source url: https://doi.org/10.1136/jamia.1999.0060478
- source label: references/raw/nadkarni1999.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 167: The fact store. is a flat key-value index in the Entity-Attribute-Value pattern [nadkarni1999,dinu2007]; any source with records and fields flattens into it as texttt(type:id.field $ rightarrow$ value), with optional companion keys for units and nested sub-paths for hierarchical data:

Source passages:
- None

Summary passages:
- [normalized] meta description :: Entity-attribute-value (EAV) representation is a means of organizing highly heterogeneous data using a relatively simple physical database schema. EAV representation is widely used in the medical domain, most notably in the storage of data related ...

### dinu2007
Guidelines for the effective use of entity-attribute-value modeling for biomedical databases
- authors: Dinu, Valentin and Nadkarni, Prakash
- year: 2007
- venue: International Journal of Medical Informatics
- source url: https://doi.org/10.1016/j.ijmedinf.2006.09.023
- source label: references/raw/dinu2007.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 167: The fact store. is a flat key-value index in the Entity-Attribute-Value pattern [nadkarni1999,dinu2007]; any source with records and fields flattens into it as texttt(type:id.field $ rightarrow$ value), with optional companion keys for units and nested sub-paths for hierarchical data:

Source passages:
- None

Summary passages:
- [normalized] meta description :: To introduce the goals of EAV database modeling, to describe the situations where Entity-Attribute-Value (EAV) modeling is a useful alternative to conventional relational methods of database modeling, and to describe the fine points of ...

### ozarda2016
Reference intervals: current status, recent developments and future considerations
- authors: Ozarda, Yesim
- year: 2016
- venue: Biochemia Medica
- source url: https://doi.org/10.11613/BM.2016.001
- source label: references/raw/ozarda2016.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 187: The threshold registry. follows a pattern shared by clinical reference intervals, JSON Schema validation and monitoring alert rules: a bounded condition on a single field is given a name and a human-readable label, so the judgment can be invoked and audited by that name rather than restated as an expression wherever it is used [ozarda2016,jsonschema2022,prometheusalerting]. Each definition has a name, a field, one predicate from a deliberately small vocabulary (Table tab:operators), an optional unit constraint, a label and a source for audit:

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Reference intervals: current status, recent developments and future considerations

### jsonschema2022
JSON Schema Validation: A Vocabulary for Structural Validation of JSON
- authors: Wright, Austin and Andrews, Henry and Hutton, Ben
- year: 2022
- venue: Unknown
- source url: https://json-schema.org/draft/2020-12/json-schema-validation
- source label: references/raw/jsonschema2022.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 187: The threshold registry. follows a pattern shared by clinical reference intervals, JSON Schema validation and monitoring alert rules: a bounded condition on a single field is given a name and a human-readable label, so the judgment can be invoked and audited by that name rather than restated as an expression wherever it is used [ozarda2016,jsonschema2022,prometheusalerting]. Each definition has a name, a field, one predicate from a deliberately small vocabulary (Table tab:operators), an optional unit constraint, a label and a source for audit:

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: JSON Schema (application/schema+json) has several purposes, one of which is JSON instance validation. This document specifies a vocabulary for JSON Schema to describe the meaning of JSON documents, provide hints for user interfaces working with JSON data, and to make assertions about what a valid document must look like. ¶

### prometheusalerting
Alerting rules
- authors: Prometheus Authors
- year: 2026
- venue: Undated; accessed 10 September 2026
- source url: https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/
- source label: references/raw/prometheusalerting.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 187: The threshold registry. follows a pattern shared by clinical reference intervals, JSON Schema validation and monitoring alert rules: a bounded condition on a single field is given a name and a human-readable label, so the judgment can be invoked and audited by that name rather than restated as an expression wherever it is used [ozarda2016,jsonschema2022,prometheusalerting]. Each definition has a name, a field, one predicate from a deliberately small vocabulary (Table tab:operators), an optional unit constraint, a label and a source for audit:

Source passages:
- None

Summary passages:
- None

### anthropicopus5
Introducing Claude Opus 5
- authors: Anthropic
- year: 2026
- venue: Unknown
- source url: https://www.anthropic.com/news/claude-opus-5
- source label: references/raw/anthropicopus5.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 269: Setup.. Three models current in August 2026: Claude Opus 5, released 24 July 2026 and described by its maker as coming "close to the frontier intelligence of Claude Fable 5 at half the price" [anthropicopus5], and Claude Sonnet 5, released 30 June 2026 [anthropicsonnet5], both through the Claude Code CLI with default settings; and DeepSeek V4 Pro ( texttt(DeepSeek-V4-Pro-0813), 1.6T parameters with 49B active, open weights under the MIT licence [deepseekv4pro]), served by Together AI. We call them current, not frontier: Anthropic's own frontier model at the time was Fable 5, which we did not run. Two benchmarks: 28 English prompts over a generated educational dataset of 741 pupils in 95 class offerings, footnote(Generated, not de-identified: every record is drawn from a latent-ability model, the school is fictional, and the seeded generator ships with the artifacts. We state this from experience: an earlier draft used a de-identified extract of real records under the label "synthetic"; it was withdrawn, replaced, and every educational result re-measured on the replacement.) and 10 English prompts over real SEC EDGAR FY2025 filings (2 entities, 11 fields). Three runs per model and benchmark, one correction pass: the verifier's errors are fed back once, and the corrected answer is accepted only if it verifies better without dropping claims. Verification rate is a per-query macro-average; a response with no markup scores 0%, an empty answer scores 0% rather than being dropped. Context is sliced per prompt from the benchmark's own entity lists –- an oracle retriever, which makes the rates an upper bound conditional on retrieval. The system prompt asks for entity and fact markup; no run produced an inference construct, so all rates measure those two. Every number in this section regenerates from the published runs ( texttt(experiments/frontier-summary.mjs), texttt(frontier-residuals.mjs)); the verifier's own conformance test (20 planted errors, all caught) is in Appendix sec:detection.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Opus 5 is a step change improvement for the Opus tier powering long-running agents while delivering improvements in coding and professional work.

### anthropicsonnet5
Introducing Claude Sonnet 5
- authors: Anthropic
- year: 2026
- venue: Unknown
- source url: https://www.anthropic.com/news/claude-sonnet-5
- source label: references/raw/anthropicsonnet5.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 269: Setup.. Three models current in August 2026: Claude Opus 5, released 24 July 2026 and described by its maker as coming "close to the frontier intelligence of Claude Fable 5 at half the price" [anthropicopus5], and Claude Sonnet 5, released 30 June 2026 [anthropicsonnet5], both through the Claude Code CLI with default settings; and DeepSeek V4 Pro ( texttt(DeepSeek-V4-Pro-0813), 1.6T parameters with 49B active, open weights under the MIT licence [deepseekv4pro]), served by Together AI. We call them current, not frontier: Anthropic's own frontier model at the time was Fable 5, which we did not run. Two benchmarks: 28 English prompts over a generated educational dataset of 741 pupils in 95 class offerings, footnote(Generated, not de-identified: every record is drawn from a latent-ability model, the school is fictional, and the seeded generator ships with the artifacts. We state this from experience: an earlier draft used a de-identified extract of real records under the label "synthetic"; it was withdrawn, replaced, and every educational result re-measured on the replacement.) and 10 English prompts over real SEC EDGAR FY2025 filings (2 entities, 11 fields). Three runs per model and benchmark, one correction pass: the verifier's errors are fed back once, and the corrected answer is accepted only if it verifies better without dropping claims. Verification rate is a per-query macro-average; a response with no markup scores 0%, an empty answer scores 0% rather than being dropped. Context is sliced per prompt from the benchmark's own entity lists –- an oracle retriever, which makes the rates an upper bound conditional on retrieval. The system prompt asks for entity and fact markup; no run produced an inference construct, so all rates measure those two. Every number in this section regenerates from the published runs ( texttt(experiments/frontier-summary.mjs), texttt(frontier-residuals.mjs)); the verifier's own conformance test (20 planted errors, all caught) is in Appendix sec:detection.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Our most agentic Sonnet yet, with top-tier intelligence for coding and everyday professional work.

### deepseekv4pro
DeepSeek-V4-Pro
- authors: DeepSeek-AI
- year: 2026
- venue: Unknown
- source url: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro
- source label: references/raw/deepseekv4pro.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 269: Setup.. Three models current in August 2026: Claude Opus 5, released 24 July 2026 and described by its maker as coming "close to the frontier intelligence of Claude Fable 5 at half the price" [anthropicopus5], and Claude Sonnet 5, released 30 June 2026 [anthropicsonnet5], both through the Claude Code CLI with default settings; and DeepSeek V4 Pro ( texttt(DeepSeek-V4-Pro-0813), 1.6T parameters with 49B active, open weights under the MIT licence [deepseekv4pro]), served by Together AI. We call them current, not frontier: Anthropic's own frontier model at the time was Fable 5, which we did not run. Two benchmarks: 28 English prompts over a generated educational dataset of 741 pupils in 95 class offerings, footnote(Generated, not de-identified: every record is drawn from a latent-ability model, the school is fictional, and the seeded generator ships with the artifacts. We state this from experience: an earlier draft used a de-identified extract of real records under the label "synthetic"; it was withdrawn, replaced, and every educational result re-measured on the replacement.) and 10 English prompts over real SEC EDGAR FY2025 filings (2 entities, 11 fields). Three runs per model and benchmark, one correction pass: the verifier's errors are fed back once, and the corrected answer is accepted only if it verifies better without dropping claims. Verification rate is a per-query macro-average; a response with no markup scores 0%, an empty answer scores 0% rather than being dropped. Context is sliced per prompt from the benchmark's own entity lists –- an oracle retriever, which makes the rates an upper bound conditional on retrieval. The system prompt asks for entity and fact markup; no run produced an inference construct, so all rates measure those two. Every number in this section regenerates from the published runs ( texttt(experiments/frontier-summary.mjs), texttt(frontier-residuals.mjs)); the verifier's own conformance test (20 planted errors, all caught) is in Appendix sec:detection.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: We’re on a journey to advance and democratize artificial intelligence through open source and open science.

### symgen
Towards Verifiable Text Generation with Symbolic References
- authors: Torroba Hennigen, L. and Shen, S. Z. and Nrusimha, A. and Gapp, B. and Sontag, D. and Kim, Y.
- year: 2024
- venue: Proc. COLM
- source url: https://arxiv.org/abs/2311.09188
- source label: references/raw/symgen.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.
- line 427: What LLMs provide is open-ended generation. What ProveML adds is a controllable, auditable boundary around that generation. For humans, the intended benefit is visual triage: verified claims carry a status, and attention shifts to what is unverified. We have not measured whether this reduces human verification effort, and the evidence from adjacent systems is mixed: [symgen] report their user study reduced average verification time by 20%, while [ten2026] report a 21-participant study in which verification and correction effort did not differ significantly from their baseline, even though their system reduced hallucination. Which of the two ProveML's rendering resembles in practice is an open empirical question. For agent loops the benefit is more direct and does not depend on human factors: specific error feedback (" texttt(%[glucose] (143 mg/dL ) in patient:308: should be 142 mg/dL)") enables targeted self-correction, which is what the verify-fix loop measures in Section sec:evaluation. The combination is what neither open-ended generation nor static verification offers alone: open-endedness with determinism.

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: LLMs are vulnerable to hallucinations, and thus their outputs generally require laborious human verification for high-stakes applications. To this end, we propose symbolically grounded generation (SymGen) as a simple approach for enabling easier manual validation of an LLM’s output. SymGen prompts an LLM to interleave its regular output text with explicit symbolic references to fields present in some conditioning data (e.g., a table in JSON format).…

### pcn2025
Proof-Carrying Numbers (PCN): A Protocol for Trustworthy Numeric Answers from LLMs via Claim Verification
- authors: Solatorio, Aivin V.
- year: 2025
- venue: Unknown
- source url: https://arxiv.org/abs/2509.06902
- source label: references/raw/pcn2025.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: Large Language Models (LLMs) are emerging as powerful interfaces for accessing knowledge in domains ranging from healthcare and finance to economics and international development. Their fluency makes them attractive to a wide range of users—from policymakers and researchers to clinicians, financial analysts, and the public—but their usefulness is constrained by their stochastic nature: they may generate numeric hallucinations .

### rdfa
RDFa 1.1 Primer --- Third Edition
- authors: W3C
- year: 2015
- venue: Unknown
- source url: https://www.w3.org/TR/rdfa-primer/
- source label: references/raw/rdfa.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- None

### fever
FEVER: a Large-scale Dataset for Fact Extraction and VERification
- authors: Thorne, J. and Vlachos, A. and Christodoulopoulos, C. and Mittal, A.
- year: 2018
- venue: Proc. NAACL-HLT
- source url: https://doi.org/10.18653/v1/N18-1074
- source label: references/raw/fever.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: James Thorne, Andreas Vlachos, Christos Christodoulopoulos, Arpit Mittal. Proceedings of the 2018 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long Papers). 2018.

### tabfact
TabFact: A Large-scale Dataset for Table-based Fact Verification
- authors: Chen, W. and Wang, H. and Chen, J. and Zhang, Y. and Wang, H. and Li, S. and Zhou, X. and Wang, W. Y.
- year: 2020
- venue: Proc. ICLR
- source url: https://arxiv.org/abs/1909.02164
- source label: references/raw/tabfact.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: The problem of verifying whether a textual hypothesis holds based on the given evidence, also known as fact verification, plays an important role in the study of natural language understanding and semantic representation. However, existing studies are mainly restricted to dealing with unstructured evidence (e.g., natural language sentences and documents, news, etc), while verification under structured evidence, such as tables, graphs, and databases, remains under-explored.…

### feverous
FEVEROUS: Fact Extraction and VERification Over Unstructured and Structured information
- authors: Aly, R. and Guo, Z. and Schlichtkrull, M. and Thorne, J. and Vlachos, A. and Christodoulopoulos, C. and Cocarascu, O. and Mittal, A.
- year: 2021
- venue: Proc. NeurIPS Datasets and Benchmarks Track
- source url: https://arxiv.org/abs/2106.05707
- source label: references/raw/feverous.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Fact verification has attracted a lot of attention in the machine learning and natural language processing communities, as it is one of the key methods for detecting misinformation. Existing large-scale benchmarks for this task have focused mostly on textual sources, i.e. unstructured information, and thus ignored the wealth of information available in structured formats, such as tables.…

### summac
SummaC: Re-Visiting NLI-based Models for Inconsistency Detection in Summarization
- authors: Laban, P. and Schnabel, T. and Bennett, P. N. and Hearst, M. A.
- year: 2022
- venue: Transactions of the Association for Computational Linguistics
- source url: https://doi.org/10.1162/tacl_a_00453
- source label: references/raw/summac.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Philippe Laban, Tobias Schnabel, Paul N. Bennett, Marti A. Hearst. Transactions of the Association for Computational Linguistics, Volume 10. 2022.

### alignscore
AlignScore: Evaluating Factual Consistency with A Unified Alignment Function
- authors: Zha, Y. and Yang, Y. and Li, R. and Hu, Z.
- year: 2023
- venue: Proc. ACL
- source url: https://doi.org/10.18653/v1/2023.acl-long.634
- source label: references/raw/alignscore.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Yuheng Zha, Yichi Yang, Ruichen Li, Zhiting Hu. Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers). 2023.

### minicheck
MiniCheck: Efficient Fact-Checking of LLMs on Grounding Documents
- authors: Tang, L. and Laban, P. and Durrett, G.
- year: 2024
- venue: Proc. EMNLP
- source url: https://doi.org/10.18653/v1/2024.emnlp-main.499
- source label: references/raw/minicheck.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Liyan Tang, Philippe Laban, Greg Durrett. Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing. 2024.

### claimlocked2026
Provenance Before Prose: Claim-Locked Reporting
- authors: Fan, Xiao and Li, Jingyuan and Guo, Hongbin and Han, Yubo and Zhang, Yi
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2608.25336
- source label: references/raw/claimlocked2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Large language models (LLMs) can fluently verbalize statistical evidence, yet statistical reports can still drift numerical values, invert effect directions, or restate thresholded contrasts as categorical effects. We frame these failures as a control problem: the evidence-bearing content of a scientific report should be fixed by structured statistical results rather than sampled during prose generation. We therefore use cross-run reproducibility to stress-test whether report-visible numbers and claims are bound before prose generation.…

### verifin2026
VeriFin: A Neurosymbolic Framework for Verifying LLM-Generated Financial Claims
- authors: Hall, Bethel and Shome, Sachi and Eiers, William
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2608.10213
- source label: references/raw/verifin2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Large language models often produce plausible numerical claims from financial filings while using the wrong reporting period, unit, line item, or formula. Verifying such claims requires more than rechecking arithmetic: a verifier must ground the relevant facts, establish the authorized calculation, and determine whether the candidate value follows from both.…

### datareferencing2026
When LLMs Read Tables Carelessly: Measuring and Reducing Data Referencing Errors
- authors: Yang, Yuqing and Zhu, Qi and Han, Zhen and Han, Boran and Shen, Zhengyuan and Wang, Shuai and Ioannidis, Vassilis N. and Rangwala, Huzefa
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2606.32029
- source label: references/raw/datareferencing2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: While large language models (LLMs) perform well on table tasks, they still make data referencing errors (DREs), i.e., incorrectly citing or omitting table values, despite understanding the table structure. Beyond final-answer accuracy, DREs directly compromise the correctness and reliability of intermediate reasoning steps. Yet prior studies have only offered limited, small-scale analyses. In this work, we present the first systematic evaluation of tabular data referencing errors across different models and tasks.…

### fullcite2026
Explicit Evidence Grounding via Structured Inline Citation Generation
- authors: Yeginbergen, Anar and W"uhrl, Amelie and Rogers, Anna and Agerri, Rodrigo
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2606.07130
- source label: references/raw/fullcite2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: As AI systems become more widely adopted, the demand for factual and faithful generation grows. Properly attributing information through citations becomes, therefore, crucial. This work introduces FullCite, a framework that, in contrast to most previous works, generates structured inline citations linking each claim to both its source document and supporting evidence. FullCite proposes three strategies to inline citation generation: prompt-based generation, constrained decoding over a citation grammar, and posthoc span alignment.…

### dtg2026
Decode-Time Grammars: Constrained LLM Generation over a Refinement Order of Grammar Fragments
- authors: Zhang, Shuoming and Xu, Ruiyuan and Li, Haofeng and Yu, Qiuchu and Zhang, Yangyu and Xia, Chunwei and Feng, Xiaobing and Wang, Chenxi and Cui, Huimin and Zhao, Jiacheng
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2607.18357
- source label: references/raw/dtg2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Large language models now write a growing share of the world's code, increasingly inside agents and serving systems that compile, execute, or dispatch generated code without line-by-line review. This works well for mainstream languages but remains brittle for low-resource programming surfaces such as domain-specific languages, custom library APIs, and command-line tools.…

### halldetect2026
Decomposed Entailment for Factuality Checking and Hallucination Detection
- authors: Oukelmoun, Achir and Semmar, Nasredine and De Chalendar, Ga"el
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2608.05823
- source label: references/raw/halldetect2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: The reliability of Large Language Models (LLMs) is often compromised by factual inconsistencies, including hallucinations---cases where generated content is not supported by the underlying source. We present HallDetect, a lightweight, reference-free, and black-box framework for hallucination detection that we evaluate not only on summarization but across a broader range of source-grounded generation settings.…

### evergreen2026
Evergreen: Efficient Claim Verification for Semantic Aggregates
- authors: Lee, Jiwon and Han, Seokhyun and Sen, Rathijit and Yeom, Jinsoo and Cetintemel, Ugur and Datta, Anindya
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2604.26180
- source label: references/raw/evergreen2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 375: The idea of tagging human-readable text for machine resolution is old: RDFa binds spans of prose to entities in a structured vocabulary and assumes the author meant it [rdfa]; iXBRL embeds machine-readable tags in financial reports for automated audit [ixbrl]. ProveML adds the verdict to that lineage –- not what a span refers to, but whether the claim survives comparison with the record. Among recent systems, Proof-Carrying Numbers [pcn2025] is the nearest neighbor (claim-bound numeric tokens, deterministically verified in the renderer, with declared tolerance policies; its paper describes neither entity scoping in prose nor a named vocabulary for qualitative judgments), and SymGen [symgen] takes the opposite strategy: the model emits references and a parser substitutes the values, so a wrong number is impossible and so is reporting one; the technical report compares the two on identical runs. Claim-locked reporting [claimlocked2026] is the 2026 form of that strategy –- the numbers, their direction and the permitted strength of language are fixed before the model writes connective prose –- and shares ProveML's premise that qualitative wording must be tied to a declared threshold, while giving up the ability to audit text it did not produce. VeriFin [verifin2026] checks financial claims against XBRL facts with an SMT solver, placing the arithmetic in the verifier where ProveML places it in the data layer. [datareferencing2026] measure the failure class our residual errors belong to –- values miscited from a table the model was shown –- and detect it with a trained critic; ProveML detects it with a lookup. Fact verification against evidence has a canonical benchmark lineage –- FEVER [fever], TabFact [tabfact], FEVEROUS [feverous] –- in which a trained model judges support; ProveML sits outside it by making the judgment a lookup. Probabilistic faithfulness checkers, academic (SummaC, [summac]; AlignScore, [alignscore]; MiniCheck, [minicheck]; HallDetect, [halldetect2026]) and industrial, score responses after generation; Evergreen [evergreen2026] verifies aggregate claims over relational data as queries, which ProveML can only bind once the aggregate is materialised as a fact; structured inline citation [fullcite2026] and decode-time grammars whose reference slots admit only declared names [dtg2026] are the constrained-generation route to the same end, and the natural next step for ProveML (Section sec:limitations). To our knowledge, no existing framework combines inline claim markup, deterministic mismatch detection against structured data, and composable threshold inference in a single system. footnote(We screened the titles and abstracts of the 4(,)617 papers in the ACL 2026 main, short, findings and industry volumes against concept patterns for claim-level attribution, structured-data faithfulness, symbolic or deterministic verification, provenance and markup schemes, then read the resulting candidates by hand. The sweep was not preserved as a runnable artifact, so this is the result of a search rather than an exhaustive negative.) Table tab:related places the neighbours; the technical report discusses each in full.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: With recent semantic query processing engines, semantic aggregation has become a primitive operator, enabling the reduction of a relation into a natural language aggregate using an LLM. However, the resulting semantic aggregate may contain claims that are not grounded in the underlying relation. Verifying such claims is challenging: they often involve quantifiers, groupings, and comparisons over relations that far exceed LLM context windows and require a costly combination of semantic and symbolic processing.…

### bedrockgrounding2026
Use contextual grounding check to filter hallucinations in responses
- authors: Amazon Web Services
- year: 2026
- venue: Accessed 10 September 2026
- source url: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding-check.html
- source label: references/raw/bedrockgrounding2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 397: begin(table)[h] centering small begin(tabular)(llcccc) toprule Approach & Category & Determ. & Structured & Inline & Inference midrule FActScore, SAFE, FacTool, HallDetect & Fact-checking & – & – & – & – Guardrail and grounding scorers & Guardrails & – & – & – & – Schema validators, decode-time grammars & Schema & checkmark & – & – & – ClaimDB, Evergreen, VeriFin & Data-grounded & Partial & checkmark & – & – FullCite & Inline citation & – & – & checkmark & – iXBRL$^*$ & Inline tagging & checkmark & checkmark & checkmark & – SymGen & Inline tagging & checkmark & checkmark & checkmark & – PCN & Inline tagging & checkmark & checkmark & checkmark & – Claim-locked reporting & Inline tagging & checkmark & checkmark & checkmark & Partial FinGround & Hybrid post-hoc & Partial & checkmark & – & – ProveML & Inline tagging & checkmark & checkmark & checkmark & checkmark bottomrule end(tabular) caption(Comparison across representative verification approaches. Determ. = deterministic. Structured = against structured data. Inline = claim-level markup in text. Inference = composable threshold checks within natural language text. The guardrails row reflects the predominant model-based grounding mode, in which a trained model scores a response against its source and a threshold decides the outcome (Amazon Bedrock Guardrails contextual grounding check [bedrockgrounding2026], Azure AI Content Safety groundedness detection [azuregroundedness2026], Vectara's HHEM [vectarahhem2026] and similar); Amazon Bedrock's separate Automated Reasoning checks add formal logic checks against a declared policy and validate only what the policy's variables capture, not author-marked claims in the text [bedrockautoreasoning2026]. Claim-locked reporting ties language strength to statistical thresholds but does not compose them. FinGround recomputes arithmetic claims deterministically but decomposes and types them with a model, hence Partial; the data-grounded row is Partial for the same reason, since Evergreen compiles claims to queries on an LLM query engine and VeriFin grounds and derives its operands with a model before the Z3 check. $^*$The XBRL formula family provides document-level computation and assertion checks over the facts in a report [xbrlvalidation2009,xbrlvalueassertions2009]; the Inline XBRL specification is scoped to syntax and to mapping it into an XBRL instance, and defines no claim-scoped inference [ixbrl].) label(tab:related) end(table)

Source passages:
- None

Summary passages:
- [normalized] meta description :: Amazon Bedrock Guardrails supports contextual grounding checks to detect and filter hallucinations in model responses when a reference source and a user query is provided. The supported use cases include summarization, paraphrasing, and question answering as defined in computer science discipline. (Conversational QA / Chatbot use cases are not supported.)

### bedrockautoreasoning2026
What are Automated Reasoning checks in Amazon Bedrock Guardrails?
- authors: Amazon Web Services
- year: 2026
- venue: Accessed 10 September 2026
- source url: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-automated-reasoning-checks.html
- source label: references/raw/bedrockautoreasoning2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 397: begin(table)[h] centering small begin(tabular)(llcccc) toprule Approach & Category & Determ. & Structured & Inline & Inference midrule FActScore, SAFE, FacTool, HallDetect & Fact-checking & – & – & – & – Guardrail and grounding scorers & Guardrails & – & – & – & – Schema validators, decode-time grammars & Schema & checkmark & – & – & – ClaimDB, Evergreen, VeriFin & Data-grounded & Partial & checkmark & – & – FullCite & Inline citation & – & – & checkmark & – iXBRL$^*$ & Inline tagging & checkmark & checkmark & checkmark & – SymGen & Inline tagging & checkmark & checkmark & checkmark & – PCN & Inline tagging & checkmark & checkmark & checkmark & – Claim-locked reporting & Inline tagging & checkmark & checkmark & checkmark & Partial FinGround & Hybrid post-hoc & Partial & checkmark & – & – ProveML & Inline tagging & checkmark & checkmark & checkmark & checkmark bottomrule end(tabular) caption(Comparison across representative verification approaches. Determ. = deterministic. Structured = against structured data. Inline = claim-level markup in text. Inference = composable threshold checks within natural language text. The guardrails row reflects the predominant model-based grounding mode, in which a trained model scores a response against its source and a threshold decides the outcome (Amazon Bedrock Guardrails contextual grounding check [bedrockgrounding2026], Azure AI Content Safety groundedness detection [azuregroundedness2026], Vectara's HHEM [vectarahhem2026] and similar); Amazon Bedrock's separate Automated Reasoning checks add formal logic checks against a declared policy and validate only what the policy's variables capture, not author-marked claims in the text [bedrockautoreasoning2026]. Claim-locked reporting ties language strength to statistical thresholds but does not compose them. FinGround recomputes arithmetic claims deterministically but decomposes and types them with a model, hence Partial; the data-grounded row is Partial for the same reason, since Evergreen compiles claims to queries on an LLM query engine and VeriFin grounds and derives its operands with a model before the Z3 check. $^*$The XBRL formula family provides document-level computation and assertion checks over the facts in a report [xbrlvalidation2009,xbrlvalueassertions2009]; the Inline XBRL specification is scoped to syntax and to mapping it into an XBRL instance, and defines no claim-scoped inference [ixbrl].) label(tab:related) end(table)

Source passages:
- None

Summary passages:
- [normalized] meta description :: Learn how Automated Reasoning checks in Amazon Bedrock Guardrails use mathematical verification to detect hallucinations, highlight unstated assumptions, and provide explanations for why accurate statements are correct.

### azuregroundedness2026
Groundedness detection in Azure AI Content Safety - Azure AI services
- authors: Microsoft
- year: 2026
- venue: Accessed 10 September 2026
- source url: https://learn.microsoft.com/en-us/azure/ai-services/content-safety/concepts/groundedness
- source label: references/raw/azuregroundedness2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 397: begin(table)[h] centering small begin(tabular)(llcccc) toprule Approach & Category & Determ. & Structured & Inline & Inference midrule FActScore, SAFE, FacTool, HallDetect & Fact-checking & – & – & – & – Guardrail and grounding scorers & Guardrails & – & – & – & – Schema validators, decode-time grammars & Schema & checkmark & – & – & – ClaimDB, Evergreen, VeriFin & Data-grounded & Partial & checkmark & – & – FullCite & Inline citation & – & – & checkmark & – iXBRL$^*$ & Inline tagging & checkmark & checkmark & checkmark & – SymGen & Inline tagging & checkmark & checkmark & checkmark & – PCN & Inline tagging & checkmark & checkmark & checkmark & – Claim-locked reporting & Inline tagging & checkmark & checkmark & checkmark & Partial FinGround & Hybrid post-hoc & Partial & checkmark & – & – ProveML & Inline tagging & checkmark & checkmark & checkmark & checkmark bottomrule end(tabular) caption(Comparison across representative verification approaches. Determ. = deterministic. Structured = against structured data. Inline = claim-level markup in text. Inference = composable threshold checks within natural language text. The guardrails row reflects the predominant model-based grounding mode, in which a trained model scores a response against its source and a threshold decides the outcome (Amazon Bedrock Guardrails contextual grounding check [bedrockgrounding2026], Azure AI Content Safety groundedness detection [azuregroundedness2026], Vectara's HHEM [vectarahhem2026] and similar); Amazon Bedrock's separate Automated Reasoning checks add formal logic checks against a declared policy and validate only what the policy's variables capture, not author-marked claims in the text [bedrockautoreasoning2026]. Claim-locked reporting ties language strength to statistical thresholds but does not compose them. FinGround recomputes arithmetic claims deterministically but decomposes and types them with a model, hence Partial; the data-grounded row is Partial for the same reason, since Evergreen compiles claims to queries on an LLM query engine and VeriFin grounds and derives its operands with a model before the Z3 check. $^*$The XBRL formula family provides document-level computation and assertion checks over the facts in a report [xbrlvalidation2009,xbrlvalueassertions2009]; the Inline XBRL specification is scoped to syntax and to mapping it into an XBRL instance, and defines no claim-scoped inference [ixbrl].) label(tab:related) end(table)

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Learn about groundedness in large language model (LLM) responses, and how to detect outputs that deviate from source material.

### vectarahhem2026
HHEM-2.1-Open
- authors: Vectara
- year: 2026
- venue: Accessed 10 September 2026
- source url: https://huggingface.co/vectara/hallucination_evaluation_model
- source label: references/raw/vectarahhem2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 397: begin(table)[h] centering small begin(tabular)(llcccc) toprule Approach & Category & Determ. & Structured & Inline & Inference midrule FActScore, SAFE, FacTool, HallDetect & Fact-checking & – & – & – & – Guardrail and grounding scorers & Guardrails & – & – & – & – Schema validators, decode-time grammars & Schema & checkmark & – & – & – ClaimDB, Evergreen, VeriFin & Data-grounded & Partial & checkmark & – & – FullCite & Inline citation & – & – & checkmark & – iXBRL$^*$ & Inline tagging & checkmark & checkmark & checkmark & – SymGen & Inline tagging & checkmark & checkmark & checkmark & – PCN & Inline tagging & checkmark & checkmark & checkmark & – Claim-locked reporting & Inline tagging & checkmark & checkmark & checkmark & Partial FinGround & Hybrid post-hoc & Partial & checkmark & – & – ProveML & Inline tagging & checkmark & checkmark & checkmark & checkmark bottomrule end(tabular) caption(Comparison across representative verification approaches. Determ. = deterministic. Structured = against structured data. Inline = claim-level markup in text. Inference = composable threshold checks within natural language text. The guardrails row reflects the predominant model-based grounding mode, in which a trained model scores a response against its source and a threshold decides the outcome (Amazon Bedrock Guardrails contextual grounding check [bedrockgrounding2026], Azure AI Content Safety groundedness detection [azuregroundedness2026], Vectara's HHEM [vectarahhem2026] and similar); Amazon Bedrock's separate Automated Reasoning checks add formal logic checks against a declared policy and validate only what the policy's variables capture, not author-marked claims in the text [bedrockautoreasoning2026]. Claim-locked reporting ties language strength to statistical thresholds but does not compose them. FinGround recomputes arithmetic claims deterministically but decomposes and types them with a model, hence Partial; the data-grounded row is Partial for the same reason, since Evergreen compiles claims to queries on an LLM query engine and VeriFin grounds and derives its operands with a model before the Z3 check. $^*$The XBRL formula family provides document-level computation and assertion checks over the facts in a report [xbrlvalidation2009,xbrlvalueassertions2009]; the Inline XBRL specification is scoped to syntax and to mapping it into an XBRL instance, and defines no claim-scoped inference [ixbrl].) label(tab:related) end(table)

Source passages:
- None

Summary passages:
- None

### xbrlvalidation2009
Validation 1.0
- authors: XBRL International
- year: 2009
- venue: Unknown
- source url: https://www.xbrl.org/specification/validation/rec-2009-06-22/validation-rec-2009-06-22.html
- source label: references/raw/xbrlvalidation2009.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 397: begin(table)[h] centering small begin(tabular)(llcccc) toprule Approach & Category & Determ. & Structured & Inline & Inference midrule FActScore, SAFE, FacTool, HallDetect & Fact-checking & – & – & – & – Guardrail and grounding scorers & Guardrails & – & – & – & – Schema validators, decode-time grammars & Schema & checkmark & – & – & – ClaimDB, Evergreen, VeriFin & Data-grounded & Partial & checkmark & – & – FullCite & Inline citation & – & – & checkmark & – iXBRL$^*$ & Inline tagging & checkmark & checkmark & checkmark & – SymGen & Inline tagging & checkmark & checkmark & checkmark & – PCN & Inline tagging & checkmark & checkmark & checkmark & – Claim-locked reporting & Inline tagging & checkmark & checkmark & checkmark & Partial FinGround & Hybrid post-hoc & Partial & checkmark & – & – ProveML & Inline tagging & checkmark & checkmark & checkmark & checkmark bottomrule end(tabular) caption(Comparison across representative verification approaches. Determ. = deterministic. Structured = against structured data. Inline = claim-level markup in text. Inference = composable threshold checks within natural language text. The guardrails row reflects the predominant model-based grounding mode, in which a trained model scores a response against its source and a threshold decides the outcome (Amazon Bedrock Guardrails contextual grounding check [bedrockgrounding2026], Azure AI Content Safety groundedness detection [azuregroundedness2026], Vectara's HHEM [vectarahhem2026] and similar); Amazon Bedrock's separate Automated Reasoning checks add formal logic checks against a declared policy and validate only what the policy's variables capture, not author-marked claims in the text [bedrockautoreasoning2026]. Claim-locked reporting ties language strength to statistical thresholds but does not compose them. FinGround recomputes arithmetic claims deterministically but decomposes and types them with a model, hence Partial; the data-grounded row is Partial for the same reason, since Evergreen compiles claims to queries on an LLM query engine and VeriFin grounds and derives its operands with a model before the Z3 check. $^*$The XBRL formula family provides document-level computation and assertion checks over the facts in a report [xbrlvalidation2009,xbrlvalueassertions2009]; the Inline XBRL specification is scoped to syntax and to mapping it into an XBRL instance, and defines no claim-scoped inference [ixbrl].) label(tab:related) end(table)

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: Circulation of this Recommendation is unrestricted. This document is normative. Recipients are invited to submit comments to formula-feedback@xbrl.org , and to submit notification of any relevant patent rights of which they are aware and provide supporting documentation.

### xbrlvalueassertions2009
Value Assertions 1.0
- authors: XBRL International
- year: 2009
- venue: Unknown
- source url: https://www.xbrl.org/specification/valueassertions/rec-2009-06-22/valueassertions-rec-2009-06-22.html
- source label: references/raw/xbrlvalueassertions2009.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 397: begin(table)[h] centering small begin(tabular)(llcccc) toprule Approach & Category & Determ. & Structured & Inline & Inference midrule FActScore, SAFE, FacTool, HallDetect & Fact-checking & – & – & – & – Guardrail and grounding scorers & Guardrails & – & – & – & – Schema validators, decode-time grammars & Schema & checkmark & – & – & – ClaimDB, Evergreen, VeriFin & Data-grounded & Partial & checkmark & – & – FullCite & Inline citation & – & – & checkmark & – iXBRL$^*$ & Inline tagging & checkmark & checkmark & checkmark & – SymGen & Inline tagging & checkmark & checkmark & checkmark & – PCN & Inline tagging & checkmark & checkmark & checkmark & – Claim-locked reporting & Inline tagging & checkmark & checkmark & checkmark & Partial FinGround & Hybrid post-hoc & Partial & checkmark & – & – ProveML & Inline tagging & checkmark & checkmark & checkmark & checkmark bottomrule end(tabular) caption(Comparison across representative verification approaches. Determ. = deterministic. Structured = against structured data. Inline = claim-level markup in text. Inference = composable threshold checks within natural language text. The guardrails row reflects the predominant model-based grounding mode, in which a trained model scores a response against its source and a threshold decides the outcome (Amazon Bedrock Guardrails contextual grounding check [bedrockgrounding2026], Azure AI Content Safety groundedness detection [azuregroundedness2026], Vectara's HHEM [vectarahhem2026] and similar); Amazon Bedrock's separate Automated Reasoning checks add formal logic checks against a declared policy and validate only what the policy's variables capture, not author-marked claims in the text [bedrockautoreasoning2026]. Claim-locked reporting ties language strength to statistical thresholds but does not compose them. FinGround recomputes arithmetic claims deterministically but decomposes and types them with a model, hence Partial; the data-grounded row is Partial for the same reason, since Evergreen compiles claims to queries on an LLM query engine and VeriFin grounds and derives its operands with a model before the Z3 check. $^*$The XBRL formula family provides document-level computation and assertion checks over the facts in a report [xbrlvalidation2009,xbrlvalueassertions2009]; the Inline XBRL specification is scoped to syntax and to mapping it into an XBRL instance, and defines no claim-scoped inference [ixbrl].) label(tab:related) end(table)

Source passages:
- None

Summary passages:
- [normalized] first paragraph :: Circulation of this Recommendation is unrestricted. This document is normative. Recipients are invited to submit comments to formula-feedback@xbrl.org , and to submit notification of any relevant patent rights of which they are aware and provide supporting documentation.

### ucum
The Unified Code for Units of Measure
- authors: Schadow, Gunther and McDonald, Clement J.
- year: 2024
- venue: Unknown
- source url: https://ucum.org/ucum
- source label: references/raw/ucum.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 409: • Consistency, not truth. ProveML verifies that claims match the fact store, not that the fact store is correct. If the source data is wrong, verified claims will be wrong. The review layer described under Deployment gives that boundary a discipline –- evidence per store value, a human sign-off saved under a hash of exactly what it judged, expiring when the evidence changes –- but does not remove it: a fair reading is a judgement, not a proof. • The right name, not necessarily the right record. An entity verifies when the name the reader sees equals the name stored at the id the model chose; nothing checks that the model chose the right id. If two records of one type share a name, a wrong id renders identically to the right one and only the audit path tells them apart. The verifier therefore measures whether a rendered subject is unique in the store ( texttt(subjectUnique): true, false with the other paths, or unknown when the source cannot be enumerated), texttt(doctor) warns on duplicate names, strict mode makes an ambiguous subject a finding, and the render marks it. Where subjects are identifiers by construction, as on a ledger, the gap closes; where they are personal names, it does not, and the marker is what remains. • No unit conversion. Units are supported as nullable metadata with exact string matching. Semantic unit equivalence (e.g., mg/dL vs mmol/L) and standardized vocabularies (UCUM for units of measure [ucum], ISO 4217 for currency codes [iso4217]) are deferred to future work. • Evaluation scope. The evaluation covers two domains (generated education, real SEC finance) across 38 prompts, 3 models, and 3 repeats, with an oracle retriever and one correction pass. Larger schemas, more domains, and retrieval under realistic conditions are not covered. The explicit-record fact form was introduced after the first study and measured in the second (Finding 3); whether a model follows the rule on every run is not guaranteed, as one Opus 5 run shows. • Judgments: one domain, one registry. The judgment study covers one store, one registry of fourteen names and twenty questions, and its baseline is the facts-only prompt rather than free prose. How the construct behaves with a large registry, with judgments over derived values, or when the registry itself is contested, is not measured. • Canonical claims. The model is not allowed to round: a claim says texttt(391035000000), never "$391 billion". The reader can still see the rounded form, because the store may declare a display rule per field ( texttt(_display)) that the renderer applies to verified values; but a value the model itself rounded is a mismatch, and prose that quotes the rounded figure outside a claim is unverified prose. The rule is on the store's side of the boundary on purpose: a tolerance in the verifier would make "about 18" verify against 18.5 and turn the guarantee into an approximation. • Prose outside markup. ProveML verifies what is inside markup constructs. Text outside the markup is not checked. The verifier now measures the numeric part of this gap as coverage (90–96% in Section sec:evaluation) and can refuse a number outside any claim, but a qualitative sentence with no number in it remains invisible to it. And a set of verified claims does not verify the sentence around them: [chan2026soundness] argue that formally sound conclusions invite unsupported inferences by the reader, and nothing in ProveML's verdict speaks to what the prose between two verified claims implies. • Malformed input. The tokenizer silently skips constructs with unmatched brackets or braces. Robustness to diverse malformed markup deserves further stress-testing. • Adversarial generation. ProveML is designed against models that make mistakes, not against a model trying to mislead. A generator that wanted to could choose a threshold that holds and wrap misleading words around it, mark only the claims that verify and leave the damaging ones as prose, or select a true fact that misrepresents the record it came from. Each of these survives verification, the second wholly only outside strict mode or when the unmarked prose carries no number, because the verifier reads paths and values, not intent. We neither measure nor defend against this. • Group claims. An inference takes its implicit context from a single entity. A claim like "5TW, 4B, and 6WE all have low coverage" verifies as one inference only if each atom names its record explicitly ( texttt(IS_LOW_COVERAGE(offering:a.evalRate) AND ldots)); otherwise it must be decomposed into one inference per entity.

Source passages:
- None

Summary passages:
- None

### iso4217
ISO 4217 - Currency Codes
- authors: SIX Financial Information
- year: 2026
- venue: Unknown
- source url: https://www.six-group.com/en/products-services/financial-information/data-standards.html
- source label: references/raw/iso4217.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 409: • Consistency, not truth. ProveML verifies that claims match the fact store, not that the fact store is correct. If the source data is wrong, verified claims will be wrong. The review layer described under Deployment gives that boundary a discipline –- evidence per store value, a human sign-off saved under a hash of exactly what it judged, expiring when the evidence changes –- but does not remove it: a fair reading is a judgement, not a proof. • The right name, not necessarily the right record. An entity verifies when the name the reader sees equals the name stored at the id the model chose; nothing checks that the model chose the right id. If two records of one type share a name, a wrong id renders identically to the right one and only the audit path tells them apart. The verifier therefore measures whether a rendered subject is unique in the store ( texttt(subjectUnique): true, false with the other paths, or unknown when the source cannot be enumerated), texttt(doctor) warns on duplicate names, strict mode makes an ambiguous subject a finding, and the render marks it. Where subjects are identifiers by construction, as on a ledger, the gap closes; where they are personal names, it does not, and the marker is what remains. • No unit conversion. Units are supported as nullable metadata with exact string matching. Semantic unit equivalence (e.g., mg/dL vs mmol/L) and standardized vocabularies (UCUM for units of measure [ucum], ISO 4217 for currency codes [iso4217]) are deferred to future work. • Evaluation scope. The evaluation covers two domains (generated education, real SEC finance) across 38 prompts, 3 models, and 3 repeats, with an oracle retriever and one correction pass. Larger schemas, more domains, and retrieval under realistic conditions are not covered. The explicit-record fact form was introduced after the first study and measured in the second (Finding 3); whether a model follows the rule on every run is not guaranteed, as one Opus 5 run shows. • Judgments: one domain, one registry. The judgment study covers one store, one registry of fourteen names and twenty questions, and its baseline is the facts-only prompt rather than free prose. How the construct behaves with a large registry, with judgments over derived values, or when the registry itself is contested, is not measured. • Canonical claims. The model is not allowed to round: a claim says texttt(391035000000), never "$391 billion". The reader can still see the rounded form, because the store may declare a display rule per field ( texttt(_display)) that the renderer applies to verified values; but a value the model itself rounded is a mismatch, and prose that quotes the rounded figure outside a claim is unverified prose. The rule is on the store's side of the boundary on purpose: a tolerance in the verifier would make "about 18" verify against 18.5 and turn the guarantee into an approximation. • Prose outside markup. ProveML verifies what is inside markup constructs. Text outside the markup is not checked. The verifier now measures the numeric part of this gap as coverage (90–96% in Section sec:evaluation) and can refuse a number outside any claim, but a qualitative sentence with no number in it remains invisible to it. And a set of verified claims does not verify the sentence around them: [chan2026soundness] argue that formally sound conclusions invite unsupported inferences by the reader, and nothing in ProveML's verdict speaks to what the prose between two verified claims implies. • Malformed input. The tokenizer silently skips constructs with unmatched brackets or braces. Robustness to diverse malformed markup deserves further stress-testing. • Adversarial generation. ProveML is designed against models that make mistakes, not against a model trying to mislead. A generator that wanted to could choose a threshold that holds and wrap misleading words around it, mark only the claims that verify and leave the damaging ones as prose, or select a true fact that misrepresents the record it came from. Each of these survives verification, the second wholly only outside strict mode or when the unmarked prose carries no number, because the verifier reads paths and values, not intent. We neither measure nor defend against this. • Group claims. An inference takes its implicit context from a single entity. A claim like "5TW, 4B, and 6WE all have low coverage" verifies as one inference only if each atom names its record explicitly ( texttt(IS_LOW_COVERAGE(offering:a.evalRate) AND ldots)); otherwise it must be decomposed into one inference per entity.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Discover how SIX leads global financial data standards by driving initiatives, executing mandates and providing standardized financial information.

### chan2026soundness
Position: Logical Soundness is not a Reliable Criterion for Neurosymbolic Fact-Checking with LLMs
- authors: Chan, Jason and Gaizauskas, Robert and Zhao, Zhixue
- year: 2026
- venue: Unknown
- source url: https://arxiv.org/abs/2604.04177
- source label: references/raw/chan2026soundness.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 413: • Consistency, not truth. ProveML verifies that claims match the fact store, not that the fact store is correct. If the source data is wrong, verified claims will be wrong. The review layer described under Deployment gives that boundary a discipline –- evidence per store value, a human sign-off saved under a hash of exactly what it judged, expiring when the evidence changes –- but does not remove it: a fair reading is a judgement, not a proof. • The right name, not necessarily the right record. An entity verifies when the name the reader sees equals the name stored at the id the model chose; nothing checks that the model chose the right id. If two records of one type share a name, a wrong id renders identically to the right one and only the audit path tells them apart. The verifier therefore measures whether a rendered subject is unique in the store ( texttt(subjectUnique): true, false with the other paths, or unknown when the source cannot be enumerated), texttt(doctor) warns on duplicate names, strict mode makes an ambiguous subject a finding, and the render marks it. Where subjects are identifiers by construction, as on a ledger, the gap closes; where they are personal names, it does not, and the marker is what remains. • No unit conversion. Units are supported as nullable metadata with exact string matching. Semantic unit equivalence (e.g., mg/dL vs mmol/L) and standardized vocabularies (UCUM for units of measure [ucum], ISO 4217 for currency codes [iso4217]) are deferred to future work. • Evaluation scope. The evaluation covers two domains (generated education, real SEC finance) across 38 prompts, 3 models, and 3 repeats, with an oracle retriever and one correction pass. Larger schemas, more domains, and retrieval under realistic conditions are not covered. The explicit-record fact form was introduced after the first study and measured in the second (Finding 3); whether a model follows the rule on every run is not guaranteed, as one Opus 5 run shows. • Judgments: one domain, one registry. The judgment study covers one store, one registry of fourteen names and twenty questions, and its baseline is the facts-only prompt rather than free prose. How the construct behaves with a large registry, with judgments over derived values, or when the registry itself is contested, is not measured. • Canonical claims. The model is not allowed to round: a claim says texttt(391035000000), never "$391 billion". The reader can still see the rounded form, because the store may declare a display rule per field ( texttt(_display)) that the renderer applies to verified values; but a value the model itself rounded is a mismatch, and prose that quotes the rounded figure outside a claim is unverified prose. The rule is on the store's side of the boundary on purpose: a tolerance in the verifier would make "about 18" verify against 18.5 and turn the guarantee into an approximation. • Prose outside markup. ProveML verifies what is inside markup constructs. Text outside the markup is not checked. The verifier now measures the numeric part of this gap as coverage (90–96% in Section sec:evaluation) and can refuse a number outside any claim, but a qualitative sentence with no number in it remains invisible to it. And a set of verified claims does not verify the sentence around them: [chan2026soundness] argue that formally sound conclusions invite unsupported inferences by the reader, and nothing in ProveML's verdict speaks to what the prose between two verified claims implies. • Malformed input. The tokenizer silently skips constructs with unmatched brackets or braces. Robustness to diverse malformed markup deserves further stress-testing. • Adversarial generation. ProveML is designed against models that make mistakes, not against a model trying to mislead. A generator that wanted to could choose a threshold that holds and wrap misleading words around it, mark only the claims that verify and leave the damaging ones as prose, or select a true fact that misrepresents the record it came from. Each of these survives verification, the second wholly only outside strict mode or when the unmarked prose carries no number, because the verifier reads paths and values, not intent. We neither measure nor defend against this. • Group claims. An inference takes its implicit context from a single entity. A claim like "5TW, 4B, and 6WE all have low coverage" verifies as one inference only if each atom names its record explicitly ( texttt(IS_LOW_COVERAGE(offering:a.evalRate) AND ldots)); otherwise it must be decomposed into one inference per entity.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: As large language models (LLMs) are increasing integrated into fact-checking pipelines, formal logic is often proposed as a rigorous means by which to mitigate bias, errors and hallucinations in these models' outputs. For example, some neurosymbolic systems verify claims by using LLMs to translate natural language into logical formulae and then checking whether the proposed claims are logically sound, i.e. whether they can be validly derived from premises that are verified to be true.…

### picard
PICARD: Parsing Incrementally for Constrained Auto-Regressive Decoding from Language Models
- authors: Scholak, T. and Schucher, N. and Bahdanau, D.
- year: 2021
- venue: Proc. EMNLP
- source url: https://doi.org/10.18653/v1/2021.emnlp-main.779
- source label: references/raw/picard.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 419: noindent Future work follows from the limits: derived-value claims, standardized unit vocabularies, an abstention metric for unsupported queries, and constraining decoding to well-formed ProveML with only existing paths –- grammar-constrained generation (PICARD, [picard]; Synchromesh, [synchromesh]) makes that an application of known technique rather than a research program, and it would remove much of what we measure as addressability error.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Torsten Scholak, Nathan Schucher, Dzmitry Bahdanau. Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing. 2021.

### synchromesh
Synchromesh: Reliable code generation from pre-trained language models
- authors: Poesia, G. and Polozov, O. and Le, V. and Tiwari, A. and Soares, G. and Meek, C. and Gulwani, S.
- year: 2022
- venue: Proc. ICLR
- source url: https://arxiv.org/abs/2201.11227
- source label: references/raw/synchromesh.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 419: noindent Future work follows from the limits: derived-value claims, standardized unit vocabularies, an abstention metric for unsupported queries, and constraining decoding to well-formed ProveML with only existing paths –- grammar-constrained generation (PICARD, [picard]; Synchromesh, [synchromesh]) makes that an application of known technique rather than a research program, and it would remove much of what we measure as addressability error.

Source passages:
- None

Summary passages:
- [normalized] citation abstract :: Large pre-trained language models have been used to generate code,providing a flexible interface for synthesizing programs from natural language specifications. However, they often violate syntactic and semantic rules of their output language, limiting their practical usability. In this paper, we propose Synchromesh: a framework for substantially improving the reliability of pre-trained models for code generation. Synchromesh comprises two components.…

### ten2026
TEN: Table Explicitization, Neurosymbolically
- authors: Mehrotra, N. and Kumar, A. and Gulwani, S. and Radhakrishna, A. and Tiwari, A.
- year: 2026
- venue: Proc. ACL Industry Track
- source url: https://doi.org/10.18653/v1/2026.acl-industry.138
- source label: references/raw/ten2026.html
- snapshot status: fetched
- audit status: bibliography-only
- summary alignment: not-reviewed
- selection risk: not-reviewed
- summary note: None

Paper excerpts:
- line 427: What LLMs provide is open-ended generation. What ProveML adds is a controllable, auditable boundary around that generation. For humans, the intended benefit is visual triage: verified claims carry a status, and attention shifts to what is unverified. We have not measured whether this reduces human verification effort, and the evidence from adjacent systems is mixed: [symgen] report their user study reduced average verification time by 20%, while [ten2026] report a 21-participant study in which verification and correction effort did not differ significantly from their baseline, even though their system reduced hallucination. Which of the two ProveML's rendering resembles in practice is an open empirical question. For agent loops the benefit is more direct and does not depend on human factors: specific error feedback (" texttt(%[glucose] (143 mg/dL ) in patient:308: should be 142 mg/dL)") enables targeted self-correction, which is what the verify-fix loop measures in Section sec:evaluation. The combination is what neither open-ended generation nor static verification offers alone: open-endedness with determinism.

Source passages:
- None

Summary passages:
- [normalized] Open Graph description :: Nikita Mehrotra, Aayush Kumar, Sumit Gulwani, Arjun Radhakrishna, Ashish Tiwari. Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 6: Industry Track). 2026.


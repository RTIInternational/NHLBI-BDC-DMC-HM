# Contributing to bdchm

:+1: First of all: Thank you for taking the time to contribute!

# BDCHM Collaboration Guidelines

These guidelines give a broad overview of how to participate in development and maintenance of the BioData Catalyst Data Model (BDCHM). BDCHM was developed and is maintained by the BioData Catalyst (BDC) Data Management Core (DMC) Standards Team. Below is an overview of the internal collaborative processes practiced by the DMC Standards Team and how people external to this team can participate in BDCHM development. BDCHM was designed as a data ingest schema using LinkML and was based on a year-long effort to document and analyze the landscape of available data standards and requirements to support the users of BioData Catalyst. 

## Table Of Contents

* [Code of Conduct](#code-of-conduct)
* [Quick Guidelines for Contributions and Requests](#contributions)
  * [Reporting issues and making requests](#reporting-issues)
  * [Adding new elements yourself](#adding-elements)
* [GitHub Best Practices](#best-practices)
  * [How to write a great issue](#great-issues)
  * [How to create a great pull/merge request](#great-pulls)
* [DMC Collaborative Process](#collab-process)
* [Understanding LinkML](#understand-linkml)
* [Modeling Best Practice](#model-best)
<a id="code-of-conduct"></a>

## Code of Conduct

The bdchm team strives to create a
welcoming environment for editors, users and other contributors.
Please carefully read our [Code of Conduct](CODE_OF_CONDUCT.md).

<a id="contributions"></a>

## Guidelines for Contributions and Requests

<a id="reporting-issues"></a>

### Reporting problems and suggesting changes to with the data model

Please use our [Issue Tracker][issues] for any of the following:

- Reporting problems
- Requesting new schema elements

<a id="adding-elements"></a>

### Adding new elements yourself

Please submit a [Pull Request][pulls] to submit a new term for consideration.

<a id="best-practices"></a>

## Best Practices

<a id="great-issues"></a>
<a id="great-pulls"></a>

### GitHub Best Practice

- Creating and curating issues
    - Read ["About Issues"][[about-issues]]
    - Issues should be focused and actionable
    - Complex issues should be broken down into simpler issues where possible
- Pull Requests
    - Read ["About Pull Requests"][about-pulls]
    - Read [GitHub Pull Requests: 10 Tips to Know](https://blog.mergify.com/github-pull-requests-10-tips-to-know/)
    - Pull Requests (PRs) should be atomic and aim to close a single issue
    - Long running PRs should be avoided where possible
    - PRs should reference issues following standard conventions (e.g. “fixes #123”)
    - Schema developers should always be working on a single issue at any one time
    - Never work on the main branch, always work on an issue/feature branch
    - Core developers can work on branches off origin rather than forks
    - Always create a PR on a branch to maximize transparency of what you are doing
    - PRs should be reviewed and merged in a timely fashion by the bdchm technical leads
    - PRs that do not pass GitHub actions should never be merged
    - In the case of git conflicts, the contributor should try and resolve the conflict
    - If a PR fails a GitHub action check, the contributor should try and resolve the issue in a timely fashion

<a id="collab-process"></a>

### DMC Collaborative Processes

#### Decision-making Process
All decisions made by the DMC Standards Team are documented in the DMC Google Drive. Discussion is as open as possible. The DMC Standards Team uses a “consensus seeking” process for making decisions. Any person may participate in the decision-making process either by attending meetings or by commenting on GitHub issues or PRs.
#### Communication
Our team is highly interdisciplinary and geographically distributed. As such, communication is challenging, but it is essential for a successful collaboration.
##### Meetings
The DMC Standards Team meets fortnightly. Each meeting has an agenda. At the end of each meeting, there is an outcome in the form of a list of decisions and/or assigned action items with deadlines. A Project Manager attends meetings to take notes and track progress. Unless otherwise stated, agendas and notes are shared on the DMC Google Drive platform. 
##### Digital Communication
The Data Management Core maintains a Slack workspace and a Google Calendar. Teams are encouraged to create Slack channels as needed to achieve their goals. Slack channels that have outlived their usefulness should be archived.
#### Change Management
This section provides guidance for addressing requests for changes to the BDCHM, BDCHM documentation, and BDCHM governance.
##### Branches and Pull Requests
All BDCHM artifacts are stored in a public GitHub repository. The master branch defines the most up-to-date, validated version of the schema or document. Direct pushes to master will not be allowed, except in making releases. Instead, amendments to the BDCHM repository must be performed by pushing changes to a branch, and then issuing a Pull Request (PR).  
PRs can be created or commented on by any person, but may only be merged by members of the DMC Standards Team. Those creating a PR are encouraged to be abundantly clear in the notes and in the documentation as to what is being changed. Proposed changes (GitHub pull requests) will be discussed during regular calls of the DMC Standards Team. After allowing a reasonable amount of time for stakeholders to comment (one week), DMC Standards Team will merge or close PRs, as appropriate. Any person is free to propose changes in GitHub (via issue or PR) and attend meetings of the DMC Standards Team to discuss proposed changes. Discussion of an issue or PR in a meeting will be captured as a comment on the issue or PR.
##### Versioning and Dependencies
It is critical to alert users to any backwards-incompatible or breaking changes. BDCHM uses a semantic versioning scheme, in which version changes are identified as “major”, “minor”, and “patch” updates. Patch updates involve no new features, but only bug fixes. Minor updates involve new features, but no breaking changes. Major updates typically involve backwards-incompatible changes. Following the format “Major.Minor.Patch”, the version 2.3.1 differs from 2.3.0 only in bug fixes. Version 2.3.1 differs from 2.2.5 in substantive but backwards compatible changes, and may differ from 1.0.9 in myriad disturbing ways. 
#### Governance documents
Changes to BDCHM Code of Conduct or Collaboration Guidelines can be proposed by any person and are reviewed by the Data Management Core. 

<a id="understand-linkml"></a>

### Understanding LinkML

Core developers should read the material on the [LinkML site](https://linkml.io/linkml), in particular:

- [Overview](https://linkml.io/linkml/intro/overview.html)
- [Tutorial](https://linkml.io/linkml/intro/tutorial.html)
- [Schemas](https://linkml.io/linkml/schemas/index.html)
- [FAQ](https://linkml.io/linkml/faq/index.html)

<a id="model-best"></a>

### Modeling Best Practice

- Follow Naming conventions
    - Standard LinkML naming conventions should be followed (UpperCamelCase for classes and enums, snake_case for slots)
    - Know how to use the LinkML linter to check style and conventions
    - The names for classes should be nouns or noun-phrases: Person, GenomeAnnotation, Address, Sample
    - Spell out abbreviations and short forms, except where this goes against convention (e.g. do not spell out DNA)
    - Elements that are imported from outside (e.g. schema.org) need not follow the same naming conventions
    - Multivalued slots should be named as plurals
- Document model elements
    - All model elements should have documentation (descriptions) and other textual annotations (e.g. comments, notes)
    - Textual annotations on classes, slots and enumerations should be written with minimal jargon, clear grammar and no misspellings
- Include examples and counter-examples (intentionally invalid examples)
    - Rationale: these serve as documentation and unit tests
    - These will be used by the automated test suite
    - All elements of the nmdc-schema must be illustrated with valid and invalid data examples in src/data. New schema elements will not be merged into the main branch until examples are provided
    - Invalid example data files should be invalid for one single reason, which should be reflected in the filename. It should be possible to render the invalid example files valid by addressing that single fault.
- Use enums for categorical values
    - Rationale: Open-ended string ranges encourage multiple values to represent the same entity, like “water”, “H2O” and “HOH”
    - Any slot whose values could be constrained to a finite set should use an Enum
    - Non-categorical values, e.g. descriptive fields like `name` or `description` fall outside of this.
- Reuse
    - Existing scheme elements should be reused where appropriate, rather than making duplicative elements
    - More specific classes can be created by refinining classes using inheritance (`is_a`)

[about-branches]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
[about-issues]: https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues
[about-pulls]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
[issues]: https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/issues/
[pulls]: https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/pulls/

We recommend also reading [GitHub Pull Requests: 10 Tips to Know](https://blog.mergify.com/github-pull-requests-10-tips-to-know/)

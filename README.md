# bdchm

This is the LinkML model repository for the BioData Catalyst Harmonized Model (bdchm).

Please read the [Collaboration Guide](CONTRIBUTING.md) before contributing.

## Repository Structure

* [examples/](examples/) - example data
* [project/](project/) - project files (do not edit these)
* [src/](src/) - source files (edit these)
  * [bdchm](src/bdchm)
    * [schema](src/bdchm/schema) -- LinkML schema
      (edit this)
    * [datamodel](src/bdchm/datamodel) -- generated
      Python datamodel
* [tests/](tests/) - Python tests
* [resources/](resources/) -- Scripts, input files, and output files.

## Developer Documentation

<details>

This project uses [uv](https://docs.astral.sh/uv/) for dependency
management and requires Python >= 3.10.

To setup a local development environment:

* clone the repository
* change directories to the model repository using `cd bdchm`
* install all dependencies (including dev tooling) with `uv sync`
* use the `make` command to generate project artefacts (targets run
  inside the uv environment automatically):
  * `make gendoc`: generates documentation
  * `make serve`: starts a local webserver to allow for browsing of documentation
  * `make test`: runs the validation test suite
  * `make lint`: runs ruff and linkml-lint

> **Note:** the previous `bdchm[docs]` install extra has been removed.
> Documentation tooling now lives in the dev dependency group and is
> installed by `uv sync`.

</details>

## FAQ

### How can I contribute?
We welcome any and all kinds of contribution, including:
* bug fixes and code contributions
* ideas for new features
* testing
* documentation improvements
* general suggestions on how we can do better
* You are free to make PRs and issues on the BDCHM repo. Be sure to read the CONTRIBUTING.md first.

### How do I stay involved?
The BDCHM community is still new and small. For the moment, the best way to stay involved is through the BDCHM GitHub repo. Start watching the repository to get activity notifications.

### How do I do X? Why doesn’t Y work? Where can I go to get help?
First, please check if your question is answered on the FAQ.
We always welcome questions and feedback via our GitHub issue tracker, but please familiarize yourself with BDCHM Contribution Guidelines first.

### How do I request a feature or report a bug/error?
Please submit any bugs or feature requests to our tracker, but please familiarize yourself with BDCHM Contribution Guidelines first.

### How do I know if my data conform to BDCHM? What do I do if it doesn't?
Answer TBD

### How do I request a new or updated mapping? How do I request changes to a value set (enums)? How do I request a change to the model entities or attributes?
Please submit any data model change or update requests to our issue tracker.

## Credits

This project was made with
[linkml-project-cookiecutter](https://github.com/linkml/linkml-project-cookiecutter).

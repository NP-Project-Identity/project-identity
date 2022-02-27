# Contributing

Thanks for taking interest in contributing to LearnSpot (aka Project Identity)!
This file will help you get started with contributing to this Git repository.

## Repository structure

This Git repository is a monorepo and hence contains multiple separate packages.
Lerna is used to power the monorepo workflow. The structure is as follows:

```
root
 ├ docs         - Repo-specific Markdown-based documentation
 ├ frontend     - Angular frontend (Currently not covered under Lerna)
 ├ packages     - TypeScript-based packages (Covered under Lerna)
 ├ dco-signoffs - DCO sign-off files
```

There are future plans to move the frontend code under `packages/`. However, due
to certain issues integrating Angular-based projects and time constraints, this
has not been done.

## Required Tools

The following tools are required:

- Node.js LTS (v14 or v16 at time of writing)
- NPM v7 or v8 (Other package managers are NOT supported.)
- Up-to-date Git

Using an unsupported version of Node.js may lead to issues building and testing
of packages. Using an older version of NPM will cause lockfiles to be downgraded
from v2 to v1.

## Bootstrapping the Repository

To clone and bootstrap the Git repository:

```sh
$ git clone git+https://github.com/NP-Project-Identity/project-identity.git
$ cd project-identity
$ npm ci
```

If you're using SSH-based authentication (recommended), clone using this command
instead:

```sh
$ git clone git+ssh//github.com/NP-Project-Identity/project-identity.git
```

Behind the scenes, NPM lifecycle scripts will handle bootstrapping the project
together. Once all of the commands above have completed successfully, the
project and its dependencies would have been installed. In addition, Git hooks
are linked so that certain checks are performed locally on the machine.

## Running the Code

Across all packages, a common `start` NPM script is available. After
[bootstrapping the Git repository](#bootstrapping-the-repository), run either
the following:

- For `frontend/`:
  ```sh
  $ npm --prefix frontend start
  ```
- For all other packages under `packages/`:
  ```sh
  $ npx --no-install lerna run --scope=<package name> start
  ```

## Testing the Code

For `frontend/`:

```sh
$ npm --prefix frontend test
```

For all other packages under `packages/`:

```sh
$ npx --no-install lerna run --scope=<package name> test
```

To test all packages under `packages/`, exclude the `--scope` option.

## Adding Dependencies

The monorepo has its own set of dependencies separate from the packages it
contains; These dependencies are always installed as development dependencies.
To add dependencies for the monorepo, use `npm install --dev` in the root
directory of the project:

```sh
$ npm install --dev eslint
```

To add dependencies to `frontend/`:

```sh
$ npm --prefix=frontend/ install [--dev|--peer] <package name>
```

To add dependencies to other packages under `packages/`, use `lerna add`:

```sh
$ npx --no-install lerna add --scope=<package name> [--dev|--peer] <package name>
```

Use `--dev` or `--peer` to flag the dependency as development dependencies if
needed.

## Creating a Pull Request

When creating a pull request, ensure the following:

1. A PR has a single focus
1. The Git commit adheres to
   [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
1. The Git commit has a DCO sign-off
1. During iteration, do not override previously-pushed commits
1. Once the PR is approved, squash the PR into a single Git commit

### Writing a PR

When writing a PR, it is important to ensure that it is focused at a single
change. As Git is a collaborative method of code contribution, PRs that attempt
to change too many things may be have increased merge conflicts and may be hard
to revert if needed. As such, ensure that each PR is focused on one change so
that it can be easily understood, reviewed, and merged.

### Writing a Git commit

#### Conventional Commits

Conventional Commits is a common syntax of writing Git commits. This syntax
allows for a consistent identification of the _commit type_, which is used for
identifying the next semver release version of each package and generation of
changelogs.

The format of a typical Git commit is as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Note that the commit message must not be longer than 100 characters.

The most commonly used types are:

- `feat`: Adds a new feature
- `fix`: Fixes a bug
- `chore`: Does not modify the source code (e.g. Documentation)
- `refactor`: The source code is reworked without any tangible changes to the
  API
- `test`: Only additional tests were added
- `docs`: Only modifies source code documentations

Hence, a commit that adds a new feature may look like:

```
feat: adds support for MySQL databases

Added tests and MySQL-specific optimisations to enable support for MySQL as a
backend database.

Signed-off-by: Rifa Achrinza <25147899+achrinza@users.noreply.github.com>
```

(The `Signed-off-by` footer is described in a later section.)

When creating a commit that modifies readable documentation (e.g. `docs/`), it
may be tempting to use `docs`. However, `docs` must only be used for source code
documentation.

When making a breaking change, use either the `BREAKING CHANGE:` footer or `!`
suffix:

```
feat: remove legacy forum APIs

BREAKING CHANGE: legacy v1 forum APIs are removed
```

```
feat!: remove legacy forum APIs
```

See the Conventional Commits web page for more information.

#### DCO Sign-Off

DCO (Developer Certificate of Origin) is an alternative to CLA (Contributor
License Agreement) that allows contributors to retain copyright to their work
while protecting the project from potential copyright infringement.

By signing off your Git commits, you agree to the DCO, Version 1.1. A copy of
the DCO can be found in [DCO.txt](./DCO.txt).

To sign off when creating a Git commit:

```sh
$ git commit -s
```

To sign off the last Git commit:

```
$ git commit --amend -s
```

### Iterating on a PR

When a PR is created, it may need to be iterated upon as the maintainers
identify areas that need to be changed. To ensure that the maintainers can
quickly identify the changes since their last review, be sure to apply the
change requests with **new commits**. Amending existing commits requires that
maintianers re-review the entire PR.

### Squashing & Reasing After PR Approval

Once the PR is approved, there may be multiple Git commits. To keep the Git
history clean and understandable, the maintianers will request that the PR is
squashed into a single commit.

To squash a commit:

```$
$ git rebase -i main # Interactive rebase for all commits up to `main` branch
```

A text editor would open; Change all commits (except the first) to `s` or
`squash` for squash, or `f` or `fixup` for fixup. Save the changes and exit the
text editor. Afterwards, the text editor would open again, showing the new,
single commit that will be created. If you've chosen to squash, all the commit
messages would be appended; Modify the commit message to meet the Conventional
Commits syntax. If fixup was selected, only the first commit would be shown;
Modify the commit message to meet the Conventional Commits syntax.

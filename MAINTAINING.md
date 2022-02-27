# Maintaining

This file is intended to lay out the necessary information to maintain this Git
repository. It complements [CONTRIBUTING.md](./CONTRIBUTING.md), which should be
read first.

## Dependency Updates & Lockfile Maintenance

This Git repository utilises WhiteSource Renovate to open pull requests (PR) to
update dependencies and perform lockfile maintenance.

- Dependency updates are necesary to mitigate against potential security
  vulnerabilities and to ingest bug fixes.

Lockfiles (e.g. `package-lock.json`) are needed to ensure a reproducible
dependency tree for each project. This is to ensure that CI pipelines do not
fail due to an upstream dependency change. _Lockfile maintenance_ is to keep the
lockfiles of individual packages up to date. Generally, these PRs are of minimal
affair and should be mergeable without issues. However, it is also an
opportunity to identify breaking changes that had inadvertedly surfaced from a
deep dependency. This separation of lockfile maintenance responsibility allows
other PRs to remain mergeable even if a deep dependency breaks the project.

This approach in turn provides predictability and reduces troubleshooting
headaches as it allows maintainers to immediately identify the aforementioned
issue.

## DCO Sign-Offs

Developer Certificate of Origin (DCO) sign-offs are critical legal instruments
in protecting the project from copyright issues without requiring a custom
Contributor License Agreement (CLA). It is written by The Linux Foundation and
has been used by many open-source software (OSS) projects. As such, it is
important that maintainers enforce DCO sign-offs for every Git commit that is
merged into the project's Git repository. The
[Probot DCO](https://probot.github.io/apps/dco/) bot is used to enforce DCO.

Due to previous poor enforcement of DCO sign-offs, DCO sign-off files have been
created under [./dco-signoffs](./dco-signoffs/). These documents contain a
standard statement along with a list of Git commits' short hash and subject
which do not contain the `Signed-off-by:` Git commit footer. This in line with
the practice followed by other The Linux Foundation projects.

See [DCO Sign-Off in CONTRIBUTING.md](./CONTRIBUTING.md#dco-sign-off) for more
information.

### Writing a DCO Sign-Off File

**NOTE: It is strongly recommended to enforce DCO sign-offs when the Git commit
is created instead, as writing a DCO sign-off file requires the cooperation of
the original Git commit author, which may not be guaranteed.**

The DCO sign-off files path are `dco-signoffs/<contributor's name>`. Inside the
file, the following syntax is followed:

```
The following commits were made pursuant to the Developer Certificate of Origin
(DCO), Version 1.1, even though a Signed-off-by: was not included in the commit
message. I have used these emails in the past: <Comma-delimeted e-mails>

<commit short hash> <commit subject>
...
```

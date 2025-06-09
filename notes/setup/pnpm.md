# pnpm

[pnpm](https://pnpm.io/) is a lightweight package manager for npm and it smartly adresses modules instalation for disk space saving.

e.g. When we use `npm`, case we have 100 projects using `lodash`, we will have 100 copies of it. Using `pnpm` the `lodash` module will be installed in one single place and shared between projects using symbolic links. Case we need a specific version, `pnpm` is able to install the different version (not overriding it) and manage the different symbolic links.

# enforce-node-version

npm script to enforce the `engines.node` field in `package.json`.

## Command Line Usage

This module is only intended to be used as a command line utility. An optional `message` can be provided, which will be printed if version checking fails. If `message` is not provided, a default message is printed.

```
$ enforce-node-version [message]
```

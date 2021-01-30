dev-cli
=======

A sample cli by @lshadler

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dev-cli.svg)](https://npmjs.org/package/dev-cli)
[![Downloads/week](https://img.shields.io/npm/dw/dev-cli.svg)](https://npmjs.org/package/dev-cli)
[![License](https://img.shields.io/npm/l/dev-cli.svg)](https://github.com/lshadler/dev-cli/dev-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dev-cli
$ dev-cli COMMAND
running command...
$ dev-cli (-v|--version|version)
dev-cli/0.0.0 darwin-x64 node-v12.20.1
$ dev-cli --help [COMMAND]
USAGE
  $ dev-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dev-cli hello [FILE]`](#dev-cli-hello-file)
* [`dev-cli help [COMMAND]`](#dev-cli-help-command)
* [`dev-cli test [FILE]`](#dev-cli-test-file)

## `dev-cli hello [FILE]`

describe the command here

```
USAGE
  $ dev-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dev-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/lshadler/dev-cli/blob/v0.0.0/src/commands/hello.ts)_

## `dev-cli help [COMMAND]`

display help for dev-cli

```
USAGE
  $ dev-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `dev-cli test [FILE]`

describe the command here

```
USAGE
  $ dev-cli test [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dev-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/test.ts](https://github.com/lshadler/dev-cli/blob/v0.0.0/src/commands/test.ts)_
<!-- commandsstop -->

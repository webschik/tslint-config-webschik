# tslint-config-webschik

[![NPM version](https://img.shields.io/npm/v/tslint-config-webschik.svg?style=flat)](https://www.npmjs.com/package/tslint-config-webschik)
[![Downloads](http://img.shields.io/npm/dm/tslint-config-webschik.svg?style=flat)](https://npmjs.org/package/tslint-config-webschik)

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) for my projects

## Installation

```sh
npm install tslint-config-webschik --save
```

## Usage

In `tslint.json`:

```json
{
  "extends": "tslint-config-webschik"
}
```

### Rules

* [tslint](https://www.npmjs.com/package/tslint)
* [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)
* [tslint-eslint-rules](https://www.npmjs.com/package/tslint-eslint-rules)

## Versioning

```
+----- Major version is synchronize with tslint's major version.
| +--- Minor version has BREAKING CHANGE and feat.
| | +- Patch version has patch.
| | |
x.x.x
```

## License
MIT

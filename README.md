# ngx permission
[![Build Status](https://travis-ci.org/TekVanDo/ngx-permission.svg?branch=master)](https://travis-ci.org/TekVanDo/ngx-permission)
[![codecov](https://codecov.io/gh/TekVanDo/ngx-permission/branch/master/graph/badge.svg)](https://codecov.io/gh/TekVanDo/ngx-permission)
[![npm version](https://badge.fury.io/js/ngx-permission.svg)](http://badge.fury.io/js/ngx-permission)
[![devDependency Status](https://david-dm.org/TekVanDo/ngx-permission/dev-status.svg)](https://david-dm.org/TekVanDo/ngx-permission?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/TekVanDo/ngx-permission.svg)](https://github.com/TekVanDo/ngx-permission/issues)
[![GitHub stars](https://img.shields.io/github/stars/TekVanDo/ngx-permission.svg)](https://github.com/TekVanDo/ngx-permission/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/TekVanDo/ngx-permission/master/LICENSE)

## Demo
https://TekVanDo.github.io/ngx-permission/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ngx-permission
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { NgxPermissionModule } from 'ngx-permission';

@NgModule({
  imports: [
    NgxPermissionModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/TekVanDo/ngx-permission/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-permission/bundles/ngx-permission.umd.js"></script>
<script>
    // everything is exported ngxPermission namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://TekVanDo.github.io/ngx-permission/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT

# ngx permission
[![Build Status](https://travis-ci.org/TekVanDo/ngx-permission.svg?branch=master)](https://travis-ci.org/TekVanDo/ngx-permission)
[![codecov](https://codecov.io/gh/TekVanDo/ngx-permission/branch/master/graph/badge.svg)](https://codecov.io/gh/TekVanDo/ngx-permission)
[![npm version](https://badge.fury.io/js/ngx-permission.svg)](http://badge.fury.io/js/ngx-permission)
[![devDependency Status](https://david-dm.org/TekVanDo/ngx-permission/dev-status.svg)](https://david-dm.org/TekVanDo/ngx-permission?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/TekVanDo/ngx-permission.svg)](https://github.com/TekVanDo/ngx-permission/issues)
[![GitHub stars](https://img.shields.io/github/stars/TekVanDo/ngx-permission.svg)](https://github.com/TekVanDo/ngx-permission/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/TekVanDo/ngx-permission/master/LICENSE)

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Integration with router](#router)
- [Documentation](#documentation)
- [Roadmap](#roadmap)
- [Development](#development)
- [License](#license)

## About

Angular 2 or Angular 4 implementation of [angular-permission](https://github.com/Narzerus/angular-permission)

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
    NgxPermissionModule
  ]
})
export class MyModule {}
```


Define role and role validation function by RoleStoreService

```typescript
export class AppComponent {
  constructor(roleStoreService:RoleStoreService) {
    const adminRole: Role = {
      name: 'admin',
      validationFunction: () => false,
      priority: 1
    };
    const userRole: Role = {
      name: 'user',
      validationFunction: () => true,
      priority: 1
    };
  
    roleStoreService.defineRole(adminRole);
    roleStoreService.defineRole(userRole);
    
    // or roleStoreService.defineManyRoles([adminRole, userRole])
  }
}
```


Now you can use onlyForRoles and exceptRoles directives in your components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: `<div *onlyForRoles="['user']">user can see this</div>
             <div *onlyForRoles="['admin']">user can't see this</div>`
})
export class MyComponent {}
```

## Router
set canActivate property RouterConnector class 
```
{
  path: 'about',
  component: AboutComponent,
  data: {
    ngxPermissions: {
      only: ['user']
    }
  },
  canActivate: [RouterConnector]
},
{
  path: 'secret',
  component: SectetDataComponent,
  data: {
    ngxPermissions: {
      exept: ['user'],
      redirectTo: 'about'
    }
  },
  canActivate: [RouterConnector]
}
```

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

## Roadmap
 * improve documentation
 * better tests coverage
 * implements permissions 

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

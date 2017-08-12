import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleStoreService } from './services/role-store/role-store.service';
import { PermissionStoreService } from './services/permission-store/permission-store.service';
import { RolePermissionsService } from './services/role-permissions/role-permissions.service';
import { OnlyForRolesDirective } from './directives/only-for-roles/only-for-roles.directive';
import { ExceptRolesDirective } from './directives/except-roles/except-roles.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OnlyForRolesDirective, ExceptRolesDirective],
  providers: [
    RoleStoreService,
    PermissionStoreService,
    RolePermissionsService,
  ],
  exports: [
    OnlyForRolesDirective,
    ExceptRolesDirective
  ]
})
export class NgxPermissionModule {
  constructor() {
  }
}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RolePermissionsService } from '../../services/role-permissions/role-permissions.service';

@Directive({
  selector: '[exceptRoles]'
})
export class ExceptRolesDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private roleService: RolePermissionsService) {
  }

  @Input() set exceptRoles(roles: string[]) {
    this.roleService.exceptRoles(roles).then((isAccepted) => {
      if (isAccepted) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}

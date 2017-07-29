import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RolePermissionsService } from '../../services/role-permissions/role-permissions.service';

@Directive({
  selector: '[onlyForRoles]'
})
export class OnlyForRolesDirective {
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private roleService: RolePermissionsService) {
  }

  @Input() set onlyForRoles(roles: string[]) {
    this.roleService.onlyForRoles(roles).then((isAccepted) => {
      if (isAccepted) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}

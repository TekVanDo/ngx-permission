import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { RolePermissionsService } from '../../services/role-permissions/role-permissions.service';
import { RouterNgxPermissions } from '../../types/router-ngx-permissions.type';

@Injectable()
export class RouterConnector implements CanActivate {

  constructor(private roleService: RolePermissionsService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const permissions = route.data['ngxPermissions'] as RouterNgxPermissions;
    if (permissions.only) {
      return this.roleService.onlyForRoles(permissions.only).then((allowed) => {
        if (!allowed && permissions.redirectTo) {
          this.router.navigate([permissions.redirectTo]);
        }
        return allowed;
      });
    }
    if (permissions.except) {
      return this.roleService.exceptRoles(permissions.except).then((allowed) => {
        if (!allowed && permissions.redirectTo) {
          this.router.navigate([permissions.redirectTo]);
        }
        return allowed;
      });
    }
    return Promise.resolve(true);
  }
}

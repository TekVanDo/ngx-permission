import { Injectable } from '@angular/core';
import { RoleStoreService } from '../role-store/role-store.service';

@Injectable()
export class RolePermissionsService {

  constructor(private roleStore: RoleStoreService) {
  }

  private checkValidationFunction(roles: string []): Array<Promise<boolean>> {
    return roles.map((role) => {
      if (this.roleStore.hasRoleDefinition(role)) {
        const roleDefinition = this.roleStore.getRoleDefinition(role);
        return Promise.resolve(roleDefinition.validationFunction());
      }
      return Promise.reject(false);
    });
  }

  onlyForRoles(roles: string []): Promise<boolean> {
    const rolesValidation = this.checkValidationFunction(roles);
    return Promise.all(rolesValidation).then((rolePromisesData) => {
      return rolePromisesData.find((rolePromise) => rolePromise === true) || false;
    }).catch(() => false);
  }

  exceptRoles(roles: string []): Promise<boolean> {
    const rolesValidation = this.checkValidationFunction(roles);
    return Promise.all(rolesValidation).then((rolePromisesData) => {
      return !rolePromisesData.find((rolePromise) => rolePromise) || false;
    });
  }
}

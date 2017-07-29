import { Injectable } from '@angular/core';
import { Role } from '../../types/role.type';

@Injectable()
export class RoleStoreService {
  private roleStore: { [name: string]: Role } = {};

  constructor() {
  }

  defineRole(role: Role) {
    if (this.roleStore[role.name]) {
      // todo add error list
      throw new Error('Role already defined');
    }
    this.roleStore[role.name] = role;
  }

  defineManyRoles(roles: Role []): void {
    roles.forEach((role) => this.defineRole(role));
  }

  removeRoleDefinition(roleName: string): void {
    delete this.roleStore[roleName];
  }

  hasRoleDefinition(roleName: string): boolean {
    return !!this.roleStore[roleName];
  }

  getRoleDefinition(roleName: string): Role {
    return this.roleStore[roleName];
  }

  getStore(): { [name: string]: Role } {
    return this.roleStore;
  }

  clearStore(): void {
    this.roleStore = {};
  }
}

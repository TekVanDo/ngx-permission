import { TestBed, inject } from '@angular/core/testing';

import { RoleStoreService } from './role-store.service';
import { Role } from '../../types/role.type';

describe('RoleStoreService', () => {
  const baseRole: Role = {
    name: 'test',
    validationFunction: () => true,
    priority: 1
  };
  const secondRole: Role = {
    name: 'test2',
    validationFunction: () => true,
    priority: 2
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleStoreService]
    });
  });

  it('should ...', inject([RoleStoreService], (service: RoleStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should define role', inject([RoleStoreService], (service: RoleStoreService) => {
    service.defineRole(baseRole);
    expect(service.hasRoleDefinition(baseRole.name)).toBeTruthy();
  }));

  it('should throw error while duplications of roles names', inject([RoleStoreService], (service: RoleStoreService) => {
    service.defineRole(baseRole);
    // todo move errors to enum
    expect(() => service.defineRole(baseRole)).toThrowError('Role already defined');
  }));

  it('should`t throw error after delete roles names', inject([RoleStoreService], (service: RoleStoreService) => {
    service.defineRole(baseRole);
    service.removeRoleDefinition(baseRole.name);
    expect(() => service.defineRole(baseRole)).not.toThrowError('Role already defined');
  }));

  it('should define roles', inject([RoleStoreService], (service: RoleStoreService) => {
    service.defineManyRoles([baseRole, secondRole]);
    expect(service.hasRoleDefinition(baseRole.name)).toBeTruthy();
    expect(service.hasRoleDefinition(secondRole.name)).toBeTruthy();
  }));

  it('should return role by role name', inject([RoleStoreService], (service: RoleStoreService) => {
    service.defineRole(baseRole);
    expect(service.getRoleDefinition(baseRole.name)).toEqual(baseRole);
  }));

  it('should return empty storage', inject([RoleStoreService], (service: RoleStoreService) => {
    expect(Object.keys(service.getStore()).length).toBe(0);
    expect(service.getStore()).toEqual({});
  }));

  it('should return empty storage after clear', inject([RoleStoreService], (service: RoleStoreService) => {
    service.defineRole(baseRole);
    service.clearStore();
    expect(Object.keys(service.getStore()).length).toBe(0);
  }));
});

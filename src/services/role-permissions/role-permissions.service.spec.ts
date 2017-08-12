import { TestBed, inject } from '@angular/core/testing';
import { RolePermissionsService } from './role-permissions.service';
import { RoleStoreService } from '../role-store/role-store.service';

const mockRoles = [{
  name: 'test',
  validationFunction: () => true
}, {
  name: 'test2',
  validationFunction: () => false
}];

describe('RolePermissionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolePermissionsService, RoleStoreService]
    });
  });

  it('should disallow if has wrong role', inject([RolePermissionsService, RoleStoreService],
    (service: RolePermissionsService, roleStore: RoleStoreService) => {
      roleStore.defineManyRoles(mockRoles);
      service.exceptRoles(['test']).then((result) => {
        expect(result).toBeFalsy();
      });

      service.exceptRoles(['test2']).then((result) => {
        expect(result).toBeTruthy();
      });

      service.exceptRoles(['test', 'test2']).then((result) => {
        expect(result).toBeFalsy();
      });
    })
  );

  it('should allow if hasn`t role', inject([RolePermissionsService, RoleStoreService],
    (service: RolePermissionsService, roleStore: RoleStoreService) => {
      roleStore.defineManyRoles(mockRoles);

      service.exceptRoles(['test2']).then((result) => {
        expect(result).toBeTruthy();
      });
    })
  );


  it('should allow if has right role', inject([RolePermissionsService, RoleStoreService],
    (service: RolePermissionsService, roleStore: RoleStoreService) => {
      roleStore.defineManyRoles(mockRoles);

      service.onlyForRoles(['test']).then((result) => {
        expect(result).toBeTruthy();
      });

      service.onlyForRoles(['test', 'test2']).then((result) => {
        expect(result).toBeTruthy();
      });

      service.onlyForRoles(['test2']).then((result) => {
        expect(result).toBeFalsy();
      });

      service.onlyForRoles(['test321']).then((result) => {
        expect(result).toBeFalsy();
      });
    })
  );

  it('should allow`t if hasn`t right role', inject([RolePermissionsService, RoleStoreService],
    (service: RolePermissionsService, roleStore: RoleStoreService) => {
      roleStore.defineManyRoles(mockRoles);

      service.onlyForRoles(['test2']).then((result) => {
        expect(result).toBeFalsy();
      });
    })
  );
});

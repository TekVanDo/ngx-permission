import { TestBed, inject } from '@angular/core/testing';

import { PermissionStoreService } from './permission-store.service';

describe('PermissionStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionStoreService]
    });
  });

  it('should ...', inject([PermissionStoreService], (service: PermissionStoreService) => {
    expect(service).toBeTruthy();
  }));
});

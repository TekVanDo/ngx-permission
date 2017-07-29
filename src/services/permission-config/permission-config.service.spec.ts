import { TestBed, inject } from '@angular/core/testing';

import { PermissionConfigService } from './permission-config.service';

describe('PermissionConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionConfigService]
    });
  });

  it('should ...', inject([PermissionConfigService], (service: PermissionConfigService) => {
    expect(service).toBeTruthy();
  }));
});

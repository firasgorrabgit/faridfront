import { TestBed } from '@angular/core/testing';

import { AuthGardServiceAdminService } from './auth-gard-service-admin.service';

describe('AuthGardServiceAdminService', () => {
  let service: AuthGardServiceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGardServiceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

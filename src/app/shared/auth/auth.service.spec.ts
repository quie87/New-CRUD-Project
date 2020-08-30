import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', (): any => {
  let service: AuthService;

  beforeEach((): any => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', (): any => {
    expect(service).toBeTruthy();
  });
});

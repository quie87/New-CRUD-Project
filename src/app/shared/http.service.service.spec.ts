import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('Http.ServiceService', (): any => {
  let service: HttpService;

  beforeEach((): any => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', (): any => {
    expect(service).toBeTruthy();
  });
});

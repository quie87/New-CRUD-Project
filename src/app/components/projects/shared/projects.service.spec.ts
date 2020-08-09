import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsService', (): any => {
  let service: ProjectsService;

  beforeEach((): any => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', (): any => {
    expect(service).toBeTruthy();
  });
});

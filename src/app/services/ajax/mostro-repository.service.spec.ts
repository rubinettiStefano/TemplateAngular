import { TestBed } from '@angular/core/testing';

import { MostroRepositoryService } from './mostro-repository.service';

describe('MostroRepositoryService', () => {
  let service: MostroRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostroRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

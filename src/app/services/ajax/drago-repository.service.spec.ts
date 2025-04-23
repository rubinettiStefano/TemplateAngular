import { TestBed } from '@angular/core/testing';

import { DragoRepositoryService } from './drago-repository.service';

describe('DragoRepositoryService', () => {
  let service: DragoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

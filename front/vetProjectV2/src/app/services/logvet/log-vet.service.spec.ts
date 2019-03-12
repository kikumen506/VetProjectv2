import { TestBed } from '@angular/core/testing';

import { LogVetService } from './log-vet.service';

describe('LogVetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogVetService = TestBed.get(LogVetService);
    expect(service).toBeTruthy();
  });
});

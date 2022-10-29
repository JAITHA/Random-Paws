import { TestBed } from '@angular/core/testing';

import { RandomdogsService } from './randomdogs.service';

describe('RandomdogsService', () => {
  let service: RandomdogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomdogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

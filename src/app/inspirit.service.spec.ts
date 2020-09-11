import { TestBed } from '@angular/core/testing';

import { InspiritService } from './inspirit.service';

describe('InspiritService', () => {
  let service: InspiritService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspiritService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

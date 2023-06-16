import { TestBed } from '@angular/core/testing';

import { ReceipeserviceService } from './receipeservice.service';

describe('ReceipeserviceService', () => {
  let service: ReceipeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

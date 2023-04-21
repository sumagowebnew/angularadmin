import { TestBed } from '@angular/core/testing';

import { ServiceAwardService } from './service-award.service';

describe('ServiceAwardService', () => {
  let service: ServiceAwardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAwardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

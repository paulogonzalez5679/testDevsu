import { TestBed } from '@angular/core/testing';

import { ServicesBPService } from './services-bp.service';

describe('ServicesBPService', () => {
  let service: ServicesBPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesBPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

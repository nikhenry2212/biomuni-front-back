import { TestBed } from '@angular/core/testing';

import { AtivarSpliklerService } from './ativar-splikler.service';

describe('AtivarSpliklerService', () => {
  let service: AtivarSpliklerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtivarSpliklerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

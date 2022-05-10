import { TestBed } from '@angular/core/testing';

import { ActivityDroneService } from './activity-drone.service';

describe('ActivityDroneService', () => {
  let service: ActivityDroneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityDroneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

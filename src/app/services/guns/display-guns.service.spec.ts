import { TestBed } from '@angular/core/testing';

import { DisplayGunsService } from './display-guns.service';

describe('DisplayGunsService', () => {
  let service: DisplayGunsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayGunsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

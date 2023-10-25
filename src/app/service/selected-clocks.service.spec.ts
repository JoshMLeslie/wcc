import { TestBed } from '@angular/core/testing';

import { SelectedClocksService } from './selected-clocks.service';

describe('SelectedClocksService', () => {
  let service: SelectedClocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedClocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

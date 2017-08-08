import { TestBed, inject } from '@angular/core/testing';

import { RiversService } from './rivers.service';

describe('RiversService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiversService]
    });
  });

  it('should be created', inject([RiversService], (service: RiversService) => {
    expect(service).toBeTruthy();
  }));
});

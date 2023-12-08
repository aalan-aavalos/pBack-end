import { TestBed } from '@angular/core/testing';

import { AguasService } from './aguas.service';

describe('AguasService', () => {
  let service: AguasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AguasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

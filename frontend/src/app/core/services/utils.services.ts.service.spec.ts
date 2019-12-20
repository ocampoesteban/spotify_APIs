import { TestBed } from '@angular/core/testing';

import { UtilsServices } from './utils.services.ts.service';

describe('UtilsServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilsServices = TestBed.get(UtilsServices);
    expect(service).toBeTruthy();
  });
});

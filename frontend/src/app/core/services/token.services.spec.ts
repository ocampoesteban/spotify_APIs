import { TestBed } from '@angular/core/testing';

import { TokenServices } from './token.service';

describe('TokenServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenServices = TestBed.get(TokenServices);
    expect(service).toBeTruthy();
  });
});

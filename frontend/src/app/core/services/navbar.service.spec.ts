import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarService } from './navbar.service';

describe('NavbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: NavbarService = TestBed.get(NavbarService);
    expect(service).toBeTruthy();
  });
});

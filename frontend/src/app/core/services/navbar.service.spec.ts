import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';

import { NavbarService } from './navbar.service';
import { User } from '../models/user';
import { of } from 'rxjs/internal/observable/of';

describe('NavbarService', () => {
  let navbarService: NavbarService;
  let httMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[ HttpClientTestingModule ],
    providers:[ NavbarService ]
  });
  
  navbarService = TestBed.get(NavbarService);
  });

  describe('navbar', () => {

    it('should call httpService get with expected URLString', () => {
      // Arrange 
      const spyHttpServiceGet = spyOn(navbarService, 'getUserData');
      console.log('asd',spyHttpServiceGet)

      // Act
      navbarService.getUserData().subscribe();

      // Assert
      expect(spyHttpServiceGet).toHaveBeenCalled();
      expect(spyHttpServiceGet).toHaveBeenCalledWith('https://api.spotify.com/v1/me');
    });
  });
});

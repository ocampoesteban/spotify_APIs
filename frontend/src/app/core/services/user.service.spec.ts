import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from '../models/user';
import { of } from 'rxjs/internal/observable/of';

describe('UserService', () => {
  let userService: UserService;
  let httMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[ HttpClientTestingModule ],
    providers:[ UserService ]
  });
  
  userService = TestBed.get(UserService);
  });

  describe('UserService', () => {

    it('should call httpService get with expected URLString', () => {
      // Arrange 
      const spyHttpServiceGet = spyOn(userService, 'getUserData');
      console.log('asd',spyHttpServiceGet)

      // Act
      userService.getUserData().subscribe();

      // Assert
      expect(spyHttpServiceGet).toHaveBeenCalled();
      expect(spyHttpServiceGet).toHaveBeenCalledWith('https://api.spotify.com/v1/me');
    });
  });
});

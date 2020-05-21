import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';


describe('authInterceptor', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  //let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
   // providers: [ UserService ]
  });
    injector = getTestBed();
    //userService = injector.get(userService);
    httpMock = injector.get(HttpTestingController);

    //userService = TestBed.get(UserService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('UserService', () => {

    it('should call httpService get with expected URLString', () => {
      // Arrange
     // const spyHttpServiceGet = spyOn(userService, 'getUserData');
    //  console.log('asd', spyHttpServiceGet);

      // Act
   //   userService.getUserData().subscribe();

      // Assert
   //   expect(spyHttpServiceGet).toHaveBeenCalled();
   //   expect(spyHttpServiceGet).toHaveBeenCalledWith('https://api.spotify.com/v1/me');
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';

import { NavbarService } from './navbar.service';
import { User } from '../models/user';

describe('NavbarService', () => {
  let service: NavbarService;
  let httMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule,
    ],
    providers:[ NavbarService]
  });
  
  service = TestBed.get(NavbarService);
  httMock = TestBed.get(HttpTestingController);
  });

  afterEach(()=>{
    httMock.verify();
  })

  it('Should retrieve the user profile from the API via GET'), () => {
    const dummyPost: User = {
      name:"Esteban Ocampo", 
      email : "estebanocampo21@hotmail.com", 
      followers: 44, 
      profileImage: "https://scontent.xx.fbcdn.net/v/t1.0-1/p320x320/40984415_10212798240775790_3157883745290158080_n.jpg?_nc_cat=107&_nc_ohc=LaCfPoR8V0EAQlLHhRGw_N6QH-bWYrP8lVZcGUJC3k4tAKvwBgwYKKikg&_nc_ht=scontent.xx&_nc_tp=1&oh=84cb356f9d001571094e4a533ba3a5a7&oe=5EAF34A6",        
      accountType:"premium"
    }

    service.getUserData().subscribe((posts:any) => {
      expect(posts.lenght).toBe(1);
      expect(posts).toEqual(dummyPost);
    });

    const request = httMock.expectOne(`${service.API_URL}/me`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPost);
  }
});

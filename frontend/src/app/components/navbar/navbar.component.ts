import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public userService: UserService
  ) { }
  user: User;
  isMenuCollapsed: boolean= false;

  ngOnInit() {
    this.userService.getUserData().subscribe(
      (data:User) => this.user= data
    );
  }

  toggle() {
   this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}

import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/core/services/navbar.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public navbarService:NavbarService) { }
  user: User;
  isMenuCollapsed: boolean= false;

  ngOnInit() {
    this.navbarService.getUserData().subscribe(
      (data:User) => this.user= data
    );
  }

  toggle() {
    console.log('before isMenuCollapsed',this.isMenuCollapsed);

   this.isMenuCollapsed = !this.isMenuCollapsed;
   console.log(' after isMenuCollapsed',this.isMenuCollapsed);

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServices } from 'src/app/core/services/token.service';


@Component({
  selector: 'entity-container',
  templateUrl: './entity-container.component.html',
  styleUrls: ['./entity-container.component.scss']
})
export class EntityContainerComponent implements OnInit {

  constructor(public router: Router, public TokenServices: TokenServices) { }
  
  private token: string;

  /**
   * Get access token from URL
   * Save token
   * Redirect user to home page
   */
  ngOnInit() {
    if(window.location.href.includes("access_token")){
      this.token= window.location.hash.split('=')[1].split('&')[0];
      console.log(this.token)
      this.TokenServices.setToken(this.token);
      this.router.navigate(["/"]); 
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServices } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor(public router: Router, public TokenServices: TokenServices) { }
  
  private token: string;

  /**
   * Get access token from URL
   * Save token
   * Redirect user to init screen
   */
  ngOnInit() {
    if(window.location.href.includes("access_token")){
      this.token= window.location.hash.split('=')[1];
      this.TokenServices.setToken(this.token);
      this.router.navigate(["/"]); 
    }
  }

}

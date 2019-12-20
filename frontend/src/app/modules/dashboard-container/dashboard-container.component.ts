import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsServices } from 'src/app/core/services/utils.services.ts.service';

@Component({
  selector: 'app-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor(public router: Router, public utilsServices: UtilsServices) { }
  
  private token: string;

  /**
   * Get access token from URL
   * Save token
   * Redirect user to init screen
   */
  ngOnInit() {
    if(window.location.href.includes("access_token")){
      this.token= window.location.hash.split('=')[1];
      this.utilsServices.setToken(this.token);
      this.router.navigate(["/"]); 
    }
  }

}

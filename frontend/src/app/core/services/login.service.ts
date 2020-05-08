import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private tokenService: TokenService,
  ) { }

  private scopes = 'user-read-private user-read-email user-read-recently-played';
  private clientID = '0d03c998d1054f088573eb85a2bd7059';
  private redirectUri = 'http://localhost:3000';
  
  /*
    Redirect user to authorization page
    @param 
    @return  return user to the redirecURL page
  */
  goToLogin() {
    this.document.location.href = 'https://accounts.spotify.com/authorize' +
    '?response_type=token&client_id='+this.clientID+'&scope=' + encodeURIComponent(this.scopes) +
    '&redirect_uri=' + encodeURIComponent(this.redirectUri)+'&show_dialog=false';
  }
  
  /*
   Check whether the token is expired and return
   true or false
   TODO: Validation done only to test
  */
  public isAuthenticated(): boolean {
    const token = this.tokenService.getToken;
    return token === '';
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Global } from '../classes/global';
import { User } from '../classes/user';
import * as moment from 'moment';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<User>(Global.baseUrl + "login", user).pipe(tap(result => this.setSession(result)));
    
  }


  private setSession(jwt: any) {
    var decodedJWT: any = jwtDecode(jwt.jwtToken);
    // set jwt token
    localStorage.setItem('jwt', jwt.jwtToken);
              // get expiry via cutting string and parsing to json object
          // console.log(JSON.parse(atob(jwt.jwtToken.split('.')[1])).exp)
              // get expiry via jwt-decode lib
          // console.log(jwtDecode(jwt.jwtToken))
    
    // set expiry timestamp
    localStorage.setItem("expiry", decodedJWT.exp );

    // set user role
    localStorage.setItem("role", decodedJWT.role)
  }

  
  


}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'app/classes/post';
import * as moment from 'moment';
import { Global } from '../classes/global';
import { User } from '../classes/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }


  // API CALLING
  // call sign up api
  userSignUp(newUser: User) {
    return this.http.post<any>(Global.baseUrl + "signup", newUser);
  }
  
  // call authservice login -> which calls login api
  userLogin(user: User) {
    return this.auth.login(user).subscribe((data) => {
      if (localStorage.getItem("role") == "normal") {
        this.router.navigate(["user"])
      } 

      if (localStorage.getItem("role") == "admin") {
        this.router.navigate(["admin"])
      }
      
      
    });
  }

  postImage(formData: FormData) {
    return this.http.post<any>(Global.baseUrl + "post/add-image", formData)
  }


  // logout by removing saved data in cookies
  logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("expiry");
  }

  // return boolean of whether user logged in
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
    // return moment().isBefore(this.getExpiration());
  }

  // return boolen of whether user is logged out
  isLoggedOut() {
      return !this.isLoggedIn();
  }

  // return expiration of jwt token
  getExpiration() {
      var expiration: number = parseInt(localStorage.getItem("expiry")!);
      // const expiresAt = JSON.parse(expiration!); // ! is a non null assesrtion operator to tell typescript that you know what you are doing
      var expiresAt = moment.unix(expiration)
      // console.log(moment.unix(expiration))
      // console.log("check1=>", moment().isBefore(moment.unix(expiration)))
      // console.log("check=>", moment().isAfter(moment()))
      return expiresAt;
  }   

}

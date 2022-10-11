import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router) { }
  loginStatus!: boolean;
  
  ngOnInit(): void {
    this.loginStatus = this.userServ.isLoggedIn();
    console.log(this.loginStatus)
  }

  

  logout() {
    this.userServ.logout();
    console.log("logout success")
    window.location.href="/"
  }

}

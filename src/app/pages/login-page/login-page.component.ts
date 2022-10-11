import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { User } from 'app/classes/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../../app.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router) { }

  user: User = new User();

  ngOnInit(): void {
    
  }

  userLogin() {
    console.log("called")
    this.userServ.userLogin(this.user)
  }

}

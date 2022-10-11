import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { User } from 'app/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css', '../../app.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router) { }

  // model for form
  newUser: User = new User();

  ngOnInit(): void {
  }

  userSignUp() {
    this.userServ.userSignUp(this.newUser).subscribe(data => {
      console.log(data) // check if this is needed
      this.router.navigate(["login"])
    })
  }

}





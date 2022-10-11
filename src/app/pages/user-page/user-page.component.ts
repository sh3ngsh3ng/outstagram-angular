import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate([{outlets: {user: ['feed']}}]);
  }

}

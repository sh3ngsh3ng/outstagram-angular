import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'app/classes/post';
import { ProfileService } from 'app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileServ: ProfileService, private router: Router) { }


  userPosts: Post[] = [];

  ngOnInit(): void {
    this.profileServ.getUserPosts().subscribe((data: Post[]) => {
      this.userPosts = data
      console.log("profile =>", this.userPosts)
    })
  }


  // goToPost(postId: number) {
  //   this.router.navigate([{outlets: {user: 'post/' + postId}}])
  // }

}

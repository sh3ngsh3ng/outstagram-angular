import { Component, OnInit } from '@angular/core';
import { Post } from 'app/classes/post';
import { User } from 'app/classes/user';
import { AdminService } from 'app/services/admin.service';
import { FeedService } from 'app/services/feed.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private adminServ: AdminService, private feedServ: FeedService) { }

  activeTab!: string;
  posts: Post[] = [];
  users: User[] = [];
  postToBeUpdated!: Post;


  ngOnInit(): void {
    this.activeTab = "posts"
    this.feedServ.getAllPost().subscribe((posts: Post[]) => {
      this.posts = posts
    })
  }

  onUpdate(postId: any) {
    this.adminServ.updatePostByAdmin(this.postToBeUpdated).subscribe()
  }

  onDelete(postId: any) {
    // add admin service
    this.adminServ.deletePostByAdmin(postId).subscribe();
    window.location.reload();
  }

  setActiveTab(event: any) {
    this.activeTab = event.target.value
    console.log(event.target.value)
    this.refreshList(event.target.value)
  }

  refreshList(type: string) {
    if (type=="posts") {
      this.feedServ.getAllPost().subscribe((posts: Post[]) => {
        this.posts = posts
      })
    } else if (type=="users") {
      this.adminServ.getAllUsers().subscribe((users) => {
        console.log(users)
        this.users = users
      })
    }
  }

  deleteUser(userId: any) {
    this.adminServ.deleteUserByAdmin(userId).subscribe((data) => {
      console.log("deleted")
      window.location.reload();
    })
  }

}

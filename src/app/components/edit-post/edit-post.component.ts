import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from 'app/classes/post';
import { PostService } from 'app/services/post.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  // pass post retrieved to post component to display
  @Input() currentPost: Post = new Post();
  // post id of the current post being display
  postId!: number;

  // post to be updated
  postToBeUpdated!: Post;


  constructor(private router: Router, private postServ: PostService) { }
  

  ngOnInit(): void {
    this.postId = this.currentPost.post_id!;
  }

  onDelete() {
    this.postServ.deletePostByUser(this.postId).subscribe(data => {
      console.log("Post deleted")
      // this.router.navigate(this.router.url)
      window.location.reload();
    });
  }

  onUpdate() {
    this.postServ.updatePostByUser(this.postToBeUpdated).subscribe()
  }

}

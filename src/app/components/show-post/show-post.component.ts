import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'app/classes/post';
import { PostService } from 'app/services/post.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
})
export class ShowPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postServ: PostService) { }

  id: number | undefined; // post id
  private sub: any; // to allow calling of subscribe
  @Input() currentPost: Post = new Post();
 
  ngOnInit(): void {
    // this.sub = this.route.params.subscribe(params => {
    //   // params returns an object
    //   // object contains the parameter and the value is string
    //   this.id = +params['id'] // + is to convert string to a number

    //   // use post id to get the post details
    //   this.postServ.getPostById(this.id).subscribe((post: Post) => {
    //     // assign post retrieved to currentPost
    //     this.currentPost = post;
    //   })

    // })
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from 'app/classes/global';
import { Post } from 'app/classes/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getImage(postId: number) {
    return this.http.get(Global.baseUrl + "getimage/" + postId, {
      responseType: 'text'
    })
  }

  // get post by id
  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(Global.baseUrl + "post/" + postId);
  }

  // delete post by id
  deletePostByUser(postId: number) {
    return this.http.delete(Global.baseUrl + "post/delete/" + postId, {responseType: 'text'})
  }

  // update post by id
  updatePostByUser(postToUpdate: Post) {
    return this.http.put(Global.baseUrl + "post/update/" + postToUpdate.post_id, postToUpdate)
  }
 
  // add 1 view count to post
  addOneViewCount(postId: number) {
    return this.http.get(Global.baseUrl + "post/addview/" + postId)
  }

  // like post
  likePost(postId: number) {
    return this.http.post(Global.baseUrl + "post/like", {
      postId
    })
  }

  // check if post is liked by user
  checkIfPostIsLiked(postId: number) {
    return this.http.get(Global.baseUrl + "post/" + postId + "/likes")
  }

}

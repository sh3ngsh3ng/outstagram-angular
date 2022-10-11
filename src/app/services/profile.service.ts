import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from 'app/classes/global';
import { Post } from 'app/classes/post';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserPosts() {
    // get posts only by user
    return this.http.get<Post[]>(Global.baseUrl + "post/user")
  }


}

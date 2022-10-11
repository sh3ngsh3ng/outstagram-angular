import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../classes/global';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class FeedService {


  constructor(private http: HttpClient) { }

  // get all posts
  getAllPost() {
    return this.http.get<Post[]>(Global.baseUrl + "post/all")
  }
}

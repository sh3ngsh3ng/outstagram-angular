import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'app/classes/global';
import { Post } from 'app/classes/post';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { }


  getAllUsers() {
    return this.http.get<any>(Global.baseUrl + "admin/getusers")
  }

  deletePostByAdmin(postId: any) {
    return this.http.delete<any>(Global.baseUrl + "admin/delete/post/" + postId)
  }

  updatePostByAdmin(postToUpdate: Post) {
    return this.http.put<any>(Global.baseUrl + "admin/update/post/" + postToUpdate.post_id, postToUpdate);
  } 

  deleteUserByAdmin(userId: any) {
    return this.http.delete(Global.baseUrl + "admin/delete/user/" + userId)
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'app/classes/post';
import { UserService } from 'app/services/user.service';
import { sample } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css', '../../app.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private userServ: UserService, private router: Router) { }

  newPost: Post = new Post();
  image = null;
  previewContent: any = "../../assets/images/upload.png"
  disableBtn: boolean = true;



  ngOnInit(): void {
    
  }

  // ngAfterViewInit() {
  //   console.log(this.input);
  // }

  setPostType(event: {target: any;}) {
    console.log(event.target.value)
    this.newPost.setPostType(event.target.value);
    console.log(this.newPost)
  }

  setHyperlink(event: {target: any;}) {
    var hyperlink = event.target.value
    console.log(hyperlink)
    this.newPost.setHyperlink(hyperlink)
    this.disableBtn = false
  }

  // this is called to post the image
  postImage() {
    // console.log(this.newPost)
    // // create instance of FormData
    // const formData = new FormData();
    // // append image to formData
    // formData.append('image', this.image!)
    // // append newPost to formData
    // for (var key in this.newPost) {
    //   formData.append(key, this.newPost[key as keyof Post]?.toString()!)
    // }


    // the below api must be dynamic to add diff post type
    if (this.newPost.post_type == "video" || this.newPost.post_type == "image") {
      // create instance of FormData
      const formData = new FormData();
      // append image to formData
      formData.append('image', this.image!)
      // append newPost to formData
      for (var key in this.newPost) {
        formData.append(key, this.newPost[key as keyof Post]?.toString()!)
      }
      this.userServ.postImage(formData).subscribe(); // can do something aftr subscribe
    } else if (this.newPost.post_type == "hyperlink"){
      // this.userServ.postImage(formData).subscribe();
      console.log("Only image can be posted now")
    } 
    
    window.location.reload();
    
    // this.router.navigate([{outlets: {user: ['addpost']}}])
  }

  // this function is called wheneve a file is attached. It should preview the image
  onContentUpload(event: { target: any; }) {
    this.image = event.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload =(event:any) => {
      console.log(event.target.result)
      this.previewContent = event.target.result;
      this.disableBtn=false;
    }
    // readey state 0 = empty
    // ready state 1 = loading
    // ready state 2 = done
    // console.log(reader.readyState)
    
    // reader.onloadend = () => {
    //   reader.readAsDataURL(event.target.files[0])
    //   this.disableBtn = false;
    // }
    // reader.readAsDataURL(event.target.files[0])
    // console.log(reader.readyState)

    // if (this.previewImg) {
    //   reader.readAsDataURL(event.target.files[0])
    //   this.disableBtn = false;
    // }

    // console.log("this =>", event.target.result)
    // check if media is uploaded
    // if (event.target.files.length === 0) {
    //   window.alert("file is not uploaded yet")
    //   // this.disableBtn = false;
    // }
    
    
    // console.log(event.target.files)
    // console.log(this.newPost)
  }

  reloadVideo(event: {target: any;}) {
    console.log(event)
  }
  
}

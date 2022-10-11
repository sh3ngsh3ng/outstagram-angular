import { Component, Input, OnInit, Output, EventEmitter, ViewChildren, ElementRef, Query, QueryList, AfterViewInit} from '@angular/core';
import { Post } from 'app/classes/post';
import { PostService } from 'app/services/post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, AfterViewInit {
  image: any;
  imageLoaded: boolean = false;
  contentType: any;
  observer: any;

  constructor(private postServ: PostService, private sanitizer: DomSanitizer, private router: Router) { }

  @Input() post : Post= new Post();
  // to set condition for post_type
  @Input() editable: boolean = false;

  @Output() public childEvent = new EventEmitter();

  @Output() public confirmUpdateParent = new EventEmitter();

  @Output() public confirmDeleteParent = new EventEmitter();

  postId: number | undefined = undefined;
  imagePath: any;
  editMode: boolean = false;
  postLiked!: boolean;

  @ViewChildren('thePostToObserve', {read: ElementRef})
  thePostToObserve!: QueryList<ElementRef>;


  ngOnInit(): void {
    this.postId = this.post.post_id;
    this.postServ.getImage(this.postId!).subscribe(image => {
      console.log("called")
      this.imagePath = image;
      this.imageLoaded = true;
    })
    this.intersectionObserver();
    this.postServ.checkIfPostIsLiked(this.postId!).subscribe((data: any) => {
      this.postLiked = data.success
    })
  }

  ngAfterViewInit() {
    this.observer.observe(this.thePostToObserve.last.nativeElement);
  }

  // emit the updated post back to edit-post-component
  sendUpdatedPost(evt: any) {
    // assign new caption to the post
    this.post.caption = evt.target.value;
    // send the post back
    this.childEvent.emit(this.post);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  deleteConfirmation() {
    var ans = window.confirm("Are you sure you want to delete this post?")
    if (ans) {
      this.confirmDelete();
    }
  }

  confirmUpdate() {
    this.confirmUpdateParent.emit();
    this.editMode = !this.editMode;
  }

  confirmDelete() {
    this.confirmDeleteParent.emit();
  }


  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.postServ.addOneViewCount(this.postId!).subscribe()
      }
    }, options);
  }


  likePost() {
    // call like post api here
    this.postServ.likePost(this.postId!).subscribe()
    this.postLiked = !this.postLiked
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from 'app/classes/post';
import { FeedService } from 'app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],

  
})
export class FeedComponent implements OnInit {

  constructor(private feedServ: FeedService) { }

  feed: Post[] = [];
  page: number = 1;
  itemsPerPage: number = 5;

  ngOnInit(): void {
    this.feedServ.getAllPost().subscribe((data: Post[]) => {
      this.feed = data
      console.log("feed =>", this.feed)
    });
  }

  changeItemsPerPage(event: any) {
    this.itemsPerPage = event.target.value
  }  

}

import { PostService } from "./../post.service";
import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";
@Component({
  selector: "app-list-post",
  templateUrl: "./list-post.component.html",
  styleUrls: ["./list-post.component.css"]
})
export class ListPostComponent implements OnInit, OnDestroy {
  posts: Array<any> = [];

  subscription: Subscription;

  constructor(private postService: PostService) {
    this.subscription = this.postService.getPosts().subscribe(res => {
      this.posts = res.news;
    });
  }

  ngOnInit() {}

  ngOnDestroy(){

    this.subscription.unsubscribe();

  }
}

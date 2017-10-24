import { PostService } from "./../post.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-post",
  templateUrl: "./list-post.component.html",
  styleUrls: ["./list-post.component.css"]
})
export class ListPostComponent implements OnInit {
  posts: Array<any> = [];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(res => {
      this.posts = res.news;
    });
  }

  ngOnInit() {}
}

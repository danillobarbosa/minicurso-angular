import { IPost } from "./../post.interface";
import { Component, OnInit, Input } from "@angular/core";

import * as moment from "moment";
@Component({
  selector: "app-card-post",
  templateUrl: "./card-post.component.html",
  styleUrls: ["./card-post.component.css"]
})
export class CardPostComponent implements OnInit {
  @Input("post") post: IPost;

  constructor() {}

  ngOnInit() {}

  converterData(data: string) {
    return moment(data, 'dd-mm-aaaa hh:mm:ss');
  }

}

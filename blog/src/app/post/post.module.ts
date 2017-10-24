import { PostService } from './post.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPostComponent } from './card-post/card-post.component';
import { HttpModule } from "@angular/http";
import { ListPostComponent } from './list-post/list-post.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [PostService],
  declarations: [CardPostComponent, ListPostComponent],
  exports: [CardPostComponent, ListPostComponent]
})
export class PostModule { }

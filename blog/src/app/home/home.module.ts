import { PostModule } from "./../post/post.module";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, PostModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}

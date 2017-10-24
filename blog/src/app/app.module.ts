import { HomeModule } from './home/home.module';
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarModule } from "./navbar/navbar.module";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [{ path: "", component: HomeComponent }, {path: 'sobre', component: SobreComponent}];

@NgModule({
  declarations: [AppComponent, SobreComponent],
  imports: [
    BrowserModule,
    NavbarModule,
    HomeModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  url: string = "https://www.vagalume.com.br/news/index.js";

  constructor(private http: Http) {}

  getPosts(): Observable<any> {
    return this.http.get(this.url).map(res => res.json());
  }

}

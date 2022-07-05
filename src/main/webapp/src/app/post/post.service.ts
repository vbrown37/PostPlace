import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "./post";
import {HttpClient} from "@angular/common/http";
import {ROUTES} from "@config/routes";
import {ApiHttpClient} from "../http/ApiHttpClient";
import { map } from 'rxjs/operators';
import {PostMinify} from "./post.minify";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: ApiHttpClient) { }

  findPostMinifyById(id: string): Observable<PostMinify> {
    return this.http.get<PostMinify>(`${ROUTES.posts.minify.path}/${id}`)
      .pipe(map((p: PostMinify) => new Post(p))) as Observable<PostMinify>;
  }

  findPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${ROUTES.posts.path}/${id}`)
      .pipe(map((p: Post) => new Post(p))) as Observable<Post>;
  }

}

import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {ROUTES} from "@config/routes";
import {ApiHttpClient} from "../http/ApiHttpClient";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: ApiHttpClient) { }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${ROUTES.users.path}/${id}`)
      .pipe(map((u: User) => new User(u)));
  }

}

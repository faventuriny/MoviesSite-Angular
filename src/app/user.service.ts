import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private reqOption = { header: new HttpHeaders().set('Content-Type', 'application/json') }

  constructor(private http: HttpClient) { }

  dataBaseUrl = 'http://localhost:3030'
  error = new Subject<string>()

  createNewUser(user: User) {
    return this.http.post(
      this.dataBaseUrl + '/users',
      user,
      {
        observe: 'response'
      }
    )
  }
  login(userDetails: { email: string, password: string }) {
    return this.http.post(
      this.dataBaseUrl + "/users/login",
      userDetails,
      {
        observe: 'response'
      }
    )
  }
}

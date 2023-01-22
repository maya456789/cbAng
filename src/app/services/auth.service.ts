import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,) { }

  public login(userName: string, password: string) {
    return this.http
      .post<any>(`${environment.API_AUTHENTICATEUSER}`, { userName, password })
      .pipe(
        map((user) => {
          localStorage.setItem("currentUser", JSON.stringify(user));

          return user;
        })
      );
  }

}

import { User } from './../class/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string;
  constructor(private http: HttpClient, private router: Router) {
    this.url = environment.api_url;
  }

  public createUser(user: User) {
    const url = environment.api_url;
    const userObject: any = user;
    const uploadData = new FormData();

    for (const varName in userObject) {
      if (
        !(
          userObject[varName] == null ||
          userObject[varName].toString().trim() === ''
        )
      ) {
        uploadData.append(varName, userObject[varName]);
      }
    }
    const url_peticion = url + '/users';
    console.log(uploadData);
    const peticion = this.http.post(url_peticion, user);

    return peticion;
  }
  public login(user: any) {
    const peticion = this.http.post(this.url + '/users/login', {
      email: user.mail,
      password: user.passwd,
    });
    return peticion;
  }

  public checkLogin(): boolean {
    const helper = new JwtHelperService();
    if (localStorage.getItem('token') == null) {
      return false;
    } else {
      const token = localStorage.getItem('token');
      if (helper.isTokenExpired(token)) {
        localStorage.removeItem('token');
        // Forzamos al usuario a volver al login si su token es inválido
        this.router.navigate(['/login']);
      }
      return !helper.isTokenExpired(token);
    }
  }

  public logOut() {
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['/login']);

  }
}

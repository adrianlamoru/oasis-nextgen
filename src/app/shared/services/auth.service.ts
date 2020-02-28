import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/shareReplay';

import * as moment from 'moment';

import { LoginModel } from '../models/login-model.interface';

@Injectable()
export class AuthService {
  static ID_TOKEN = 'id_token';
  static EXPIRES_AT = 'expires_at';

  // private urlPrefix = 'https://ngdev.oasisassistant.com/SCORPEO/subroutine/';
  private header = new HttpHeaders({'Content-Type': 'application/json'});

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  firstTimeLogin = false;

  constructor( private router: Router, private http: HttpClient) {}

  public setFirstTimeLogin(value: boolean) {
    this.firstTimeLogin = value;
  }

  public isFirstTimeLogin() {
    return this.firstTimeLogin;
  }

  public getUserType() {
    if (this.router.url.includes('/client')) {
      return 'client';
    } else {
      return 'employee';
    }
  }

  public getSessionToken() {
    const body = {'JSONIN': {'userId': 'sus114', 'password': 'pride09'}};
    // const body = {'JSONIN': {'userId': 'JO1868', 'password': 'Lovemy2boys'}};
    const options = {headers: this.header};

    return this.http.post(environment.sessionTokenGeneration,
      body,
      options
    );
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem(AuthService.EXPIRES_AT);
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getToken() {
    const token = localStorage.getItem(AuthService.ID_TOKEN);
    return token ? token : null;
  }

  login(login: LoginModel): Observable<boolean> {

    return Observable.of(true).delay(1000)
      .do(res => {
        // set session
        const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
        const EXPIRES_AT = moment(new Date()).add(1, 'days');

        localStorage.setItem(AuthService.ID_TOKEN, TOKEN);
        localStorage.setItem(AuthService.EXPIRES_AT, JSON.stringify(EXPIRES_AT) );
      } )
      .shareReplay();
  }

  logout(): void {
    localStorage.removeItem(AuthService.ID_TOKEN);
    localStorage.removeItem(AuthService.EXPIRES_AT);
    this.router.navigate(['/login']);
  }
}

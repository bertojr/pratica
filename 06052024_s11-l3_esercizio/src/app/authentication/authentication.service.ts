import { iAuthData } from './../models/auth-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iAuthResponse } from '../models/auth-response';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { iUser } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  urlLogin: string = 'http://localhost:3000/login';
  urlRegister: string = 'http://localhost:3000/register';
  jwtHelper: JwtHelperService = new JwtHelperService();
  authSubject = new BehaviorSubject<iUser | null>(null);
  user$ = this.authSubject.asObservable();
  isLoggedIn: boolean = false;
  isLoggedIn$ = this.user$.pipe(
    map((user) => !!user),
    tap((user) => (this.isLoggedIn = user))
  );

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }

  register(newUser: Partial<iUser>): Observable<iAuthResponse> {
    return this.http.post<iAuthResponse>(this.urlRegister, newUser);
  }

  login(authData: iAuthData): Observable<iAuthResponse> {
    return this.http.post<iAuthResponse>(this.urlLogin, authData).pipe(
      tap((data) => {
        this.authSubject.next(data.user);
        localStorage.setItem('accessData', JSON.stringify(data));
      })
    );
  }

  logout(): void {
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }

  getAccesData(): iAuthResponse | null {
    const accessDataJson = localStorage.getItem('accessData');

    if (!accessDataJson) {
      return null;
    }
    const accessData: iAuthResponse = JSON.parse(accessDataJson);
    return accessData;
  }

  restoreUser() {
    const accessData = this.getAccesData();
    if (!accessData) {
      return;
    }
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) {
      return;
    }
    this.authSubject.next(accessData.user);
  }
}

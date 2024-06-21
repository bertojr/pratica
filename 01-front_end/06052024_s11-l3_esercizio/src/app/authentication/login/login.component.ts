import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { iAuthData } from '../../models/auth-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authData: iAuthData = {
    email: 'paulo@paulo.com',
    password: 'password',
  };
  constructor(private authSvc: AuthenticationService, private router: Router) {}

  login() {
    this.authSvc.login(this.authData).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }
}

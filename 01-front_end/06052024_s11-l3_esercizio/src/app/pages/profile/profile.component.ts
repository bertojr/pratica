import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { iUser } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user!: iUser;
  constructor(private authSvc: AuthenticationService) {}

  ngOnInit() {
    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }
}

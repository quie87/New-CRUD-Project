import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  signOut(): void {
    this.auth.logOut();
  }
}

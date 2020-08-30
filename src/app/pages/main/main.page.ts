import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.loadUser().subscribe();
  }

  isUserLoaded(): boolean {
    const user = this.auth.getUser();
    if (user && user.name) {
      return true;
    } else {
      return false;
    }
  }
}

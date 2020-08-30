import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private auth: AuthService
  ) {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/home']);
    }
    this.initializeApp();
  }

  initializeApp(): void {
    this.platform.ready().then((): any => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

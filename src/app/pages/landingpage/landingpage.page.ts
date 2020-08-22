import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
// import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss']
})
export class LandingpagePage implements OnInit {
  public user: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.auth.registerNewUser(this.user.value).subscribe();
  }
}

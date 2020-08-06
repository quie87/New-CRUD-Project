import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
// import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss']
})
export class LandingpagePage implements OnInit {
  public user: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpService) {}

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // this.http.registerNewUser(this.user.value).subscribe((res: any): any => {
    //   console.log(res);
    // });
  }
}

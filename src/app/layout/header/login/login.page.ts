import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public user: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalController: ModalController, private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    this.auth.signIn(this.user.value).subscribe();
    this.closeModal();
  }

  closeModal(): void {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}

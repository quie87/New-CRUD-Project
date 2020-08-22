import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit(): void {}

  async presentModal(): Promise<any> {
    const modal = await this.modalController.create({
      component: LoginPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}

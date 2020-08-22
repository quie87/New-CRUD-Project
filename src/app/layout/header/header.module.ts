import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';
import { LoginPageModule } from './login/login.module';
import { ModelComponent } from './model/model.component';

@NgModule({
  declarations: [HeaderComponent, ModelComponent],
  imports: [CommonModule, IonicModule, LoginPageModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}

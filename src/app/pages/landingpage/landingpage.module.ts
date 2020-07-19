import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingpagePageRoutingModule } from './landingpage-routing.module';

import { LandingpagePage } from './landingpage.page';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LandingpagePageRoutingModule],
  declarations: [LandingpagePage, HeaderComponent]
})
export class LandingpagePageModule {}

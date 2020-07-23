import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingpagePageRoutingModule } from './landingpage-routing.module';
import { LandingpagePage } from './landingpage.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LandingpagePageRoutingModule, ReactiveFormsModule],
  declarations: [LandingpagePage]
})
export class LandingpagePageModule {}

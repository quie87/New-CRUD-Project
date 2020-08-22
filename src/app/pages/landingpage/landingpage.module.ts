import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingpagePageRoutingModule } from './landingpage-routing.module';
import { LandingpagePage } from './landingpage.page';
import { HeaderModule } from 'src/app/layout/header/header.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LandingpagePageRoutingModule, ReactiveFormsModule, HeaderModule],
  declarations: [LandingpagePage]
})
export class LandingpagePageModule {}

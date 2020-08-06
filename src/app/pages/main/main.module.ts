import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HeaderComponent } from '../../layout/header/header.component';
import { ProjectsModule } from 'src/app/components/projects/projects.module';
import { TodosModule } from 'src/app/components/todos/todos.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MainPageRoutingModule, ProjectsModule, TodosModule],
  declarations: [MainPage, HeaderComponent]
})
export class MainPageModule {}

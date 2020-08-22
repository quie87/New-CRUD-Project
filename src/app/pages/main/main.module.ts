import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { ProjectsModule } from 'src/app/components/projects/projects.module';
import { TodosModule } from 'src/app/components/todos/todos.module';
import { HeaderModule } from 'src/app/layout/header/header.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MainPageRoutingModule, ProjectsModule, TodosModule, HeaderModule],
  declarations: [MainPage]
})
export class MainPageModule {}

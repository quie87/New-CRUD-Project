import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HeaderComponent } from '../../layout/header/header.component';
import { TodosComponent } from 'src/app/components/todos/todos.component';
import { AddTodoComponent } from 'src/app/components/todos/add-todo/add-todo.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MainPageRoutingModule],
  declarations: [MainPage, HeaderComponent, TodosComponent, AddTodoComponent]
})
export class MainPageModule {}

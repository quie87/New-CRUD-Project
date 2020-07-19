import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosPageRoutingModule } from './todos-routing.module';

import { TodosPage } from './todos.page';
import { HeaderComponent } from '../layout/header/header.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TodosPageRoutingModule],
  declarations: [TodosPage, HeaderComponent, AddTodoComponent]
})
export class TodosPageModule {}

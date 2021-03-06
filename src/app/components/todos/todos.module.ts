import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [TodosComponent, AddTodoComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [TodosComponent]
})
export class TodosModule {}

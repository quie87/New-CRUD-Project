import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosPage } from './todos.page';
import { TodosService } from './shared/todos.service';

const routes: Routes = [
  {
    path: '',
    component: TodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodosService]
})
export class TodosPageRoutingModule {}

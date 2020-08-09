import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ProjectsComponent } from './projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectsService } from './shared/projects.service';
import { TodosModule } from '../todos/todos.module';

@NgModule({
  declarations: [ProjectsComponent, AddProjectComponent],
  imports: [CommonModule, IonicModule, FormsModule, TodosModule],
  providers: [ProjectsService],
  exports: [ProjectsComponent]
})
export class ProjectsModule {}

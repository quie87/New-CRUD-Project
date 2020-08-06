import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ProjectsComponent } from './projects.component';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [ProjectsComponent, AddProjectComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [ProjectsComponent]
})
export class ProjectsModule {}

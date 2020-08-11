import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectsService } from './shared/projects.service';

import { Project } from '../projects/shared/project.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  activeProject: Project;
  // @Output() activeProject: EventEmitter<any>;
  // activeProject: Project;

  projects: Project[] = [];

  user = {
    _id: 1,
    name: 'Lasse',
    email: 'lasse@gmail.com'
  };

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService
      .getProjects()
      .subscribe((projects: any): any => (this.projects = projects.response.allProjects));
  }

  addProject(event: any): void {
    this.projectsService.addProject(event).subscribe((project: Project): any => {
      this.projects.push(project);
    });
  }

  hasProjects(): boolean {
    return this.projects && this.projects.length > 0 ? true : false;
  }

  onDelete(project: Project): void {
    this.projects = this.projects.filter((projects: Project): boolean => {
      return projects._id !== project._id;
    });

    // this.projectsService.deleteProject(project._id).subscribe((res: any): any => console.log(res.status));
    this.projectsService.deleteProject(project._id).subscribe();
  }

  setActiveProject(project: Project): void {
    this.activeProject = project;
  }

  hasActiveProject(): boolean {
    return this.activeProject ? true : false;
  }

  getActiveProject(): any {
    return this.activeProject;
  }

  // move this to authService later
  getUser(): any {
    return this.user;
  }
}

import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './shared/projects.service';

import { Project } from '../projects/shared/project.model';
import { User } from 'src/app/shared/user.model';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  activeProject: Project;

  projects: Project[] = [];
  user: User;

  constructor(private projectsService: ProjectsService, private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.getUser();
    this.getProjects(this.user._id);
  }

  OnDestroy(): void {
    this.projects = [];
    this.user = null;
  }

  getProjects(id: string): void {
    this.projectsService
      .getProjects(id)
      .subscribe((projects: any): any => (this.projects = projects.response.allProjects));
  }

  addProject(projectName: string): void {
    const newProject = {
      name: projectName,
      userId: this.user._id
    };

    this.projectsService.addProject(newProject).subscribe((project: Project): any => {
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

  getActiveProject(): Project {
    return this.activeProject;
  }

  // move this to authService later, used by Todos component atm
  getUser(): User {
    return this.user;
  }
}

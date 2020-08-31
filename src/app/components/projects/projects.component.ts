import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from './shared/projects.service';
import { Subscription } from 'rxjs';

import { HttpService } from '../../shared/http.service';
import { Project } from '../projects/shared/project.model';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Notification } from '../../shared/Notification';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  serverUrl = 'https://my-todo-rest-api.herokuapp.com/';
  projects: Project[] = [];
  activeProject: Project;
  notification = new Notification();

  subscriptions: Subscription[] = [];

  constructor(private http: HttpService, private projectsService: ProjectsService, private auth: AuthService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription): any => sub.unsubscribe());
  }

  getProjects(): void {
    this.http.fetch(this.serverUrl + 'projects').subscribe((projects: any): any => {
      this.projects = projects.response.allProjects;
    });
  }

  hasProjects(): boolean {
    return this.projects && this.projects.length > 0 ? true : false;
  }

  addProject(projectName: string): void {
    if (this.validate(projectName)) {
      const newProject = {
        name: projectName
      };

      this.http.post(this.serverUrl + 'projects', newProject).subscribe((project: Project): any => {
        this.projects.push(project);
        this.activeProject = project;
      });
    } else {
      this.notification.message('You need to enter a name longer then One letter', 'danger');
    }
  }

  validate(projectName: string): boolean {
    return projectName.length > 0 ? true : false;
  }

  onDelete(project: Project): void {
    this.projects = this.projects.filter((projects: Project): boolean => {
      return projects._id !== project._id;
    });

    this.http
      .delete('https://my-todo-rest-api.herokuapp.com/todos/all/' + `${project._id}`)
      .subscribe((resp: any): any => {
        this.http.delete(this.serverUrl + 'projects/' + `${project._id}`).subscribe((this.activeProject = null));
      });
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
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from './project.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  serverUrl = 'https://my-todo-rest-api.herokuapp.com/projects';
  projects: Project[];

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get(this.serverUrl + '/1', httpOptions);
  }

  addProject(project: Project): Observable<any> {
    return this.http.post(this.serverUrl, project, httpOptions);
  }

  deleteProject(project: Project): void {
    console.log(project);
  }

  // deleteProject(project: Project): Observable<any> {
  //   return this.http.delete(this.serverUrl, httpOptions);
  // }
}

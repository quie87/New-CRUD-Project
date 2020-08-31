import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from './project.model';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { HttpService } from 'src/app/shared/http.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  serverUrl = 'https://my-todo-rest-api.herokuapp.com/';
  projects: Project[];

  httpTokenHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': this.auth.getTokenFromStore()
    })
  };

  constructor(private http: HttpClient, private auth: AuthService, private httpS: HttpService) {}

  getProjects(id: string): Observable<any> {
    return this.http.get(this.serverUrl + 'projects/' + id, this.httpTokenHeader);
  }

  addProject(project: Project): Observable<any> {
    return this.http.post(this.serverUrl + 'projects', project, this.httpTokenHeader);
  }

  deleteProject(projectId: string): void {
    this.httpS
      .delete('https://my-todo-rest-api.herokuapp.com/todos/all/' + `${projectId}`)
      .subscribe((resp: any): any => {
        this.httpS.delete(this.serverUrl + 'projects/' + `${projectId}`).subscribe();
      });
  }
}

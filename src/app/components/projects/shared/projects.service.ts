import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  deleteProject(projectId: string): Observable<any> {
    return this.http.delete(this.serverUrl + '/' + projectId, httpOptions).pipe(catchError(this.handleError));
  }

  // Lägg koden för felhantering i egen fil för global användning

  handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}

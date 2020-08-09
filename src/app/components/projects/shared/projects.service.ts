import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

  deleteProject(projectId: number): Observable<any> {
    return this.http.delete(this.serverUrl + '/' + projectId, httpOptions).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}

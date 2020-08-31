import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../shared/todo.model';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosEndpoint = 'https://my-todo-rest-api.herokuapp.com/todos';

  httpTokenHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': this.auth.getTokenFromStore()
    })
  };

  constructor(private http: HttpClient, private auth: AuthService) {}

  getTodos(): Observable<any> {
    return this.http.get(`${this.todosEndpoint}`, this.httpTokenHeader);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosEndpoint}/${todo._id}`;
    return this.http.patch(url, this.httpTokenHeader);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosEndpoint}/${todo._id}`;
    return this.http.delete<Todo>(url, this.httpTokenHeader);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosEndpoint + '/create', todo, this.httpTokenHeader);
  }
}

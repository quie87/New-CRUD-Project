import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../shared/todo.model';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  getTodos(userId: string): Observable<any> {
    return this.http.get(`${this.todosEndpoint}/${userId}`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosEndpoint}/${todo._id}`;
    return this.http.patch(url, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosEndpoint}/${todo._id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosEndpoint + '/create', todo, httpOptions);
  }
}

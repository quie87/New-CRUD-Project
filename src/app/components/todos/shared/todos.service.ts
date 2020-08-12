import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../shared/todo.model';
import { Project } from '../../projects/shared/project.model';
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
  todosUrl = 'https://my-todo-rest-api.herokuapp.com/todos';
  tempUserId = '5f19b942fdcb080017ab6c13';
  tempProjectId = '5f19b96dfdcb080017ab6c14';

  constructor(private http: HttpClient) {}

  getTodos(userId: string): Observable<any> {
    // Lista ut hur du hämtar dessa
    // return this.http.get(`${this.todosUrl}/${projecId}`);
    console.log('i todos: ' + userId);
    return this.http.get(`${this.todosUrl}/${userId}`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo._id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo._id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl + '/create', todo, httpOptions);
  }
}

import { Component, OnInit } from '@angular/core';
import { TodosService } from './shared/todos.service';
import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  completed: string;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((todos: Todo[]): Todo[] => (this.todos = todos));
  }

  hasTodos(): boolean {
    return this.todos && this.todos.length > 0 ? true : false;
  }

  onToggle(todo: Todo): any {
    // Fan vad coolt att detta funkar
    // console.log('completed: ' + todoItem.completed);
    this.todosService.toggleCompleted(todo).subscribe();
    // return [...this.todos, todoItem];
  }

  onDelete(todo: Todo): void {
    this.todos = this.todos.filter((todos: Todo): boolean => {
      return todos.id !== todo.id;
    });

    this.todosService.deleteTodo(todo).subscribe();
  }

  addTodo(event: any): void {
    this.todosService.addTodo(event).subscribe((todo: Todo): any => {
      this.todos.push(todo);
    });
  }
}

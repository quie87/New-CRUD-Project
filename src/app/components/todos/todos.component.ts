import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from './shared/todos.service';
import { Todo } from './shared/todo.model';
import { Project } from '../projects/shared/project.model';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() activeProject: Project;
  @Input() user: User;

  todos: Todo[] = [];
  completed: string;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos(this.user._id).subscribe((todos: any): any => (this.todos = todos.response.todos));
  }

  OnDestroy(): void {
    this.todos = [];
  }

  renderTodos(): Todo[] {
    const todosToRender: Todo[] = [];

    this.todos.forEach((todo: Todo): void => {
      if (todo.projectId === this.activeProject._id) {
        todosToRender.push(todo);
      }
    });
    return todosToRender;
  }

  hasTodos(): boolean {
    return this.todos && this.todos.length > 0 ? true : false;
  }

  addTodo(event: any): void {
    const newTodo: Todo = {
      title: event.title,
      projectId: this.activeProject._id,
      userId: this.activeProject.userId,
      completed: false
    };

    this.todosService.addTodo(newTodo).subscribe((todo: Todo): any => {
      this.todos.push(todo);
    });
  }

  onToggle(todo: Todo): any {
    this.todosService.toggleCompleted(todo).subscribe();
  }

  onDelete(todo: Todo): void {
    this.todos = this.todos.filter((todos: Todo): boolean => {
      return todos._id !== todo._id;
    });

    this.todosService.deleteTodo(todo).subscribe();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from './shared/todos.service';
import { Todo } from './shared/todo.model';
import { Project } from '../projects/shared/project.model';
import { ProjectsService } from '../projects/shared/projects.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  completed: string;
  @Input() activeProject: Project;
  @Input() user: User;

  constructor(private todosService: TodosService, private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.todosService.getTodos(this.user._id).subscribe((todos: any): any => (this.todos = todos.response.todos));
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
      return todos._id !== todo._id;
    });

    this.todosService.deleteTodo(todo).subscribe();
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
}

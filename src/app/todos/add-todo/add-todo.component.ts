import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: any = new EventEmitter();

  todoName: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): any {
    const todo = {
      title: this.todoName,
      completed: false
    };

    this.addTodo.emit(todo);
    this.todoName = '';
  }
}

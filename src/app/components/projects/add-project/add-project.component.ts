import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  @Output() addProject: any = new EventEmitter();

  projectName: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): any {
    const project = {
      name: this.projectName,
      userId: 1
    };

    this.addProject.emit(project);
    this.projectName = '';
  }
}
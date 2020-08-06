import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodosComponent } from './todos.component';

describe('TodosPage', (): void => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});

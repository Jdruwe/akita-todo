import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFiltersComponent } from './todos-filters.component';

describe('TodosFiltersComponent', () => {
  let component: TodosFiltersComponent;
  let fixture: ComponentFixture<TodosFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

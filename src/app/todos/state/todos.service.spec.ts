import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodosService } from './todos.service';
import { TodosStore } from './todos.store';

describe('TodosService', () => {
  let todosService: TodosService;
  let todosStore: TodosStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService, TodosStore],
      imports: [ HttpClientTestingModule ]
    });

    todosService = TestBed.get(TodosService);
    todosStore = TestBed.get(TodosStore);
  });

  it('should be created', () => {
    expect(todosService).toBeDefined();
  });

});

import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {TodosStore} from './todos.store';
import {Todo} from './todo.model';

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private todosStore: TodosStore) {
  }

  add(todo: Todo) {
    this.todosStore.add(todo);
  }

  update(id, todo: Partial<Todo>) {
    this.todosStore.update(id, todo);
  }

  remove(id: ID) {
    this.todosStore.remove(id);
  }
}

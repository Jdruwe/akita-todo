import {Injectable} from '@angular/core';
import {TodosStore} from './todos.store';
import {createTodo, Todo} from './todo.model';
import {ID} from '@datorama/akita';
import {VISIBILITY_FILTER} from '../components/todos-filters/todos-filter.model';

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private todosStore: TodosStore) {
  }

  add(title: string) {
    const todo = createTodo({title});
    this.todosStore.add(todo);
  }

  complete({id, completed}: Todo) {
    this.todosStore.update(id, {
      completed
    });
  }

  delete(id: ID) {
    this.todosStore.remove(id);
  }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.update({
      ui: {
        filter
      }
    });
  }
}

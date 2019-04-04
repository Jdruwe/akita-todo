import {Component, OnInit} from '@angular/core';
import {TodosService} from '../../state/todos.service';
import {TodosQuery} from '../../state/todos.query';
import {Observable} from 'rxjs';
import {Todo} from '../../state/todo.model';
import {ID} from '@datorama/akita';
import {initialFilters, VISIBILITY_FILTER} from '../../components/todos-filters/todos-filter.model';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;
  filters = initialFilters;

  constructor(private todosService: TodosService,
              private todosQuery: TodosQuery) {
  }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
  }

  add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }

  complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  delete(id: ID) {
    this.todosService.delete(id);
  }

  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }
}

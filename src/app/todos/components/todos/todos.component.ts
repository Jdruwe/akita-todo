import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../state/todo.model';
import {ID} from '@datorama/akita';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  @Input() todos: Todo[];
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();

  trackByFn(index, todo) {
    return todo.id;
  }
}

import { TodosQuery } from './todos.query';
import { TodosStore } from './todos.store';

describe('TodosQuery', () => {
  let query: TodosQuery;

  beforeEach(() => {
    query = new TodosQuery(new TodosStore);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });

});

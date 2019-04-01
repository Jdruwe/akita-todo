import { TodosStore } from './todos.store';

describe('TodosStore', () => {
  let store: TodosStore;

  beforeEach(() => {
    store = new TodosStore();
  });

  it('should create an instance', () => {
    expect(store).toBeTruthy();
  });

});

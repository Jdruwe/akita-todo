import {guid, ID} from '@datorama/akita';

export interface Todo {
  id: ID;
  title: string;
  completed: boolean;
}

/**
 * A factory function that creates Todos
 */
export function createTodo({title, completed = false}: Partial<Todo>) {
  return {
    id: guid(),
    title,
    completed
  } as Todo;
}

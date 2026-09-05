import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  return [...state, todo];
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  let index = state.findIndex(todo => todo.id === id);
  if (index === -1) {
    throw new Error(`Todo with id ${id} not found`);
  }

  const oldTodo = state[index];
  const updatedTodo = {
    ...oldTodo,
    ...update,
    id: oldTodo.id,
    createdAt: oldTodo.createdAt,
  };

  return [
    ...state.slice(0, index),
    updatedTodo,
    ...state.slice(index + 1)
  ];
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  let index = state.findIndex(todo => todo.id === id);
  if (index === -1) {
    throw new Error(`Todo with id ${id} not found`);
  }

  const newState = [...state];
  newState.splice(index, 1);
  return newState;
}


export function getTodo(state: Todo[], id: number): Todo | undefined {
  return state.find(todo => todo.id === id);
}

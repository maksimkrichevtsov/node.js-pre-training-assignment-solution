import { InMemoryRepository } from './repository';
import { Todo, NewTodo, TodoStatus } from './types';

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();
  private nextId = 1;

  async getAll(): Promise<Todo[]> {
    await new Promise((resolve) => 
      setTimeout(resolve, Math.floor(Math.random() * (600 - 300 + 1)) + 300)
    );
    
    return this.repo.findAll();
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    await new Promise((resolve) => 
      setTimeout(resolve, Math.floor(Math.random() * (600 - 300 + 1)) + 300)
    );
    
    const todo: Todo = {
      id: this.nextId++,
      title: newTodo.title,
      description: newTodo.description,
      status: newTodo.status ?? TodoStatus.PENDING,
      createdAt: new Date(),
    };

    return this.repo.add(todo);
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    await new Promise((resolve) => 
      setTimeout(resolve, Math.floor(Math.random() * (600 - 300 + 1)) + 300)
    );

    const existingTodo = this.repo.findById(id);
    if (!existingTodo) {
      throw new Error(`Todo with ID ${id} not found`);
    }

    return this.repo.update(id, update);
  }

  async remove(id: number): Promise<void> {
    await new Promise((resolve) => 
      setTimeout(resolve, Math.floor(Math.random() * (600 - 300 + 1)) + 300)
    );

    const existingTodo = this.repo.findById(id);
    if (!existingTodo) {
      throw new Error(`Todo with ID ${id} not found`);
    }

    this.repo.remove(id);
  }
}

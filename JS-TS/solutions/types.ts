interface Todo {
    id: number,
    title: string,
    description?: string;
    status: TodoStatus;
    readonly createdAt: Date;
}

interface NewTodo {
    title:string;
    description?: string;
    status?: TodoStatus;
}

enum TodoStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
}

export { Todo, NewTodo, TodoStatus };
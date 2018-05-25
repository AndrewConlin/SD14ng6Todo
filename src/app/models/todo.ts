export class Todo {
  id: number;
  task: string;
  description: string;
  completed: boolean;

  constructor (id?: number, task?: string, description?: string, completed?: boolean) {
    this.id = id;
    this.task = task;
    this.description = description;
    this.completed = completed;
  }
}

export class Todo {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  completeDate: string;
  dueDate: string;

  constructor (id?: number, task?: string, description?: string, completed?: boolean, completeDate?: string, dueDate?: string) {
    this.id = id;
    this.task = task;
    this.description = description;
    this.completed = completed;
    this.completeDate = completeDate;
    this.dueDate = dueDate;
  }
}

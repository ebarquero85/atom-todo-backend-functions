export interface TaskInterface {
  id: string;
  userId: string;
  task: string;
  completed: boolean;
  createdAt: Date;
  deleted: boolean;
}

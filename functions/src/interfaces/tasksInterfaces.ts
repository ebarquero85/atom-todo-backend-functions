export interface TaskInterface {
  id: string;
  userId: string;
  title: string;
  task: string;
  completed: boolean;
  createdAt: Date;
  deleted: boolean;
}

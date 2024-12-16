export interface TaskInterface {
  id: string;
  userId: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  deleted: boolean;
}

export type task = {
  id: string;
  title: string;
  description: string;
  scheduled: Date;
  finished: boolean;
  urgency: number;
  importance: number;
}

export type TaskFromApi = {
  taskId: string;
  userId: string;
  title: string;
  description: string;
  scheduled: Date;
  tag: string;
  importance: number;
  urgency: number;
  finished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
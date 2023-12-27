export type task = {
  taskId: string;
  title: string;
  description: string;
  scheduled: Date;
  tag: string;
  finished: boolean;
  urgency: number;
  importance: number;
}

export type TaskPayload = task & { userId: string };

export type TaskFromApi = task & TaskPayload & {
  createdAt: Date;
  updatedAt: Date;
}

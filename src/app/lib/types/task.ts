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

export type TaskPostPayload = task & { userId: string };

export type TaskFromApi = task & TaskPostPayload & {
  createdAt: Date;
  updatedAt: Date;
}

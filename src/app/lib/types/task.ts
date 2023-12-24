export type task = {
  id: string;
  title: string;
  description: string;
  scheduled: Date;
  finished: boolean;
  urgency: number;
  importance: number;
}
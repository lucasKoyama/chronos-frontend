import { TaskFromApi, task } from '../types/task';

function categorizeTasksByTags(tasks: TaskFromApi[]): Record<string, TaskFromApi[]> {
  return tasks.reduce((tasksCategorized: Record<string, TaskFromApi[]>, task: TaskFromApi) => {
    const categoryExists = tasksCategorized[task.tag];

    if (categoryExists) {
      tasksCategorized[task.tag] = [...categoryExists, task];
    } else {
      tasksCategorized[task.tag] = [task];
    }

    return tasksCategorized;
  }, {});
};

function mapTaskApiToFrontendTaskType(tasks: TaskFromApi[]): task[] {
  return tasks.map((taskFromApi) => ({
    id: taskFromApi.taskId,
    title: taskFromApi.title,
    description: taskFromApi.description,
    scheduled: new Date(taskFromApi.scheduled),
    finished: taskFromApi.finished,
    urgency: taskFromApi.urgency,
    importance: taskFromApi.importance,
  }));
}

export {
  categorizeTasksByTags,
  mapTaskApiToFrontendTaskType,
};

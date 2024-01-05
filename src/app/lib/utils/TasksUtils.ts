import { TaskFromApi, task } from '../types/task';

function categorizeTasksByTagsAndDate(tasks: TaskFromApi[], taskByDay: string): Record<string, TaskFromApi[]> {
  const tasksByDay = tasks.filter((task) => String(task.scheduled).includes(taskByDay));
  return tasksByDay.reduce((tasksCategorized: Record<string, TaskFromApi[]>, task: TaskFromApi) => {
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
    taskId: taskFromApi.taskId,
    title: taskFromApi.title,
    description: taskFromApi.description,
    scheduled: new Date(taskFromApi.scheduled),
    tag: taskFromApi.tag,
    finished: taskFromApi.finished,
    urgency: taskFromApi.urgency,
    importance: taskFromApi.importance,
  }));
}

export {
  categorizeTasksByTagsAndDate,
  mapTaskApiToFrontendTaskType,
};

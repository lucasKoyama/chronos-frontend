'use client'
import { useEffect } from 'react';
import { categorizeTasksByTagsAndDate, mapTaskApiToFrontendTaskType } from '@/app/lib/utils/TasksUtils';
import TasksList from "@/app/ui/tasks/TasksList";
import Tag from "@/app/ui/tasks/Tag";
import { useTasks } from '@/app/lib/utils/context/TasksContext';
import Loading from '../Loading';

export default function CategorizedTasksLists(
  { taskByDay }: { readonly taskByDay: string }
  ) {
  const { tasks } = useTasks();

  useEffect(() => {}, [tasks]);
 
  const doNotHaveTasks = tasks?.length === 0;
  const noTasks = (
    <h3 className="text-2xl font-bold text-center m-auto p-5 text-gray-500 drop-shadow-2xl">
      You do not have any tasks!
    </h3>
  )
  if (doNotHaveTasks) {
    return noTasks
  } else if (tasks) {
    const categorizedTasks = categorizeTasksByTagsAndDate(tasks, taskByDay);
    if (Object.keys(categorizedTasks).length === 0) return noTasks
    const tagsTasks = Object.entries(categorizedTasks);
    return tagsTasks.map(([tag, tasks]) => {
      const frontEndTasks = mapTaskApiToFrontendTaskType(tasks);
      return (  
        <section key={tag}>
          <Tag name={tag} />
          <TasksList tasks={frontEndTasks} withPriorityBadge />
        </section>
      )
    })
  }
  return <Loading />
}

'use client'
import { useEffect } from 'react';
import { categorizeTasksByTags, mapTaskApiToFrontendTaskType } from '@/app/lib/utils/TasksUtils';
import TasksList from "@/app/ui/tasks/TasksList";
import Tag from "@/app/ui/tasks/Tag";
import { useTasks } from '@/app/lib/utils/context/TasksContext';
import Loading from '../Loading';

export default function CategorizedTasksLists() {
  const { tasks } = useTasks();

  useEffect(() => {}, [tasks]);
 
  const doNotHaveTasks = tasks?.length === 0;
  if (doNotHaveTasks) {
    return (
      <h3 className="text-2xl font-bold text-center mt-28 text-gray-500 drop-shadow-2xl">
        You do not have any tasks!
      </h3>
    )
  } else if (tasks) {
    const categorizedTasks = categorizeTasksByTags(tasks);
    const tagsTasks = Object.entries(categorizedTasks);
    return tagsTasks.map(([tag, tasks]) => {
      const frontEndTasks = mapTaskApiToFrontendTaskType(tasks);
      return (
        <section key={tag}>
          <Tag name={tag} />
          <TasksList tasks={frontEndTasks}/>
        </section>
      )
    })
  }
  return <Loading />
}
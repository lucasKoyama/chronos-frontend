'use client'
import { useState, useEffect } from 'react';
import { fetchTasksByUserId } from '@/app/lib/utils/api/fetch';
import { categorizeTasksByTags, mapTaskApiToFrontendTaskType } from '@/app/lib/utils/TasksUtils';
import TasksList from "@/app/ui/tasks/TasksList";
import Tag from "@/app/ui/tasks/Tag";
import { useAuth } from '@/app/lib/utils/context/AuthContext';
import { useTasks } from '@/app/lib/utils/context/TasksContext';
import { TaskFromApi } from '@/app/lib/types/task';
import Loading from '../Loading';

export default function CategorizedTasksLists() {
  const [tasksFetchingCompleted, setTasksFetchingCompleted] = useState(false);
  const [tasksToAvoidLoop, setTasksToAvoidLoop] = useState<TaskFromApi[] | undefined>(undefined);
  const { user } = useAuth();
  const { tasks, handleTasks } = useTasks();

  useEffect(() => {
    const fetchTasks = async () => {
      if (user) {
        try {
          setTasksToAvoidLoop(await fetchTasksByUserId(user.sub));
          setTasksFetchingCompleted(true);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
    }
    setTasksFetchingCompleted(false);
    fetchTasks();
  }, [user]);

  useEffect(() => {
    if (tasksToAvoidLoop !== tasks) {
      handleTasks(tasks as TaskFromApi[]);
    }
  }, [tasks, handleTasks]);

  if (tasksToAvoidLoop) handleTasks(tasksToAvoidLoop);
 
  const doNotHaveTasks = tasks?.length === 0;
  if (doNotHaveTasks && tasksFetchingCompleted) {
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
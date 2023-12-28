'use client'
import { useState, useEffect, useCallback } from 'react';
import { fetchTasksByUserId } from '@/app/lib/utils/api/fetch';
import { categorizeTasksByTags, mapTaskApiToFrontendTaskType } from '@/app/lib/utils/TasksUtils';
import TasksList from "@/app/ui/tasks/TasksList";
import Tag from "@/app/ui/tasks/Tag";
import { useAuth } from '@/app/lib/utils/context/AuthContext';
import { useTasks } from '@/app/lib/utils/context/TasksContext';

export default function CategorizedTasksLists() {
  const [tasksFetchingCompleted, setTasksFetchingCompleted] = useState(false);
  const { user } = useAuth();
  const { tasks, handleTasks } = useTasks();

  const fetchTasks = useCallback(async (userId: string) => {
    try {
      handleTasks(await fetchTasksByUserId(userId));
      setTasksFetchingCompleted(true);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }, [handleTasks]);

  useEffect(() => {
    if (user) fetchTasks(user.id);
  }, [user, fetchTasks]);

  const doNotHaveTasks = tasks?.length === 0;
  console.log(doNotHaveTasks)
  if (doNotHaveTasks && tasksFetchingCompleted) {
    return <p>You do not have any tasks!</p>
  } else if (doNotHaveTasks && !tasksFetchingCompleted) {
    return <p>Loading tasks...</p>
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
}
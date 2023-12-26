'use client'
import { useState, useEffect } from 'react';
import { TaskFromApi } from '@/app/lib/types/task';
import { fetchTasksByUserId } from '@/app/lib/utils/api/fetch';
import { categorizeTasksByTags, mapTaskApiToFrontendTaskType } from '@/app/lib/utils/TasksUtils';
import TasksList from "@/app/ui/tasks/TasksList";
import Tag from "@/app/ui/tasks/Tag";

export default function CategorizedTasksLists() {
  const [tasks, setTasks] = useState<TaskFromApi[]>([]);
  const [tasksFetchingCompleted, setTasksFetchingCompleted] = useState(false);

  useEffect(() => {
    const fetchTasks = async (userId: string) => {
      try {
        setTasks(await fetchTasksByUserId(userId));
        setTasksFetchingCompleted(true);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    const mockUserId = 'cc8fcf59-4708-4ffa-b944-ede6c7816e51';
    fetchTasks(mockUserId);
  }, []);
  
  const doNotHaveTasks = tasks.length === 0;
  if (doNotHaveTasks && tasksFetchingCompleted) {
    return <p>You do not have any tasks!</p>
  } else if (doNotHaveTasks && !tasksFetchingCompleted) {
    return <p>Loading tasks...</p>
  } else {
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
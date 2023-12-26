'use client'
import { useState, useEffect } from 'react';
import { TaskFromApi } from '@/app/lib/types/task';
import { fetchTasksByUserId } from '@/app/lib/utils/api/fetch';
import { categorizeTasksByTags, mapTaskApiToFrontendTaskType } from '@/app/lib/utils/TasksUtils';
import { DateNames } from "@/app/lib/utils/DateNames"
import TasksList from "@/app/ui/tasks/TasksList";
import tasks from "@/app/lib/mocks/tasks";
import Tag from "@/app/ui/tasks/Tag";

export default function Page() {
  const [tasks, setTasks] = useState<TaskFromApi[]>([]);

  useEffect(() => {
    const fetchTasks = async (userId: string) => {
      try {
        setTasks(await fetchTasksByUserId(userId));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    const mockUserId = 'cc8fcf59-4708-4ffa-b944-ede6c7816e51';
    fetchTasks(mockUserId);
  }, []);
  
  const categorizedTasks = categorizeTasksByTags(tasks);
  const categorizedTasksLists = () => {
    const tagsTasks = Object.entries(categorizedTasks);
    const listOfTasksByTag = tagsTasks.map(([tag, tasks]) => {
      const frontEndTasks = mapTaskApiToFrontendTaskType(tasks);
      return (
        <section key={tag}>
          <Tag name={tag} />
          <TasksList tasks={frontEndTasks}/>
        </section>
      )
    })
    return listOfTasksByTag;
  };

  const today = new DateNames(new Date());

  return (
    <section>
      <header className="pb-5 border-b-2 border-gray-200">
        <h2 className="text-5xl font-extrabold text-blue-950 drop-shadow-2xl">Today</h2>
        <section className="flex items-end mt-2.5 mb-1.5">
          <h2 className="text-4xl font-extrabold text-blue-950 drop-shadow-2xl mr-2.5">
            {today.getDayOfWeekName().slice(0, 3)}
          </h2>
          <h3 className="text-2xl font-bold text-gray-500 drop-shadow-2xl">
            {`${today.getDayOfMonth()} ${today.getMonthName().slice(0, 3)}`}
          </h3>
        </section>
      </header>
      <section>
        { categorizedTasksLists() }
      </section>
    </section>
  )
}
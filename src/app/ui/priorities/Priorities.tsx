'use client';
import { TaskFromApi } from "@/app/lib/types/task";
import { useTasks } from "@/app/lib/utils/context/TasksContext"
import TasksList from "../tasks/TasksList";

export default function Priorities() {
  const { tasks } = useTasks();
  let priorities: Record<string, TaskFromApi[]> = {
    now: [],
    later: [],
    delegate: [],
    discard: []
  };
  const tasksByPriority = tasks?.reduce((categorized, task) => {
    const { urgency, importance } = task;
    const high = 6;
    const low = 5;

    if (urgency >= high && importance >= high) {
      categorized.now.push(task);
    } else if (urgency <= low && importance >= high) {
      categorized.later.push(task);
    } else if (urgency >= high && importance <= low) {
      categorized.delegate.push(task);
    } else {
      categorized.discard.push(task);
    }

    return categorized;
  }, priorities);
  
  return (
    <div className="w-full h-screen flex flex-col mt-2"> 
      <div className="w-full h-screen flex flex-col md:flex-row">
        <div className="order-1 md:order-0 w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto bg-yellow-50 text-yellow-800 border border-yellow-900/10 ring-yellow-600/20">
          <h4 className="w-full text-center border border-b-inherit">later</h4>
          <div className="p-2"><TasksList tasks={tasksByPriority?.later}/></div>
        </div>
        <div className="order-0 md:order-1 w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto bg-red-50 text-red-700 border border-red-900/10 ring-red-600/10">
          <h4 className="w-full text-center border border-b-inherit">now</h4>
          <div className="p-2"><TasksList tasks={tasksByPriority?.now}/></div>
        </div>
      </div>
      <div className="w-full h-screen flex flex-col md:flex-row">
        <div className="order-1 md:order-0 w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto bg-gray-50 text-gray-600 border ring-gray-500/10">
          <h4 className="w-full text-center border border-b-inherit">discard</h4>
          <div className="p-2"><TasksList tasks={tasksByPriority?.discard}/></div>
        </div>
        <div className="order-0 md:order-1 w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto bg-purple-50 text-purple-700 border border-purple-900/10 ring-purple-700/10">
          <h4 className="w-full text-center border border-b-inherit">delegate</h4>
          <div className="p-2"><TasksList tasks={tasksByPriority?.delegate}/></div>
        </div>
      </div>
    </div>
  )
}
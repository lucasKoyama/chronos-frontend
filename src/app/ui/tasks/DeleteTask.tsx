import { deleteTask } from "@/app/lib/utils/api/delete";
import { useTasks } from "@/app/lib/utils/context/TasksContext";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteTask({ taskId }: { readonly taskId: string }) {
  const { tasks, handleTasks } = useTasks();

  const handleDeleteTask = async () => {
    await deleteTask(taskId);
    

    if (tasks) {
      handleTasks(tasks.filter((task) => task.taskId !== taskId));
    }
  }

  return (
    <button
      className="z-10 mr-2.5 hover:shadow-inner text-inherit"
      onClick={() => handleDeleteTask()}
    >
      <TrashIcon className="w-6 rounded hover:bg-white text-inherit" />
    </button>
  )
};
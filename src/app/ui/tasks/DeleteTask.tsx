import { deleteTask } from "@/app/lib/utils/api/delete";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteTask({ taskId }: { readonly taskId: string }) {
  const handleDeleteTask = async () => {
    await deleteTask(taskId);
    window.location.reload(); // tried to use revalidatePath(), but didn't worked
  }

  return (
    <button
      className="z-10 hover:shadow-inner"
      onClick={() => handleDeleteTask()}
    >
      <TrashIcon className="w-5 mt-0.5 rounded hover:bg-white"/>
    </button>
  )
};
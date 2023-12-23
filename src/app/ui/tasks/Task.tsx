import { task } from "@/app/lib/types/task";

export default function Task({ task }: { task: task }) {
  return (
    <li className="flex items-center">
      <input type="checkbox" className="mr-1 w-4 h-4 shadow-inner" />{task.title}
    </li>
  )
}
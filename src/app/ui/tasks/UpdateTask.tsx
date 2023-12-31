import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function UpdateTask({ taskId }: { readonly taskId: string }) {
  return (
    <Link
      className="z-10 mr-2.5 hover:shadow-inner"
      href={`/app/tasks/edit/${taskId}`}
    >
      <PencilIcon className="w-6 rounded hover:bg-white"/>
    </Link>
  )
};
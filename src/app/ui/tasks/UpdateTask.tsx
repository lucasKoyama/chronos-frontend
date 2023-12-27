import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function UpdateTask({ taskId }: { readonly taskId: string }) {
  return (
    <Link
      className="z-10 px-1 hover:shadow-inner"
      href={`/app/tasks/edit/${taskId}`}
    >
      <PencilIcon className="w-5 mt-0.5 rounded hover:bg-white"/>
    </Link>
  )
};
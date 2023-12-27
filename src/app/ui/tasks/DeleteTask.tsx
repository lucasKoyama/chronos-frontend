import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteTask() {
  return (
    <button className="z-10 hover:shadow-inner">
      <TrashIcon className="w-5 mt-0.5 rounded hover:bg-white"/>
    </button>
  )
};
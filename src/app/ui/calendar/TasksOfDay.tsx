import { XMarkIcon } from "@heroicons/react/24/outline";
import CategorizedTasksLists from "../tasks/CategorizedTasksLists";

export default function TasksOfDay({ date, resetDay }: { readonly date: string, readonly resetDay: Function }) {
  return (
    <div
      className="w-full h-screen absolute top-0"
    >
      <div className="w-4/5 m-auto my-32 drop-shadow-xl relative p-4 z-10 bg-gray-100 border border-gray-400 rounded-lg">
        Date { date } tasks:
        <CategorizedTasksLists taskByDay={date} />
        <button
          className="absolute top-4 right-4"
          onClick={() => resetDay()}
        >
          <XMarkIcon className="w-6 hover:scale-125 transition-all text-red-800"/>
        </button>
      </div>
    </div>
  )
}
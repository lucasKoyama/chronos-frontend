import { DateNames } from "@/app/lib/utils/DateNames"
import CategorizedTasksLists from "@/app/ui/tasks/CategorizedTasksLists";

export default function Page() {
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
        <CategorizedTasksLists />
      </section>
    </section>
  )
}
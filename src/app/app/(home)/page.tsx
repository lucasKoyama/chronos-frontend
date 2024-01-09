'use client';
import CategorizedTasksLists from "@/app/ui/tasks/CategorizedTasksLists";
import { useEffect, useState } from "react";

export default function Page() {
  const [today, setToday] = useState({ weekDay: "", month: "", day: "", date: ""});
  useEffect(() => {
    const today = new Date();
    const [weekDay, month, day] = today.toDateString().split(" ");
    const [date] = today.toISOString().split("T");
    setToday({weekDay, month, day, date});
  }, []);

  return (
    <section>
      <header className="pb-5 border-b-2 border-gray-200">
        <h2 className="text-5xl font-extrabold text-blue-950 drop-shadow-2xl">Today&apos;s tasks</h2>
        <section className="flex items-end mt-2.5 mb-1.5">
          <h2 className="text-4xl font-extrabold text-blue-950 drop-shadow-2xl mr-2.5">
            {today.weekDay}
          </h2>
          <h3 className="text-2xl font-bold text-gray-500 drop-shadow-2xl">
            {today.day} {today.month}
          </h3>
        </section>
      </header>
      <section>
        <CategorizedTasksLists taskByDay={today.date}/>
      </section>
    </section>
  )
}
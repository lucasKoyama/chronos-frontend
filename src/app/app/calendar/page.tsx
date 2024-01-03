'use client';
import Calendar from "@/app/ui/calendar/Calendar";

export default function Page() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  return (
    <section>
      <h3 className="text-4xl font-extrabold text-blue-950 drop-shadow-2xl">Calendar</h3>
      <Calendar year={year} month={month} />
    </section>
  )
}
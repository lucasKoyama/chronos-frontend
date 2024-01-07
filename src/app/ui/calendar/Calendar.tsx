import { useTasks } from '@/app/lib/utils/context/TasksContext';
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import TasksOfDay from './TasksOfDay';

interface CalendarProps {
  year: number;
  month: number;
}

export default function Calendar({ year, month }: CalendarProps) {
  const [days, setDays] = useState<number[]>([]);
  const [tasksOfDay, setTasksOfDay] = useState<string>('');
  useEffect(() => {
    const getDaysInMonth = (year: number, month: number): number => {
      return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);

    const lastMonthDays = getDaysInMonth(year, month - 1);
    const nextMonthDays = 42 - (daysInMonth + firstDayOfMonth);

    const calendarDays = Array.from({ length: firstDayOfMonth }, (_, index) => lastMonthDays - firstDayOfMonth + index + 1)
      .concat(Array.from({ length: daysInMonth }, (_, index) => index + 1))
      .concat(Array.from({ length: nextMonthDays }, (_, index) => index + 1));

    setDays(calendarDays);
  }, [year, month]);
  
  const today = new Date().getDate();
  const monthNum = month + 1 < 10 ? '0'+(month+1) : month+1;
  const calendar = days.map((day, index) => {
    const daysFromOtherMonth = index <= 7 && day >= 14 || index >= 28 && day <= 14;
    const dayDate = `${year}-${monthNum}-${day < 10 ? '0'+day : day}`;
    console.log(dayDate)
    return (
      <button
        key={index}
        className={clsx(
          "day relative border p-2 h-14 md:h-28",
          {
            "bg-gray-100": daysFromOtherMonth,
            "rounded-bl-xl": index === 35,
            "rounded-br-xl": index === 41
          },
        )}
        onClick={() => setTasksOfDay(dayDate)}
      >
        <span
          className={clsx(
            "text-sm absolute top-3 left-3",
            {
              "text-gray-400": daysFromOtherMonth,
              "p-1 px-2.5 rounded-full bg-blue-950 text-white": today === day && !daysFromOtherMonth,
            }
          )}
        >
          {day}
        </span>
      </button>
    )
  });

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  return (
    <section className="my-2 relative">
      <section className={ clsx("transition-all", { "blur-sm": tasksOfDay }) }>
        <header className="p-4 px-10 bg-gray-100 border rounded-t-xl">
          <h4 className="font-bold text-gray-700">{months[month]} {year}</h4>
        </header>
        <div className="grid grid-cols-7">
          {
            daysOfWeek.map((weekDay) => (
              <div className="text-center py-2 bg-gray-50 border" key={weekDay}>
                <p className="drop-shadow font-medium text-gray-700">{weekDay}</p>
              </div>
            ))
          }
        </div>
        <div className="grid grid-cols-7 grid-rows-6">
          { calendar }
        </div>
      </section>
      <section>
        {
          tasksOfDay
            && <TasksOfDay date={tasksOfDay} resetDay={() => setTasksOfDay('')} /> }
      </section>
    </section>
  );
};

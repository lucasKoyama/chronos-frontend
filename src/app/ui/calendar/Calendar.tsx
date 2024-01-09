import { useTasks } from '@/app/lib/utils/context/TasksContext';
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import TasksOfDay from './TasksOfDay';
import { TaskFromApi } from '@/app/lib/types/task';

interface CalendarProps {
  year: number;
  month: number;
}

export default function Calendar({ year, month }: CalendarProps) {
  const [days, setDays] = useState<string[]>([]);
  const [tasksOfDay, setTasksOfDay] = useState<string>('');

  const twoDigit = (month: number) => month + 1 < 10 ? '0'+(month+1) : month+1;
  const currentYearMonth = `${year}-${twoDigit(month)}`;
  
  useEffect(() => {
    const getLastDayOfMonth = (year: number, month: number): number => {
      return new Date(year, month + 1, 0).getDate();
    };

    const daysInMonth = getLastDayOfMonth(year, month);
    const monthDays = Array.from({ length: daysInMonth }, (_, day) => {
      return `${currentYearMonth}-${twoDigit(day)}`;
    });

    const firstDayOfMonthWeekNum = new Date(year, month, 1).getDay();
    const lastDayOfLastMonth = getLastDayOfMonth(year, month - 1);
    const lastMonthFinalDays = Array.from({ length: firstDayOfMonthWeekNum }, (_, index) => {
      return `${year}-${twoDigit(month - 1 < 0 ? 11 : month - 1)}-${lastDayOfLastMonth - index}`;
    });
    
    const leftTo42Days = 42 - monthDays.length - lastMonthFinalDays.length;
    const nextMonthInitialDays = Array.from({ length: leftTo42Days }, (_, day) => {
      return `${year}-${twoDigit(month == 11 ? 0 : month + 1)}-${twoDigit(day)}`;
    });

    const calendarDays = [...lastMonthFinalDays, ...monthDays, ...nextMonthInitialDays];
    setDays(calendarDays);
  }, [year, month, currentYearMonth]);
  
  const { tasks } = useTasks();
  useEffect(() => {}, [tasks]);
  let daysTasks: Record<string, string[]> = {};
  if (tasks) {
    daysTasks = tasks.reduce((daysTasks, task) => {
      const [taskDay] = String(task.scheduled).split("T");
      if (daysTasks[taskDay]) {
        daysTasks[taskDay].push(task.title);
      } else {
        daysTasks[taskDay] = [task.title];
      }
      return daysTasks;
    }, daysTasks);
  }
  const [today] = new Date().toISOString().split("T");
  const calendar = days.map((day, index) => {
    const daysFromOtherMonth = !day.includes(currentYearMonth);
    return (
      <button
        key={index}
        className={clsx(
          "day relative border p-1 text-start h-14 md:h-28 overflow-hidden",
          {
            "bg-gray-100": daysFromOtherMonth,
            "rounded-bl-xl": index === 35,
            "rounded-br-xl": index === 41
          },
        )}
        onClick={() => setTasksOfDay(day)}
      >
        <span
          className={clsx(
            "text-sm font-semibold absolute top-1.5 left-1.5 md:top-2.5 md:left-2.5",
            {
              "text-gray-400": daysFromOtherMonth,
              "z-10 p-2 rounded-full bg-blue-950 text-white": day === today,
            }
          )}
        >
          {day.slice(-2)}
        </span>
        {
          daysTasks[day] && (
            <span className="text-xs font-semibold absolute bottom-1 right-1 py-0.5 px-1 border border-gray-300 rounded-sm bg-gray-100 z-10">
              { daysTasks[day].length }
            </span>
          )
        }
        <div className="mt-6 overflow-hidden">
          {
            daysTasks[day] && daysTasks[day].map((title) => (
              <p key={ title } className="text-sm text-nowrap whitespace-nowrap overflow-x-hidden text-ellipsis border-l-4 border-blue-950 mt-1 pl-0.5">
                { title }
              </p>
            ))
          }
        </div>
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

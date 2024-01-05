'use client'
import React from "react";
import Task from "./Task";
import { task } from "@/app/lib/types/task";

export default function TasksList(
  { tasks, withPriorityBadge }:
  { readonly tasks: task[] | undefined, readonly withPriorityBadge?: boolean })
  {
  return (
    <ul className="mt-2.5 border-b-2 border-gray-200 pl-1.5 ml-1.5 border-l-2">
      {
        tasks?.map((task) => (
          <Task
            key={task.taskId}
            task={task}
            withPriorityBadge={withPriorityBadge}
          />
        ))
      }
    </ul>
  );
}
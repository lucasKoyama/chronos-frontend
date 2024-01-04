'use client'
import React from "react";
import Task from "./Task";
import { task } from "@/app/lib/types/task";

export default function TasksList({ tasks }: { tasks: task[] | undefined }) {
  return (
    <ul className="mt-2.5 border-b-2 border-gray-200 pl-1.5 ml-1.5 border-l-2">
      {
        tasks?.map((task) => (
          <Task
            key={task.taskId}
            task={task}
          />
        ))
      }
    </ul>
  );
}
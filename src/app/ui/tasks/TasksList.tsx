'use client'
import React from "react";
import Task from "./Task";
import { task } from "@/app/lib/types/task";

export default function TasksList({ tasks }: { tasks: task[] }) {
  return (
    <ul className="mt-2.5 border-b-2 border-gray-200">
      {
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
          />
        ))
      }
    </ul>
  );
}
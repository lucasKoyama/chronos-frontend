import { task } from "@/app/lib/types/task";
import { useState } from "react";
import PriorityLabel from "./PriorityLabel";
import TaskOptions from "./TaskOptions";
import { updateTask } from "@/app/lib/utils/api/patch";

export default function Task({ task }: { readonly task: task }) {
  const [hideDescription, setHideDescription] = useState(true);
  const { title, description, scheduled, urgency, importance, taskId } = task;

  const maxCharactersToShow = 80;
  const isDescriptionBig = description.length > maxCharactersToShow;

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(scheduled);

  const handleCheck = async (checked: boolean) => {
    await updateTask({ taskId: task.taskId, finished: checked });
  };

  return (
    <li className="flex flex-col my-4 w-full relative">
      <div className="w-full flex items-center relative">
        <input
          type="checkbox"
          defaultChecked={task.finished}
          onChange={(event) => handleCheck(event.target.checked)}
          className="mr-1.5 min-w-8 min-h-8 rounded-3xl"
        />
        <h4 className="text-xl font-bold text-blue-950">{title}</h4>
        <div className="flex items-center absolute right-0">
          <PriorityLabel urgency={urgency} importance={importance} />
          <TaskOptions taskId={taskId} />
        </div>
      </div>
      <p className="block text-justify">
          <span className="text-gray-500 font-semibold">
            {formattedTime}
          </span>
          <span className="text-gray-500">
            &nbsp;•&nbsp;
            {
              isDescriptionBig && hideDescription
                ? description.slice(0, maxCharactersToShow)
                : description
            }
            {
              isDescriptionBig && hideDescription ? (
                <button
                  className="text-blue-600"
                  onClick={() => setHideDescription(false)}
                >
                  &nbsp;...ver mais
                </button>
              ) : (
                <button
                  className="text-gray-400 font-semibold"
                  onClick={() => setHideDescription(true)}
                >
                  &nbsp;(ver menos)
                </button>
              )
            }
          </span>
        </p>
    </li>
  )
}
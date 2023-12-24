import { task } from "@/app/lib/types/task";
import { useState } from "react";
import PriorityLabel from "./PriorityLabel";

export default function Task({ task }: { task: task }) {
  const [hideDescription, setHideDescription] = useState(true);
  const { title, description, scheduled, urgency, importance } = task;

  const maxCharactersToShow = 80;
  const isDescriptionBig = description.length > maxCharactersToShow;

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(scheduled);

  return (
    <li className="flex my-2.5 w-full relative">
      <input
        type="checkbox"
        className="mr-1.5 mt-1.5 min-w-10 min-h-10"
      />
      <div>
        <h4 className="text-xl font-bold text-blue-950">{title}</h4>
        <p className="text-justify">
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
      </div>
      <PriorityLabel urgency={urgency} importance={importance} />
    </li>
  )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";
import { useDebouncedCallback } from "use-debounce";
import clsx from "clsx";

export default function TaskOptions({ taskId }: { readonly taskId: string }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = useDebouncedCallback((bool) => setShowOptions(bool), 150);

  return (
    <button
      onClick={() => toggleOptions(!showOptions)}
      onMouseLeave={() => toggleOptions(false)}
      className={
        clsx(
          "p-4 px-3.5 h-6 flex items-center border border-solid border-gray-400/50 rounded transition-all",
          { "pl-20": showOptions }
        )
      }
    >
      <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-800"/>
      <nav
        className={
          clsx(
            "absolute top-0 flex items-center mt-1 transition-all text-gray-800",{
              "right-5 block": showOptions, 
              "right-0 hidden": !showOptions
            }
          )
        }
      >
        <DeleteTask taskId={taskId} />
        <UpdateTask taskId={taskId} />
      </nav>
    </button>
  )
};
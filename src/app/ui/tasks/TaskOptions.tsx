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
      onMouseEnter={() => toggleOptions(true)}
      onMouseLeave={() => toggleOptions(false)}
      className={
        clsx(
          "px-2 h-6 flex items-center border border-solid border-gray-300 rounded bg-gray-100 transition-all",
          { "pl-16": showOptions }
        )
      }
    >
      <FontAwesomeIcon icon={faEllipsisVertical}/>
      <nav
        className={
          clsx(
            "absolute top-0 flex transition-all",{
              "right-5 opacity-1": showOptions, 
              "right-0 opacity-0": !showOptions
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
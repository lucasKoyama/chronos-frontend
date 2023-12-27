import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";
import { useDebouncedCallback } from "use-debounce";

export default function TaskOptions({ taskId }: { readonly taskId: string }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = useDebouncedCallback((bool) => setShowOptions(bool), 150);

  return (
    <button
      className={`${showOptions && 'pl-16'} px-2 h-6 flex items-center border border-solid border-gray-300 rounded bg-gray-100 transition-all`}
      onMouseEnter={() => toggleOptions(true)}
      onMouseLeave={() => toggleOptions(false)}
    >
      <FontAwesomeIcon icon={faEllipsisVertical}/>
      <nav className={`opacity-${ showOptions ? '1 right-5' : '0 right-0'} absolute top-0 flex transition-all`}>
        <DeleteTask taskId={taskId}/>
        <UpdateTask />
      </nav>
    </button>
  )
};
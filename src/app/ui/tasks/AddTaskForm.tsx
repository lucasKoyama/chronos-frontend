'use client';
import { TaskPayload } from "@/app/lib/types/task";
import { postTask } from "@/app/lib/utils/api/post";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Label from "../forms/label";
import { useRef, useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function AddTaskForm() {
  const [taskPayload, setTaskPayload] = useState<Partial<TaskPayload>>({
    userId: 'cc8fcf59-4708-4ffa-b944-ede6c7816e51',
    finished: false,
  });
  const [savingTask, setSavingTask] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);
  const inputTitleRef = useRef<HTMLInputElement>(null);
    
  const resetTasksForm = () => {
    formRef.current?.reset();
    
    setTaskPayload({
      userId: 'cc8fcf59-4708-4ffa-b944-ede6c7816e51',
      finished: false,
    });

    inputTitleRef.current?.focus();

    setSavingTask(false);
  }

  const addTask = async (event: React.FormEvent) => {
    event.preventDefault();
    setSavingTask(true);
    await postTask(taskPayload as TaskPayload); // this "as" might be danger, week type
    
    resetTasksForm();
  };

  const handleFormChange = useDebouncedCallback(
    ({ value, id }: { value: string, id: string}) => {
      setTaskPayload({ ...taskPayload, [id]: value });
    }, 200);

  const labelStyle = "block mt-2.5 mb-1.5 text-sm font-extrabold text-blue-950 drop-shadow-md";
    
  return (
    <form
      ref={formRef}
      onSubmit={(event) => addTask(event)}
      className="lg:w-full w-80 m-auto"
    >
      <h2 className="text-4xl font-extrabold text-blue-950 drop-shadow-2xl">Adding Task</h2>

      <Label title="Title" styles={labelStyle} />
      <input
        type="text"
        id="title"
        className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400"
        placeholder="Task title"
        required
        onChange={(input) => handleFormChange(input.target)}
        ref={inputTitleRef}
      />
      
      <Label title="Description" styles={labelStyle} />
      <textarea
        rows={3}
        id="description"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400"
        placeholder="Write your description here..."
        required
        onChange={(input) => handleFormChange(input.target)}
      />

      <Label title="Schedule" styles={labelStyle} />
      <input
        type="datetime-local"
        id="scheduled"
        className="lg:w-full w-80 h-10 flex items-center bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 border-gray-600 placeholder-gray-400"
        placeholder="Select date"
        min="2023-12-01T00:00"
        max="2025-12-01T00:00"
        required
        onChange={(input) => handleFormChange(input.target)}
      />

      <div className="w-full flex mb-1.5">
        <div className="grow mr-2">
          <Label title="Tag" styles={labelStyle} />
          <select
            id="tag"
            className="w-full h-10 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 border-gray-600 placeholder-gray-400"
            required
            onChange={(input) => handleFormChange(input.target)}
          >
            <option defaultValue={"Generic"}>Choose a tag</option>
            <option value="Home">Casa</option>
            <option value="Work">Trabalho</option>
          </select>
        </div>

        <div className="mr-2">
          <Label title="Importance" styles={labelStyle} />
          <input
            type="number"
            id="importance"
            aria-describedby="helper-text-explanation"
            className="w-full h-10 text-center bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 border-gray-600 placeholder-gray-400"
            placeholder="7"
            min={1}
            max={10}
            required
            onChange={(input) => handleFormChange(input.target)}
          />
        </div>

        <div>
          <Label title="Urgency" styles={labelStyle} />
          <input
            type="number"
            id="urgency"
            aria-describedby="helper-text-explanation"
            className="w-full h-10 text-center bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 border-gray-600 placeholder-gray-400"
            placeholder="3"
            min={1}
            max={10}
            required
            onChange={(input) => handleFormChange(input.target)}
          />
        </div>
      </div>
    <button
      type="submit"
      className="w-full mt-2.5 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center me-2 bg-blue-900 hover:bg-blue-800"
      disabled={ savingTask }
    >
      {
        savingTask ? (
          <>
            <FontAwesomeIcon className="animate-spin text-2xl mr-2" icon={faArrowRotateRight} />
            <span>Saving Task</span>
          </>
        ) : (
          <>
            <PlusCircleIcon className="w-6 mr-2"/>
            <span>Add Task</span>
          </>
        )
      }
    </button>
    </form>
  )
}
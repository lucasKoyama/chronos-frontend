'use client';
import { TaskFromApi } from "@/app/lib/types/task";
import Label from "../forms/label";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter } from "next/navigation";
import { fetchTaskById } from "@/app/lib/utils/api/fetch";
import { PencilIcon } from "@heroicons/react/24/outline";
import { updateTask } from "@/app/lib/utils/api/patch";
import { useAuth } from "@/app/lib/utils/context/AuthContext";

export default function EditTaskForm() {
  const { user } = useAuth();
  const [editingTask, setEditingTask] = useState<TaskFromApi | undefined>(undefined);
  const taskId = usePathname().split('edit/')[1];

  useEffect(() => {
    const fetchTask = async (taskId: string) => {
      try {
        setEditingTask(await fetchTaskById(taskId));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTask(taskId);
  }, [taskId]);
  
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const editTask = async (event: React.FormEvent) => {
    event.preventDefault();

    if (editingTask) await updateTask(editingTask);

    router.push('/app');
  };

  const handleFormChange = useDebouncedCallback(
    ({ value, id }: { value: string, id: string}) => {
      if (editingTask) setEditingTask({ ...editingTask, [id]: value });
    }, 200);

  const labelStyle = "block mt-2.5 mb-1.5 text-sm font-extrabold text-blue-950 drop-shadow-md";
    
  return (
    <form
      ref={formRef}
      onSubmit={(event) => editTask(event)}
      className="lg:w-full w-80 m-auto"
    >
      <h2 className="text-4xl font-extrabold text-blue-950 drop-shadow-2xl">Editing Task</h2>

      <Label title="Title" styles={labelStyle} />
      <input
        type="text"
        id="title"
        className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-gray-600 placeholder-gray-400"
        placeholder="Task title"
        required
        defaultValue={editingTask?.title}
        onChange={(input) => handleFormChange(input.target)}
      />
      
      <Label title="Description" styles={labelStyle} />
      <textarea
        rows={3}
        id="description"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400"
        placeholder="Write your description here..."
        required
        defaultValue={editingTask?.description}
        onChange={(input) => handleFormChange(input.target)}
      />

      <Label title="Schedule" styles={labelStyle} />
      <input
        type="datetime-local"
        id="scheduled"
        className="lg:w-full w-80 h-10 flex items-center bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 border-gray-600 placeholder-gray-400"
        placeholder="Select date"
        min="2023-12-01T00:00:00"
        max="2025-12-01T00:00:00"
        required
        defaultValue={editingTask?.scheduled && String(editingTask.scheduled).slice(0, -5)}
        onChange={(input) => handleFormChange(input.target)}
      />

      <div className="w-full flex mb-1.5">
        <div className="grow mr-2">
          <Label title="Tag" styles={labelStyle} />
          <select
            id="tag"
            className="w-full h-10 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 border-gray-600 placeholder-gray-400"
            required
            defaultValue={editingTask?.tag}
            onChange={(input) => handleFormChange(input.target)}
          >
            {
              user?.tags.map((tag) => {
                if (tag === editingTask?.tag) {
                  return <option key={tag} value={tag} defaultValue={tag}>{ tag }</option>
                }
                return <option key={tag} value={tag}>{ tag }</option>
              })
            }
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
            defaultValue={editingTask?.importance}
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
            defaultValue={editingTask?.urgency}
            onChange={(input) => handleFormChange(input.target)}
          />
        </div>
      </div>
    <button
      type="submit"
      className="w-full mt-2.5 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center me-2 bg-blue-900 hover:bg-blue-800"
    >
      <PencilIcon className="w-5 mr-2"/>
      Edit Task
    </button>
    </form>
  )
}
import Label from "@/app/ui/forms/label";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Adding Task" }

export default function Page() {
  const labelStyle = "block mt-2.5 mb-1.5 text-sm font-medium text-gray-900";

  return (
    <section>
      <h2 className="text-4xl font-extrabold text-blue-950 drop-shadow-2xl">Adding Task</h2>
      <form className="lg:w-full w-80 m-auto">
        <Label title="Title" styles={labelStyle} />
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Task title"
          required
        />
        
        <Label title="Description" styles={labelStyle} />
        <textarea
          rows={3}
          id="description"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your description here..."
          required
        />

        <Label title="Schedule" styles={labelStyle} />
        <input
          type="datetime-local"
          id="schedule"
          className="lg:w-full w-80 h-10 flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
          min="2023-12-01T00:00"
          max="2025-12-01T00:00"
          required
        />

        <div className="w-full flex mb-1.5">
          <div className="grow mr-2">
            <Label title="Tag" styles={labelStyle} />
            <select
              id="tag"
              className="w-full h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
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
              className="w-full h-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="7"
              min={1}
              max={10}
              required
            />
          </div>

          <div>
            <Label title="Urgency" styles={labelStyle} />
            <input
              type="number"
              id="urgency"
              aria-describedby="helper-text-explanation"
              className="w-full h-10 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="3"
              min={1}
              max={10}
              required
            />
          </div>
        </div>
        <button type="submit" className="w-full mt-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <PlusCircleIcon className="w-6 mr-2"/>
          Add Task
        </button>
      </form>
    </section>
  )
}
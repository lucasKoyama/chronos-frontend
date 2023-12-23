import Label from "@/app/ui/forms/label";

export default function Page() {
  const labelStyle = "block mt-2.5 mb-2 text-sm font-medium text-gray-900";

  return (
    <section>
      <h2 className="text-4xl font-extrabold">Adding Task</h2>
      <form>
        <Label title="Title" styles={labelStyle} />
        <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task title" required />
        
        <Label title="Description" styles={labelStyle} />
        <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

        <Label title="Schedule" styles={labelStyle} />
        <input
          type="datetime-local"
          id="schedule"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
          min="2023-12-01T00:00"
          max="2025-12-01T00:00"
        />

        <div className="w-full flex">
          <div className="grow mr-2">
            <Label title="Tag" styles={labelStyle} />
            <select id="tag" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a tag</option>
              <option value="US">Mercado</option>
              <option value="US">Trabalho</option>
            </select>
          </div>

          <div className="flex-none mr-2">
            <Label title="Urgency" styles={labelStyle} />
            <input
              type="number"
              id="urgency"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="3"
              min={1}
              max={10}
              required
            />
          </div>

          <div className="flex-none">
            <Label title="Importance" styles={labelStyle} />
            <input
              type="number"
              id="importance"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="7"
              min={1}
              max={10}
              required
            />
          </div>
        </div>

      </form>
    </section>
  )
}
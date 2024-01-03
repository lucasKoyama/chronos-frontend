'use client';
import Label from "../forms/label";

export default function PomodoroSettingsForm({ handleConfigChange }: { handleConfigChange: Function }) {
  const labelStyle = "block mt-2.5 mb-1.5 text-sm text-center font-extrabold text-blue-950 drop-shadow-md";

  return (
    <form>
      <h3 className="text-2xl font-extrabold text-blue-950 drop-shadow-2xl">Pomodoro Settings</h3>
      <div className="flex flex-row flex-wrap gap-4 md:w-auto">
        <div className="flex gap-4 w-full md:w-auto">
          <div className="w-full md:w-1/2">
            <Label title="Focused Time" styles={labelStyle} />
            <input
              type="number"
              id="focused time"
              name="focusInMinutes"
              aria-describedby="time to be focused in minutes"
              className="h-10 w-full md:w-32 text-center bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 border-gray-600 placeholder-gray-400"
              defaultValue={25}
              min={1}
              max={250}
              required
              onChange={(input) => handleConfigChange(input.target)}
            />
          </div>
          <div className="w-full md:w-1/2">
            <Label title="Cycles Focused" styles={labelStyle} />
            <input
              type="number"
              id="cycles focused"
              name="numberOfCycles"
              aria-describedby="time to be focused in minutes"
              className="h-10 w-full md:w-32 text-center bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 border-gray-600 placeholder-gray-400"
              defaultValue={4}
              min={1}
              max={250}
              required
              onChange={(input) => handleConfigChange(input.target)}
            />
          </div>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="w-full md:w-1/2">
            <Label title="Resting Time" styles={labelStyle} />
            <input
              type="number"
              id="resting time"
              name="restInMinutes"
              aria-describedby="time to be focused in minutes"
              className="h-10 w-full md:w-32 text-center bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 border-gray-600 placeholder-gray-400"
              defaultValue={5}
              min={1}
              max={250}
              required
              onChange={(input) => handleConfigChange(input.target)}
            />
          </div>
          <div className="w-full md:w-1/2">
            <Label title="Big Resting Time" styles={labelStyle} />
            <input
              type="number"
              id="big resting time"
              name="bigBreakInMinutes"
              aria-describedby="time to be focused in minutes"
              className="h-10 w-full md:w-32 text-center bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 border-gray-600 placeholder-gray-400"
              defaultValue={15}
              min={1}
              max={250}
              required
              onChange={(input) => handleConfigChange(input.target)}
            />
          </div>
        </div>
      </div>
    </form>
  )
}
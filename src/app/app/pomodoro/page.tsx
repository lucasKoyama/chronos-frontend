'use client';
import { PomodoroConfig } from "@/app/lib/types/pomodoro";
import PomodoroSettingsForm from "@/app/ui/pomodoro/PomodoroSettingsForm";
import PomodoroTimer from "@/app/ui/pomodoro/PomodoroTimer";
import { useState } from "react";

export default function Page() {
  const [config, setConfig] = useState<PomodoroConfig>({
    focusInMinutes: 25,
    restInMinutes: 5,
    bigBreakInMinutes: 15,
    numberOfCycles: 4,
  });

  const handleConfigChange = ({ value, name }: { value: string, name: string}) => {
    setConfig({ ...config, [name]: Number(value) });
  };

  return (
    <section>
      <h3 className="text-4xl font-extrabold text-blue-950 drop-shadow-2xl">Pomodoro</h3>
      <section className="max-w-max m-auto">
        <PomodoroTimer config={config} />
        <PomodoroSettingsForm handleConfigChange={handleConfigChange} />
      </section>
    </section>
  )
}
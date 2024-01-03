'use client';
import { PomodoroConfig } from '@/app/lib/types/pomodoro';
import { ArrowPathRoundedSquareIcon, PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';

export default function PomodoroTimer(
  { config }: { readonly config: PomodoroConfig}
  ) {
  const { focusInMinutes, restInMinutes, bigBreakInMinutes, numberOfCycles } = config;
  const [finishedCycles, setFinishedCycles] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(focusInMinutes * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isResting, setIsResting] = useState<boolean>(false);

  useEffect(() => {
    const setNextPomodoroTimer = () => {
      setIsActive(false);
      clearInterval(pomodoroTimerId);
      const breakTimeEnded = isResting;

      if (breakTimeEnded) {
        setIsResting(false);
        setTimeLeft(focusInMinutes * 60);
      } else {
        setFinishedCycles(finishedCycles + 1);
        setIsResting(true);
        const restTimer = finishedCycles === numberOfCycles - 1 ? bigBreakInMinutes : restInMinutes;
        setTimeLeft(restTimer * 60);
      }
    }

    let pomodoroTimerId: NodeJS.Timeout;

    if (isActive) {
      pomodoroTimerId = setInterval(() => {
        setTimeLeft((prevTimer) => {
          if (prevTimer === 1) setNextPomodoroTimer();
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(pomodoroTimerId);
  },
  [
    isActive,
    isResting,
    focusInMinutes,
    restInMinutes,
    bigBreakInMinutes,
    finishedCycles,
    numberOfCycles,
  ]);

  useEffect(() => setTimeLeft(focusInMinutes * 60), [focusInMinutes]);

  const toggleTimer = (): void => setIsActive(!isActive);

  const resetTimer = (): void => {
    setIsActive(false);
    setIsResting(false);
    setTimeLeft(focusInMinutes * 60);
    setFinishedCycles(0);
  };

  const twoDigitTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <section className="border-b-2 border-gray-200 mb-4">
      <div className='mx-auto my-2 p-3 max-w-max'>
        <p className="text-center text-3xl font-extrabold text-blue-950 drop-shadow-2xl">
          {isResting ? 'Break Time' : 'Focus Time'}
        </p>
        <p className="my-2 text-8xl font-extrabold text-blue-950 drop-shadow-2xl">
          {twoDigitTime(timeLeft)}
        </p>
        <p className="text-center text-3xl font-extrabold text-blue-950 drop-shadow-2xl">
          {finishedCycles} Finished
        </p>
      </div>

      <div className='flex mb-5 m-auto gap-3 justify-center'>
        <button
          className="flex gap-1 px-4 py-3 rounded-lg text-white font-bold bg-blue-950"
          onClick={toggleTimer}
        >
          {
            isActive
              ? (<><PauseCircleIcon className="w-6" />Pause</>)
              : (<><PlayCircleIcon className="w-6"/>Start</>)
          }
        </button>
        <button
          className="flex gap-1 px-4 py-3 rounded-lg text-white font-bold bg-blue-950"
          onClick={resetTimer}
        >
          <ArrowPathRoundedSquareIcon className="w-6"/>
          Reset
        </button>
      </div>
    </section>
  );
};

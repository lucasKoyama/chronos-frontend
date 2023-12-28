'use client';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { TaskFromApi } from '../../types/task';

interface TasksContextType {
  tasks: TaskFromApi[] | null;
  handleTasks: (tasks: TaskFromApi[]) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskFromApi[] | null>(null);

  const handleTasks = (tasks: TaskFromApi[]) => setTasks(tasks);

  const contextValue = useMemo(() => ({ tasks, handleTasks }), [tasks]);

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = (): TasksContextType => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }

  return context;
};
import { Task } from '@/@types'
import { useState } from 'react'
import { TasksContext } from './context'

interface TasksProviderProps {
  children: React.ReactNode
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (title: string) => setTasks((prev) => [...prev, { id: Date.now(), title, done: false }])

  const toggleTaskDone = (id: number) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTaskDone, deleteTask }}>{children}</TasksContext.Provider>
  )
}

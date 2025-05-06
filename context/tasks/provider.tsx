import { Task } from '@/@types'
import { storageGetItem, storageSetItem } from '@/utils'
import { useEffect, useState } from 'react'
import { TasksContext } from './context'

interface TasksProviderProps {
  children: React.ReactNode
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const loadTasks = async () => {
      const storageTasks = await storageGetItem('tasks')
      if (storageTasks) setTasks(storageTasks)
    }
    loadTasks()
  }, [])

  const saveTasks = async (tasks: Task[]) => {
    setTasks(tasks)
    await storageSetItem('tasks', tasks)
  }

  const addTask = async (title: string) => {
    const newTasks = [...tasks, { id: Date.now(), title, done: false }]
    saveTasks(newTasks)
  }

  const toggleTaskDone = async (id: number) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    saveTasks(newTasks)
  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    saveTasks(newTasks)
  }

  const updateTask = (id: number, title: string) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, title } : task))
    saveTasks(newTasks)
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTaskDone, deleteTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  )
}

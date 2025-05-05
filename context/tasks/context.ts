import { Task } from '@/@types'
import { createContext } from 'react'

export const TasksContext = createContext({
  tasks: [] as Task[],
  addTask: (title: string) => {},
  toggleTaskDone: (id: number) => {},
  deleteTask: (id: number) => {},
  updateTask: (id: number, title: string) => {},
})

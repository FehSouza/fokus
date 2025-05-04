import { Task } from '@/@types'
import { createContext } from 'react'

export const TasksContext = createContext({
  tasks: [] as Task[],
  addTask: (title: string) => {},
})

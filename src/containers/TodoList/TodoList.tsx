import { Card, CardHeader, Stack } from '@mui/material'
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { Task } from './types'

export let nextID = 4

export function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Make a HTML template', done: true },
    { id: 2, title: 'Learn React', done: false },
    { id: 3, title: 'Identify components', done: false }
  ])

  const handleAddTask = (title: string) => {
    const newTask = { id: nextID++, title, done: false }
    setTasks((tasks) => [...tasks, newTask])
  }

  const handleToggleTaskStatus = (id: number) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done }
        }

        return task
      })
    )
  }

  const handleDeleteTask = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }

  return (
    <Card sx={{ minWidth: 350 }}>
      <CardHeader title="Todo List" />

      <TaskList
        tasks={tasks}
        onToggleTaskStatus={handleToggleTaskStatus}
        onDeleteTask={handleDeleteTask}
      />

      <Stack sx={{ px: 2, pt: 2 }}>
        <TaskForm onSubmit={handleAddTask} />
      </Stack>
    </Card>
  )
}

export default TodoList

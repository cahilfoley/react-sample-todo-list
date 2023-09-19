import { gql, useMutation, useQuery } from '@apollo/client'
import { Card, CardHeader, Stack } from '@mui/material'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useMemo } from 'react'

const GetTodosDocument = gql`
  query GetTodos {
    todos {
      id
      title
      done
    }
  }
`

const AddTodosDocument = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
      done
    }
  }
`

const DeleteTodoDocument = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
      title
    }
  }
`

export function TodoList() {
  const todosQuery = useQuery(GetTodosDocument)
  const [addTodo, addTodoStatus] = useMutation(AddTodosDocument)
  const [deleteTodo, deleteTodoStatus] = useMutation(DeleteTodoDocument)

  const handleAddTask = (title: string) => {
    addTodo({ variables: { title }, refetchQueries: [GetTodosDocument] })
  }

  const handleToggleTaskStatus = (id: number) => {
    // Do it :)
  }

  const handleDeleteTask = (id: number) => {
    deleteTodo({ variables: { id }, refetchQueries: [GetTodosDocument] })
  }

  const tasks = useMemo(
    () => todosQuery.data?.todos ?? [],
    [todosQuery.data?.todos]
  )

  return (
    <Card sx={{ minWidth: 350 }}>
      <CardHeader title="Todo List" />

      {todosQuery.loading ? (
        'Loading'
      ) : (
        <TaskList
          tasks={tasks}
          onToggleTaskStatus={handleToggleTaskStatus}
          onDeleteTask={handleDeleteTask}
        />
      )}

      <Stack sx={{ px: 2, pt: 2 }}>
        <TaskForm onSubmit={handleAddTask} />
      </Stack>
    </Card>
  )
}

export default TodoList

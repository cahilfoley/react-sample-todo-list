import { List } from '@mui/material'
import { TaskListItem } from './TaskListItem'
import { Task } from '../types'

export interface TaskListProps {
  tasks: Task[]
  onToggleTaskStatus: (id: number) => void
  onDeleteTask: (id: number) => void
}

export function TaskList(props: TaskListProps) {
  const { onDeleteTask, onToggleTaskStatus, tasks } = props

  return (
    <List dense>
      {tasks.map((task, index) => {
        return (
          <TaskListItem
            key={task.id}
            task={task}
            onToggleStatus={() => onToggleTaskStatus(task.id)}
            onDelete={() => onDeleteTask(task.id)}
            divider={index < props.tasks.length - 1}
          />
        )
      })}
    </List>
  )
}

export default TaskList

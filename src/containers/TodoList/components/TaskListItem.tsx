import { Check, Delete, Undo } from '@mui/icons-material'
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@mui/material'
import { Task } from '../types'

export interface TaskListItemProps {
  task: Task
  divider?: boolean
  onToggleStatus: () => void
  onDelete: () => void
}

export function TaskListItem(props: TaskListItemProps) {
  const { task, divider, onToggleStatus, onDelete } = props

  return (
    <ListItem divider={divider}>
      <ListItemText
        primary={task.title}
        primaryTypographyProps={{
          sx: {
            color: task.done ? 'text.disabled' : 'text.primary',
            textDecoration: task.done ? 'line-through' : 'none'
          }
        }}
      />
      <ListItemSecondaryAction>
        <IconButton
          color={task.done ? 'info' : 'success'}
          onClick={onToggleStatus}
        >
          {task.done ? <Undo /> : <Check />}
        </IconButton>
        <IconButton color="error" onClick={onDelete}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TaskListItem

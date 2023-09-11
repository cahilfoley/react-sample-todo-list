import React, { useState } from 'react'
import { InputBase } from '@mui/material'

export interface TaskFormProps {
  onSubmit: (title: string) => void
}

export function TaskForm(props: TaskFormProps) {
  const { onSubmit } = props

  const [textBoxValue, setTextBoxValue] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(textBoxValue)
    setTextBoxValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputBase
        size="small"
        type="search"
        placeholder="Add task..."
        value={textBoxValue}
        fullWidth
        onChange={(event) => {
          setTextBoxValue(event.target.value)
        }}
      />
    </form>
  )
}

export default TaskForm

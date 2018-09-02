import React from 'react'
import Task from './Task'

const TaskList = props => (
  <div className={props.tasks.length ? '' : 'todo__empty_task_list'}>
    {props.tasks.map((task, i) => (
      <Task task={task} key={i} remove={() => props.removeTask(i)} />
    ))}
  </div>
)

export default TaskList

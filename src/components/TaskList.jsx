import React from 'react'
import Task from './Task'

const TaskList = props => {
  return (
    <div className={props.tasks.length ? '' : 'todo__empty_task_list'}>
      {props.tasks.map((task, i) => {
        return (
          <Task
            task={task}
            key={i}
            toggle={props.toggleTask(i)}
            remove={props.removeTask(i)}
          />
        )
      })}
    </div>
  )
}

export default TaskList

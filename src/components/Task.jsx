import React from 'react'

const Task = props => (
  <div className={`todo__task ${props.task.done ? 'todo__task_done' : ''}`}>
    <span className="todo__task_text">{props.task.label}</span>
    <span onClick={props.toggle}>
      {props.task.done ? <div>&#8630;</div> : <div>&#10003;</div>}
    </span>
    <span onClick={props.remove}>&#10005;</span>
  </div>
)

export default Task

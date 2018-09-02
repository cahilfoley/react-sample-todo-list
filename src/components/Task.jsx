import React from 'react'

const Task = props => (
  <div className="todo__task">
    {props.task}
    <span onClick={props.remove}>&#10005;</span>
  </div>
)

export default Task

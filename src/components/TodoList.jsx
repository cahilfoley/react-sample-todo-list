import React from 'react'
import TaskList from './TaskList'
import TodoForm from './TodoForm'
import './TodoList.css'

export default class TodoList extends React.Component {
  state = { tasks: ['Learn React', 'Make Todo List', '???', 'Profit'] }

  addTask = task => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  removeTask = index => {
    this.setState({
      tasks: this.state.tasks.filter((task, i) => index !== i)
    })
  }

  render() {
    return (
      <div className="todo__wrapper">
        <h2>Todo List</h2>
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
        <TodoForm addTask={this.addTask} />
      </div>
    )
  }
}

import React from 'react'
import ReactDOM from 'react-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import './styles.css'

class TodoList extends React.Component {
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
        <TaskForm addTask={this.addTask} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<TodoList />, rootElement)

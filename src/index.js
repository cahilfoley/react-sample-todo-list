import React from 'react'
import ReactDOM from 'react-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import './styles.css'

class TodoList extends React.Component {
  state = {
    tasks: [
      {
        label: 'Learn React',
        done: true
      },
      {
        label: 'Make Todo List',
        done: false
      },
      {
        label: '???',
        done: false
      },
      {
        label: 'Profit',
        done: false
      }
    ]
  }

  addTask = label => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          label,
          done: false
        }
      ]
    })
  }

  toggleTask = index => () => {
    this.setState({
      tasks: this.state.tasks.map((task, i) => {
        if (index === i) {
          return { ...task, done: !task.done }
        }

        return task
      })
    })
  }

  removeTask = index => () => {
    this.setState({
      tasks: this.state.tasks.filter((task, i) => index !== i)
    })
  }

  render() {
    return (
      <div className="todo__wrapper">
        <h2>Todo List</h2>
        <TaskList
          tasks={this.state.tasks}
          removeTask={this.removeTask}
          toggleTask={this.toggleTask}
        />
        <TaskForm addTask={this.addTask} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<TodoList />, rootElement)

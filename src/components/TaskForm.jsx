import React from 'react'

class TaskForm extends React.Component {
  state = { input: '' }

  handleChange = event => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = event => {
    // Stop the form from refreshing the page
    event.preventDefault()

    // Don't add a task if it's only whitespace
    if (this.state.input.trim().length) {
      this.props.addTask(this.state.input)
      this.setState({ input: '' })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Add task..."
        />
      </form>
    )
  }
}

export default TaskForm

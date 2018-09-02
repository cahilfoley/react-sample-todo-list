import React from 'react'

class TodoForm extends React.Component {
  state = { input: '' }

  handleChange = event => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTask(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Add task..."
        />
      </form>
    )
  }
}

export default TodoForm

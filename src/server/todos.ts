import express from 'express'

export const todoRouter = express.Router()

const todos = [
  { id: 1, title: 'Learn React', done: false },
  { id: 2, title: 'Learn Node', done: false },
  { id: 3, title: 'Learn Express', done: false },
]

interface Todo {
  id: number
  title: string
  done: boolean
}

let nextID = 4

function createTodo(title: string): Todo {
  const newTodo = { id: nextID++, title: title, done: false }
  todos.push(newTodo)
  return newTodo
}

function deleteTodoByID(id: number): Todo | undefined {
  const index = todos.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    const removed = todos.splice(index, 1)
    return removed[0]
  }
}

function updateTodoByID(id: number, updates: Partial<Todo>) {
  const index = todos.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updates }
    return todos[index]
  }
}

todoRouter.get('/', (req, res) => {
  res.json(todos)
})

// /api/todos/2
todoRouter.get('/:id', (req, res) => {
  const todo = todos.find((todo) => todo.id === Number(req.params.id))
  if (todo) {
    res.json(todo)
  } else {
    res.status(404).json({ message: 'Todo not found' })
  }
})

todoRouter.post('/', (req, res) => {
  const newTodo = createTodo(req.body.title)
  res.status(201).json(newTodo)
})

todoRouter.post('/:id', (req, res) => {
  const newTodo = updateTodoByID(Number(req.params.id), req.body)
  res.status(201).json(newTodo)
})

todoRouter.delete('/:id', (req, res) => {
  const removed = deleteTodoByID(Number(req.params.id))
  if (removed) {
    res.json(removed)
  } else {
    res.status(404).json({ message: 'Todo not found' })
  }
})

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Todo {
    id: Int!
    title: String!
    done: Boolean!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    todos: [Todo!]!
    todoByID(id: Int!): Todo
  }

  type Mutation {
    addTodo(title: String!): Todo!
    deleteTodo(id: Int!): Todo
    updateTodo(id: Int!, title: String, done: Boolean): Todo
  }
`

export const resolvers = {
  Query: {
    todos: () => todos,
    todoByID: (root: any, args: { id: number }) => {
      return todos.find((todo) => todo.id === args.id)
    },
  },
  Mutation: {
    addTodo: (root: any, args: { title: string }) => {
      return createTodo(args.title)
    },
    deleteTodo: (root: any, args: { id: number }) => {
      return deleteTodoByID(args.id)
    },
    updateTodo: (root: any, { id, ...updates }: { id: number; title?: string; done?: boolean }) => {
      return updateTodoByID(id, updates)
    },
  },
}

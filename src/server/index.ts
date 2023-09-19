import express from 'express'
import bodyParser from 'body-parser'
import { typeDefs, resolvers, todoRouter } from './todos'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'

async function main() {
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  })

  await apolloServer.start()

  const app = express()
  app.use(bodyParser.json())

  app.use('/api/graphql', expressMiddleware(apolloServer))

  app.use('/api/todos', todoRouter)

  app.get('/api/*', (req, res) => {
    res.status(404).json({ message: 'Not Found' })
  })

  app.listen(5000, () => console.log('Server listening on port 5000'))
}

main()

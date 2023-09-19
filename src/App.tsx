import { CssBaseline, Stack, ThemeProvider, createTheme } from '@mui/material'
import TodoList from './containers/TodoList'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache()
})

const theme = createTheme({ palette: { mode: 'dark' } })

export function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Stack minHeight="100vh" alignItems="center" justifyContent="center">
          <TodoList />
        </Stack>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App

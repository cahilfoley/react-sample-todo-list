import { CssBaseline, Stack, ThemeProvider, createTheme } from '@mui/material'
import TodoList from './containers/TodoList'

const theme = createTheme({ palette: { mode: 'dark' } })

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Stack minHeight="100vh" alignItems="center" justifyContent="center">
        <TodoList />
      </Stack>
    </ThemeProvider>
  )
}

export default App

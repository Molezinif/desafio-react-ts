import React from 'react'
import { GlobalProvider } from './context'
import { Container } from './components/users/styles'
import { Users } from './components/users'

function App() {
  return (
    <Container>
      <GlobalProvider>
        <Users />
      </GlobalProvider>
    </Container>
  )
}

export default App

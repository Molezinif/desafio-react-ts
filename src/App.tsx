import React from 'react'
import { Users } from './components'
import { GlobalProvider } from './context'
import { Container } from './components/users/styles'

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

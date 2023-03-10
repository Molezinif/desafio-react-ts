import { cleanup, render, screen } from '@testing-library/react'
import { Users } from '../components'
import { GlobalContext } from '../context'
import { usersMock } from '../mocks/userMock'
import { mockProvider } from '../mocks/mockProvider'

afterEach(cleanup)

test('When loading is true expect to have loading component on screen', () => {
  const mock = {
    ...mockProvider,
    isLoading: true,
  }
  render(
    <GlobalContext.Provider value={mock}>
      <Users />
    </GlobalContext.Provider>
  )

  const loading = screen.getByTestId('loading-container')

  expect(loading).toBeInTheDocument()
})

test('When Users is set, expect to display users list', () => {
  const mock = {
    ...mockProvider,
    users: usersMock,
  }
  render(
    <GlobalContext.Provider value={mock}>
      <Users />
    </GlobalContext.Provider>
  )

  const usersContainer = screen.getByTestId('users-container')

  expect(usersContainer).toBeInTheDocument()
})

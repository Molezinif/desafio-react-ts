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

test('when user is adding a new user, expect to have a modal with form', () => {
  const mock = {
    ...mockProvider,
    users: usersMock,
    modalIsOpen: true,
  }
  render(
    <GlobalContext.Provider value={mock}>
      <Users />
    </GlobalContext.Provider>
  )
  //const buttonAdd = screen.getByTestId('add-user-button')
  //fireEvent.click(buttonAdd, new MouseEvent('click', { bubbles: true }))

  const modal = screen.getByTestId('modal')
  const form = screen.getByTestId('form')

  expect(modal).toBeInTheDocument()
  expect(form).toBeInTheDocument()
})

test('when user is editing, expect to have a modal with form', () => {
  const mock = {
    ...mockProvider,
    users: usersMock,
    isEditing: true,
    modalIsOpen: true,
    userEdit: usersMock[0],
  }
  render(
    <GlobalContext.Provider value={mock}>
      <Users />
    </GlobalContext.Provider>
  )

  const modal = screen.getByTestId('modal')
  const form = screen.getByTestId('form')

  expect(modal).toBeInTheDocument()
  expect(form).toBeInTheDocument()
})

/* test('whe user is excluded, expect to not have this user on screen', () => {
  const mock = {
    ...mockProvider,
    users: usersMock,
  }
  render(
    <GlobalContext.Provider value={mock}>
      <Users />
    </GlobalContext.Provider>
  )

  const user = screen.getByTestId('user-1')
  const button = screen.getByTestId('button-1')

  expect(user).toBeInTheDocument()

  button.click()

  expect(user).not.toBeInTheDocument()
}) */

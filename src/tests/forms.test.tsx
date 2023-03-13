import { cleanup, render, screen } from '@testing-library/react'
import { Users } from '../components'
import { GlobalContext } from '../context'
import { usersMock } from '../mocks/userMock'
import { mockProvider } from '../mocks/mockProvider'

afterEach(cleanup)

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

test('when user is editing, expect to have a modal with an edit form ', () => {
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
  const deleteButton = screen.getByTestId('delete-button')

  expect(modal).toBeInTheDocument()
  expect(form).toBeInTheDocument()
  expect(deleteButton).toBeInTheDocument()
})

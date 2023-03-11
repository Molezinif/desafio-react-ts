import { cleanup, fireEvent, render } from '@testing-library/react'
import { Button } from '../components/users/styles'

afterEach(cleanup)

describe('Button', () => {
  it('should call onClick when clicked', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(
      <Button onClick={handleClick}>Buscar Usuários</Button>
    )
    const button = getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})

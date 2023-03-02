import { render, screen } from '@testing-library/react'
import App from '../App'

test('Find Text element', () => {
  render(<App />)
  const text = screen.getByText(/Nenhum usuário encontrado/i)
  expect(text).toBeInTheDocument()
})

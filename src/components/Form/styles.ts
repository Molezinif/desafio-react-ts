import styled from 'styled-components'
import { InputProps } from '../../interfaces'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 50px;
  border-radius: 5px;
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`

export const StyledInput = styled.input<InputProps>`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: ${({ hasError }) => (hasError ? '5px' : '20px')};
  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.25);
  }
`

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const ButtonSubmit = styled.button`
  background-color: #1d7cfb;
  color: white;
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1456af;
  }
`

export const ButtonDelete = styled.button`
  background-color: #f73442;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d12c38;
  }
`
export const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 10px;
  font-size: 0.8rem;
`

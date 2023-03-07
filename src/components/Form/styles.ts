import styled from 'styled-components'

export const StyledForm = styled.form`
  background-color: white;
  padding: 50px;
  border-radius: 5px;
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`

export const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`

export const ButtonSubmit = styled.button`
  background-color: #1d7cfb;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1456af;
  }
`

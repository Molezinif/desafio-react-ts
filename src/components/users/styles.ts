import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5em;
`

export const Title = styled.div`
  font-weight: bold;
  font-size 1.5em;
  margin-bottom: 0.5em;
`

export const Button = styled.button`
  background: #1d7cfb;
  border-radius: 4px;
  border: 2px solid #1d7cfb;
  color: white;
  margin: 0 1em;
  padding: 0.7em 4em;
  overflow: hidden;
  font-weight: 400;
  &:hover,
  &:focus {
    background: #1456af;
    border: 2px solid #1456af;
  }
`

export const LoadingContainer = styled.div`
  display: grid;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

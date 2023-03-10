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
  &:hover {
    background: #1456af;
    border: 2px solid #1456af;
  }
`

export const ButtonOptions = styled.button`
  background: #48b4e0;
  border-radius: 4px;
  border: 2px solid #48b4e0;
  color: white;
  padding: 0.5em 0.7em;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background: #229aca;
    border: 2px solid #229aca;
  }
`

export const LoadingContainer = styled.div`
  display: grid;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const UserCardContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 16px;
  margin: 16px;
  justify-content: space-between;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 12px;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 551px) and (max-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 800px;
  }
`
export const AddCardContainer = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  font-color: #1d7cfb;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 16px;
  margin-bottom: 0px;
  justify-content: space-between;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 12px;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 551px) and (max-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 800px;
  }
`
export const UserCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  flex-basis: 50%;

  @media (min-width: 551px) and (max-width: 1023px) {
    margin-bottom: 0;
    margin-right: 16px;
    flex-basis: calc(50% - 8px);
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-right: 16px;
    flex-basis: 50%;
  }
`

export const UserCardRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;

  @media (min-width: 551px) and (max-width: 1023px) {
    flex-basis: calc(50% - 8px);
  }

  @media (min-width: 1024px) {
    flex-basis: 50%;
  }
`

export const UserCardText = styled.p`
  margin: 0 0 10px;
`
export const Options = styled.div`
  z-index: 1;
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`

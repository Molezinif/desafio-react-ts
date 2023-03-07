import React from 'react'
import {
  Options,
  UserCardContainer,
  UserCardLeft,
  UserCardRight,
  UserCardText,
} from './styles'

interface UserCardProps {
  name: string
  email: string
  phone: string
  username: string
  street: string
  company: string
  children?: React.ReactNode
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  email,
  phone,
  username,
  street,
  company,
  children,
}) => {
  const handleOnClick = () => {
    console.log('click')
  }
  return (
    <UserCardContainer data-testid="UserCard" onClick={handleOnClick}>
      <Options>{children}</Options>
      <UserCardLeft>
        <UserCardText>
          <strong>Nome:</strong> {name}
        </UserCardText>
        <UserCardText>
          <strong>Email:</strong> {email}
        </UserCardText>
        <UserCardText>
          <strong>Celular:</strong> {phone}
        </UserCardText>
      </UserCardLeft>

      <UserCardRight>
        <UserCardText>
          <strong>Username:</strong> {username}
        </UserCardText>
        <UserCardText>
          <strong>Rua:</strong> {street}
        </UserCardText>
        <UserCardText>
          <strong>Empresa:</strong> {company}
        </UserCardText>
      </UserCardRight>
    </UserCardContainer>
  )
}

export default UserCard

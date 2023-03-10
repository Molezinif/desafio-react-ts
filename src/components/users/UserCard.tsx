import React from 'react'
import { useGlobalContext } from '../../context'
import { IUser } from '../../interfaces'
import {
  ButtonOptions,
  UserCardContainer,
  UserCardLeft,
  UserCardRight,
  UserCardText,
} from './styles'

interface UserCardProps {
  user: IUser
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const {
    name,
    username,
    email,
    address: { street },
    phone,
    company: { name: companyName },
  } = user

  const { toggleEditModal } = useGlobalContext()

  return (
    <UserCardContainer data-testid="UserCard">
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
          <strong>Empresa:</strong> {companyName}
        </UserCardText>
      </UserCardRight>
      <ButtonOptions
        onClick={() => {
          toggleEditModal(user)
        }}
      >
        editar
      </ButtonOptions>
    </UserCardContainer>
  )
}

export default UserCard

import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useGlobalContext } from '../../context'
import { Button, Container, LoadingContainer, Title } from './styles'
import UserCard from './UserCard'

export const Users: React.FC = () => {
  const { isLoading, handleGetUsers, completed, user } = useGlobalContext()
  console.log(user)
  if (isLoading) {
    return (
      <LoadingContainer data-testid="loading-container">
        <ClipLoader color={'green'} loading={isLoading} size={50} />
      </LoadingContainer>
    )
  }

  if (completed) {
    return (
      <Container data-testid="users-container">
        <Title>Usuários:</Title>
        {user.map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            email={user.email}
            phone={user.phone}
            username={user.username}
            street={user.address.street}
            company={user.company.name}
          />
        ))}
      </Container>
    )
  }
  return (
    <Container>
      <div>
        <Title data-testid="text">Nenhum usuário encontrado</Title>
      </div>
      <div>
        <Button role={'button'} onClick={handleGetUsers}>
          Buscar usuários
        </Button>
      </div>
    </Container>
  )
}

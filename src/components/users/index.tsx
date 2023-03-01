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
      <Container>
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
  /**
   * Criar um IF que exiba o componente referente aos usuários buscados na API
   * Imagens 3, 4 e 5
   */

  /**
   * Estilizar corretamente as divs e button usando styled-components
   * Imagem 1
   */
  return (
    <Container>
      <div>
        <Title>Nenhum usuário encontrado</Title>
      </div>
      <div>
        <Button onClick={handleGetUsers}>Buscar usuários</Button>
      </div>
    </Container>
  )
}

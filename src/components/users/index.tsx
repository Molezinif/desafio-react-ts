import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useGlobalContext } from '../../context'
import { Button, Container, LoadingContainer, Title } from './styles'

export const Users: React.FC = () => {
  const { isLoading, handleGetUsers } = useGlobalContext()

  if (isLoading) {
    return (
      <LoadingContainer data-testid="loading-container">
        <ClipLoader color={'green'} loading={isLoading} size={50} />
      </LoadingContainer>
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

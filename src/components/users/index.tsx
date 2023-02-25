import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useGlobalContext } from '../../context'
import { Container, LoadingContainer } from './styles'

export const Users: React.FC = () => {
  const { isLoading, handleGetUsers } = useGlobalContext()

  if(isLoading) {
    return (
      <LoadingContainer data-testid='loading-container'>
        <ClipLoader
          color={'green'}
          loading={isLoading}
          size={50}
        />
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
      <div>Nenhum usuário encontrado</div>
      <div>
        <button onClick={handleGetUsers}>
          Buscar usuários
        </button>
      </div>
    </Container>
  )
}

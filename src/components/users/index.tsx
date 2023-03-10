import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useGlobalContext } from '../../context'
import { Form } from '../Form/Form'
import Modal from '../Modal/Modal'
import { CloseButton } from '../Modal/styles'
import {
  Button,
  Container,
  LoadingContainer,
  Title,
  AddCardContainer,
} from './styles'
import { ListUsers } from './UsersList'

export const Users: React.FC = () => {
  const { isLoading, handleGetUsers, users, toggleModal, modalIsOpen } =
    useGlobalContext()
  if (isLoading) {
    return (
      <LoadingContainer data-testid="loading-container">
        <ClipLoader color={'green'} loading={isLoading} size={50} />
      </LoadingContainer>
    )
  }

  if (users.length > 0) {
    return modalIsOpen ? (
      <>
        <Container data-testid="users-container">
          <Title>Usuários:</Title>
          <AddCardContainer onClick={toggleModal}>
            + Adicionar um novo usuário
          </AddCardContainer>
          <ListUsers />
        </Container>
        <Modal>
          <Form />
        </Modal>
      </>
    ) : (
      <Container data-testid="users-container">
        <Title>Usuários:</Title>
        <AddCardContainer onClick={toggleModal}>
          + Adicionar um novo usuário
        </AddCardContainer>
        <ListUsers />
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

import React from 'react'
import { useGlobalContext } from '../../context'
import { IModalProps } from '../../interfaces'
import { CloseButton, ModalContainer, ModalOverlay } from './styles'
//import { ModalProvider } from 'styled-react-modal'

const Modal: React.FC<IModalProps> = ({ children }: IModalProps) => {
  const { toggleModal, setIsEditing } = useGlobalContext()

  const closeModal = () => {
    toggleModal()
    setIsEditing(false)
  }

  return (
    <ModalOverlay>
      <ModalContainer data-testid="modal">
        <CloseButton onClick={closeModal}>X</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal

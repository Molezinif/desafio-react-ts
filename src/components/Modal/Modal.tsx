import React from 'react'
import { useGlobalContext } from '../../context'
import { ModalProps } from '../../interfaces'
import { CloseButton, ModalContainer, ModalOverlay } from './styles'

const Modal: React.FC<ModalProps> = ({ children }: ModalProps) => {
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

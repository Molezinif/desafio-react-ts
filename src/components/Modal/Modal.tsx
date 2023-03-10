import React from 'react'
import { useGlobalContext } from '../../context'
import { CloseButton, ModalContainer, ModalOverlay } from './styles'

interface ModalProps {
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }: ModalProps) => {
  const { toggleModal, setIsEditing } = useGlobalContext()

  const closeModal = () => {
    toggleModal()
    setIsEditing(false)
  }
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={closeModal}>X</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal

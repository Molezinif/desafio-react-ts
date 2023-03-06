import React from 'react'
import { ModalContainer, ModalOverlay } from './styles'

interface ModalProps {
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }: ModalProps) => {
  return (
    <ModalOverlay>
      <ModalContainer>{children}</ModalContainer>
    </ModalOverlay>
  )
}

export default Modal

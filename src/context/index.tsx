import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from 'react'

import { IUser } from '../interfaces'
import api from '../services'
export interface GlobalContextProps {
  user: IUser[]
  setUser: Dispatch<SetStateAction<IUser[]>> 
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  handleGetUsers: () => void
  modalIsOpen: boolean
  setModal: Dispatch<SetStateAction<boolean>>
  toggleModal: () => void
  isEditing: boolean
  setIsEditing: Dispatch<SetStateAction<boolean>>
  toggleEditModal: () => void
}

interface GlobalProviderProps {
  children: ReactNode
}

export const defaultValue = {
  user: [] as IUser[],
  isLoading: false,
  modalIsOpen: false,
}

const GlobalContext = createContext<GlobalContextProps>({
  ...defaultValue,
} as GlobalContextProps)

const GlobalProvider: React.FC<GlobalProviderProps> = ({
  children,
}: GlobalProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(defaultValue.isLoading)
  const [user, setUser] = useState<IUser[]>(defaultValue.user)
  const [modalIsOpen, setModal] = useState<boolean>(defaultValue.modalIsOpen)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleGetUsers = useCallback(() => {
    setIsLoading(true)
    handleAPIGetUser()
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  async function handleAPIGetUser() {
    try {
      const response = await api.get('/users')
      setUser(response.data)
    } catch (error) {
      console.error('error: ' + error)
    }
  }

  const toggleModal = useCallback(() => {
    setModal(!modalIsOpen)
  }, [modalIsOpen])

  const toggleEditModal = useCallback(() => {
    toggleModal()
    setIsEditing(!isEditing)
  }, [isEditing, toggleModal])

  return (
    <GlobalContext.Provider
      value={{
        user: user,
        setUser: setUser,
        handleGetUsers: handleGetUsers,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        toggleModal: toggleModal,
        modalIsOpen: modalIsOpen,
        setModal: setModal,
        isEditing: isEditing,
        setIsEditing: setIsEditing,
        toggleEditModal: toggleEditModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = (): GlobalContextProps => {
  return React.useContext(GlobalContext)
}

export { GlobalContext, GlobalProvider, useGlobalContext }

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
  users: IUser[]
  setUsers: Dispatch<SetStateAction<IUser[]>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  handleGetUsers: () => void
  modalIsOpen: boolean
  setModal: Dispatch<SetStateAction<boolean>>
  toggleModal: () => void
  isEditing: boolean
  setIsEditing: Dispatch<SetStateAction<boolean>>
  toggleEditModal: (user: IUser) => void
  userEdit: IUser
  setUserEdit: Dispatch<SetStateAction<IUser>>
}

interface GlobalProviderProps {
  children: ReactNode
}

export const defaultValue = {
  users: [] as IUser[],
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
  const [users, setUsers] = useState<IUser[]>(defaultValue.users)
  const [modalIsOpen, setModal] = useState<boolean>(defaultValue.modalIsOpen)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [userEdit, setUserEdit] = useState<IUser>({} as IUser)

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
      setUsers(response.data)
    } catch (error) {
      console.error('error: ' + error)
    }
  }

  const toggleModal = useCallback(() => {
    setModal(!modalIsOpen)
  }, [modalIsOpen])

  const toggleEditModal = useCallback(
    (user: IUser) => {
      toggleModal()
      setIsEditing(!isEditing)
      setUserEdit(user)
    },
    [toggleModal, isEditing]
  )

  return (
    <GlobalContext.Provider
      value={{
        users,
        setUsers,
        handleGetUsers,
        isLoading,
        setIsLoading,
        toggleModal,
        modalIsOpen,
        setModal,
        toggleEditModal,
        userEdit,
        setUserEdit,
        isEditing,
        setIsEditing,
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

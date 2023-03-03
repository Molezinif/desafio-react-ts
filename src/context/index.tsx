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
  setUser?: Dispatch<SetStateAction<IUser>>
  completed: boolean
  setCompleted?: Dispatch<SetStateAction<boolean>>
  isLoading: boolean
  setIsLoading?: Dispatch<SetStateAction<boolean>>
  handleGetUsers: () => void
}

interface GlobalProviderProps {
  children: ReactNode
}

export const defaultValue = {
  user: [
    {
      id: 0,
      name: '',
      email: '',
      phone: '',
      username: '',
      address: {
        street: '',
      },
      company: {
        name: '',
      },
    } as IUser,
  ],
}

const GlobalContext = createContext<GlobalContextProps>({
  ...defaultValue,
} as GlobalContextProps)

const GlobalProvider: React.FC<GlobalProviderProps> = ({
  children,
}: GlobalProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [completed, setCompleted] = useState<boolean>(false)
  const [user, setUser] = useState<IUser[]>(defaultValue.user)

  const handleGetUsers = useCallback(() => {
    setIsLoading(true)
    handleAPI()
  }, [])

  async function handleAPI() {
    try {
      const response = await api.get('/users')
      setUser(response.data)

      setTimeout(() => {
        setIsLoading(false)
      }, 500)

      setCompleted(true)
      console.log(response.data)
    } catch (error) {
      console.error('error: ' + error)
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        user: user,
        handleGetUsers: handleGetUsers,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        completed: completed,
        setCompleted: setCompleted,
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

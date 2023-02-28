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

/**
 * Utilizar tipagens corretas nas props da interface
 */
export interface GlobalContextProps {
  user?: IUser
  setUser?: Dispatch<SetStateAction<IUser>>
  completed: boolean
  setCompleted: Dispatch<SetStateAction<boolean>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  handleGetUsers: () => void
}

interface GlobalProviderProps {
  children: ReactNode
}

const defaultValue = {}

const GlobalContext = createContext<GlobalContextProps>({
  ...defaultValue,
} as GlobalContextProps)

const GlobalProvider: React.FC<GlobalProviderProps> = ({
  children,
}: GlobalProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [completed, setCompleted] = useState<boolean>(false)
  const [user, setUser] = useState()

  const handleGetUsers = useCallback(() => {
    setIsLoading(true)
    api
      .get('/users')
      .then((response) => response.data)
      .then((data) => {
        setUser(data)
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
        setCompleted(true)
      })
      .catch((err) => {
        console.log('Error: ' + err)
      })
    /**
     * Criar tratativa para exibir loading e fazer chamada da função que chama o AXIOS
     * Salvar resposta do endpoint em um state e utiliza-lo no projeto
     */
  }, [])

  return (
    <GlobalContext.Provider
      value={{
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

import React, { createContext, ReactNode, useCallback, useState } from 'react'

/**
 * Utilizar tipagens corretas nas props da interface
*/
export interface GlobalContextProps {
  isLoading: any
  setIsLoading: any
  handleGetUsers: any
}

interface GlobalProviderProps {
  children: ReactNode
}

const defaultValue = {}

const GlobalContext = createContext<GlobalContextProps>({ ...defaultValue } as GlobalContextProps)

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }: GlobalProviderProps) => {
  const [isLoading, setIsLoading] = useState()

  const handleGetUsers = useCallback(() => {
    /**
     * Criar tratativa para exibir loading e fazer chamada da função que chama o AXIOS
     * Salvar resposta do endpoint em um state e utiliza-lo no projeto
     */
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        handleGetUsers,
        isLoading,
        setIsLoading
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

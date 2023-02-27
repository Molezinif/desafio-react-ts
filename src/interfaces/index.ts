import { AxiosResponse } from 'axios'

/**
 * Tipar corretamente interfaces
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUser {
  name: string
  email: string
  phone: string
  user: string
  street: string
  enterprise: string
}

type TFetchUsers = () => any

export type { IUser, TFetchUsers }

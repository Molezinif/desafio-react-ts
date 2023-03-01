/**
 * Tipar corretamente interfaces
 */
interface IUser {
  id: number
  name: string
  email: string
  phone: string
  username: string
  address: {
    street: string
  }
  company: {
    name: string
  }
}

export type { IUser }

import { FieldErrors } from 'react-hook-form'

interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: IAddress
  phone: string
  website?: string
  company: ICompany
}

interface IAddress {
  street: string
  suite?: string
  city?: string
  zipcode?: string
  geo?: {
    lat: string
    lng: string
  }
}

interface ICompany {
  name: string
  catchPhrase?: string
  bs?: string
}

interface IModalProps {
  children: React.ReactNode
}

interface IUserCardProps {
  user: IUser
}

interface InputProps {
  hasError?: boolean
}

interface IFormErrors {
  name?: string
  email?: string
  phone?: string
  username?: string
  address?: {
    street?: string
  }
  company?: {
    name?: string
  }
}

export type {
  IUser,
  IAddress,
  ICompany,
  IModalProps,
  IUserCardProps,
  InputProps,
  FieldErrors,
  IFormErrors,
}

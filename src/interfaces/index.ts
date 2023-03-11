import { FieldErrors, Control, FieldError, FieldValues } from 'react-hook-form'

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

interface ModalProps {
  children: React.ReactNode
}

interface UserCardProps {
  user: IUser
}

interface CustomInputProps<T extends FieldValues, K extends keyof T> {
  name: K
  label: string
  control: Control<T>
  rules?: Record<string, unknown>
  errors: Record<keyof T, FieldError>
  placeholder?: string
}

interface InputProps {
  error?: boolean
}

export type {
  IUser,
  IAddress,
  ICompany,
  ModalProps,
  UserCardProps,
  CustomInputProps,
  InputProps,
  FieldErrors,
}

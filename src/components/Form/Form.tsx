import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useGlobalContext } from '../../context'
import { IAddress, ICompany, IUser } from '../../interfaces'
import { ButtonSubmit, StyledForm, StyledInput, StyledLabel } from './styles'

interface IForm {
  name: string
  email: string
  phone: string
  username: string
  address: IAddress
  company: ICompany
}

export const Form: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<IForm>()
  const { setUser, user } = useGlobalContext()

  const onsubmit = (data: IForm) => {
    const newUser: IUser = {
      id: user.length + 1,
      name: data.name,
      email: data.email,
      phone: data.phone,
      username: data.username,
      address: {
        street: data.address.street,
      },
      company: {
        name: data.company.name,
      },
    }
    axios
      .post(`https://jsonplaceholder.typicode.com/users/${newUser.id}`, newUser)
      .then((response) => {
        console.log(response)
        reset()
      })
  }

  return (
    <StyledForm onSubmit={handleSubmit(onsubmit)}>
      <StyledLabel>Name:</StyledLabel>
      <StyledInput type="text" {...register('name')} />
      <StyledLabel>Email:</StyledLabel>
      <StyledInput type="text" {...register('email')} />
      <StyledLabel>Phone:</StyledLabel>
      <StyledInput type="text" {...register('phone')} />
      <StyledLabel>Username:</StyledLabel>
      <StyledInput type="text" {...register('username')} />
      <StyledLabel>Street:</StyledLabel>
      <StyledInput type="text" {...register('address.street')} />
      <StyledLabel>Company:</StyledLabel>
      <StyledInput type="text" {...register('company.name')} />
      <ButtonSubmit>Save</ButtonSubmit>
    </StyledForm>
  )
}

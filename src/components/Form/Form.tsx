import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useGlobalContext } from '../../context'
import { IUser } from '../../interfaces'
import { ButtonSubmit, StyledForm, StyledInput, StyledLabel } from './styles'


export const Form: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<IUser>()
  const { setUser, user } = useGlobalContext()

  const onsubmit = (data: IUser) => {
    axios
      .post('https://jsonplaceholder.typicode.com/users', data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
    reset()
    if(user !== undefined && setUser){
      setUser([...user, data])
    }
    //setUser([...user, data])
    //Cannot invoke an object which is possibly 'undefined'.
    console.log('data: '+ JSON.stringify(data))
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

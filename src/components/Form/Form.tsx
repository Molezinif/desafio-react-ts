import React from 'react'
import { useForm } from 'react-hook-form'
import { useGlobalContext } from '../../context'
import { IUser } from '../../interfaces'
import api from '../../services'
import { CloseButton } from '../Modal/styles'
import { ButtonSubmit, StyledForm, StyledInput, StyledLabel } from './styles'


export const Form: React.FC = () => {
  const { register, handleSubmit, reset, setValue } = useForm<IUser>()
  const { setUser, user, isEditing, toggleEditModal,toggleModal } = useGlobalContext()

  async function handlePostUsers(data: IUser) {
    try {
      const response = await api.post('/users', data)
      console.log(response.data)
      setUser([...user, data])
    } catch (error) {
      console.error('error: ' + error)
    }
  }
  
  const addUser = (data: IUser, event: any) => {
    event.preventDefault()
    const newUser = { ...data, id: user.length + 1 }
    console.log(newUser)
    handlePostUsers(newUser)
    reset()
    toggleModal()
  }

  async function handlePatchUsers(data: IUser) {
    try {
      const response = await api.put(`/users/${data.id}`, data)
      console.log(response.data)
      setUser([...user,data])
      
    } catch (error) {
      console.error('error: ' + error)
    }
  }

  const editUser = (data: IUser) => {
    handlePatchUsers(data)
    toggleEditModal()
    reset()
  }
/* 
  useEffect(() => {
    if (isEditing) {
      setValue('id', user[0].id)
      setValue('name', user[0].name)
      setValue('email', user[0].email)
      setValue('phone', user[0].phone)
      setValue('username', user[0].username)
      setValue('address.street', user[0].address.street)
      setValue('company.name', user[0].company.name)
    }
  }, [isEditing, user, setValue]) */

  return isEditing ? (
    <StyledForm onSubmit={handleSubmit(editUser)}>
      <CloseButton onClick={toggleEditModal}>X</CloseButton>
      <StyledLabel>Nome:</StyledLabel>
      <StyledInput type="hidden" {...register('id')}></StyledInput>
      <StyledInput type="text" {...register('name')} />
      <StyledLabel>Email:</StyledLabel>
      <StyledInput type="text" {...register('email')} />
      <StyledLabel>Celular:</StyledLabel>
      <StyledInput type="text" {...register('phone')} />
      <StyledLabel>Username:</StyledLabel>
      <StyledInput type="text" {...register('username')} />
      <StyledLabel>Rua:</StyledLabel>
      <StyledInput
        type="text"
        {...register('address.street')}
      />
      <StyledLabel>Empresa:</StyledLabel>
      <StyledInput
        type="text"
        {...register('company.name')}
      />
      <ButtonSubmit>Salvar</ButtonSubmit>
    </StyledForm>
  ) : (
    <StyledForm onSubmit={handleSubmit(addUser)}>
      <CloseButton onClick={toggleModal}>X</CloseButton>
      <StyledLabel>Nome:</StyledLabel>
      <StyledInput type="text" {...register('name')} />
      <StyledLabel>Email:</StyledLabel>
      <StyledInput type="text" {...register('email')} />
      <StyledLabel>Celular:</StyledLabel>
      <StyledInput type="text" {...register('phone')} />
      <StyledLabel>Username:</StyledLabel>
      <StyledInput type="text" {...register('username')} />
      <StyledLabel>Rua:</StyledLabel>
      <StyledInput type="text" {...register('address.street')} />
      <StyledLabel>Empresa:</StyledLabel>
      <StyledInput type="text" {...register('company.name')} />
      <ButtonSubmit onSubmit={handleSubmit(addUser)}>Salvar</ButtonSubmit>
    </StyledForm>
  )
}

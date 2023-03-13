/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useGlobalContext } from '../../context'
import { IFormErrors, IUser } from '../../interfaces'
import api from '../../services'
import {
  ButtonContainer,
  ButtonDelete,
  ButtonSubmit,
  ErrorMessage,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './styles'

export const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IUser, IFormErrors>()
  const { setUsers, users, isEditing, toggleEditModal, toggleModal, userEdit } =
    useGlobalContext()

  //Create User
  const handlePostUsers = useCallback(
    async (data: IUser) => {
      try {
        const response = await api.post('/users', data)
        console.log(response.data)
        setUsers([...users, data])
      } catch (error) {
        console.error('error: ' + error)
      }
    },
    [setUsers, users]
  )

  const addUser = useCallback(
    async (data: IUser) => {
      const newUser = { ...data, id: users.length + 1 }
      console.log(newUser)
      await handlePostUsers(newUser)
      reset()
      toggleModal()
    },
    [handlePostUsers, reset, toggleModal, users.length]
  )

  //Update User
  const handlePatchUsers = useCallback(
    async (data: IUser) => {
      try {
        const response = await api.patch(`/users/${data.id}`, data)
        console.log(response.data)
        const updatedUsers = users.map((user) =>
          user.id === data.id ? data : user
        )
        setUsers(() => updatedUsers)
      } catch (error) {
        console.error('error: ' + error)
      }
    },
    [setUsers, users]
  )

  const editUser = useCallback(
    async (data: IUser) => {
      await handlePatchUsers(data)
      toggleEditModal({} as IUser)
      reset()
    },
    [handlePatchUsers, reset, toggleEditModal]
  )

  //Delete User
  const handleDeleteUsers = useCallback(
    async (data: IUser) => {
      try {
        const response = await api.delete(`/users/${data.id}`)

        const updatedUsers = users.filter((user) => user.id !== data.id)
        setUsers(() => updatedUsers)
        console.log(response.data)
      } catch (error) {
        console.error('error: ' + error)
      }
    },
    [setUsers, users]
  )

  const deleteUser = useCallback(
    async (data: IUser) => {
      await handleDeleteUsers(data)
      toggleEditModal({} as IUser)
      reset()
    },
    [handleDeleteUsers, reset, toggleEditModal]
  )

  useEffect(() => {
    if (isEditing) {
      setValue('id', userEdit.id)
      setValue('name', userEdit.name)
      setValue('email', userEdit.email)
      setValue('phone', userEdit.phone)
      setValue('username', userEdit.username)
      setValue('address.street', userEdit.address.street)
      setValue('company.name', userEdit.company.name)
    }
  }, [isEditing, userEdit, setValue])

  return (
    <StyledForm
      onSubmit={handleSubmit(isEditing ? editUser : addUser)}
      data-testid="form"
    >
      <StyledLabel>Nome:</StyledLabel>
      <StyledInput type="hidden" {...register('id')}></StyledInput>
      <StyledInput
        type="text"
        hasError={!!errors.name}
        placeholder="Insira o nome"
        {...register('name', { required: true })}
      />
      {errors.name && <ErrorMessage>Nome é obrigatório</ErrorMessage>}
      <StyledLabel>Email:</StyledLabel>
      <StyledInput
        type="text"
        hasError={!!errors.email}
        placeholder="example@email.com"
        {...register('email', {
          required: true,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            message: 'Email inválido',
          },
        })}
      />
      {errors.email && <ErrorMessage>Email invalido</ErrorMessage>}
      <StyledLabel>Celular:</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Insira o nome"
        hasError={!!errors.phone}
        {...register('phone', { required: true })}
      />
      {errors.phone && <ErrorMessage>Celular inválido</ErrorMessage>}
      <StyledLabel>Username:</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Insira o celular"
        hasError={!!errors.phone}
        {...register('username', { required: true })}
      />
      {errors.username && <ErrorMessage>Nome de usuário inválido</ErrorMessage>}
      <StyledLabel>Rua:</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Insira o usuário"
        hasError={!!errors.username}
        {...register('address.street', { required: true })}
      />
      {errors.address?.street && <ErrorMessage>Endereço inválido</ErrorMessage>}
      <StyledLabel>Empresa:</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Insira a rua"
        hasError={!!errors.company?.name}
        {...register('company.name', { required: true })}
      />
      {errors.company?.name && (
        <ErrorMessage>Insira o nome da empresa</ErrorMessage>
      )}
      <ButtonContainer>
        <ButtonSubmit>Salvar</ButtonSubmit>
        {isEditing && (
          <ButtonDelete
            onClick={() => deleteUser(userEdit)}
            data-testid="delete-button"
          >
            Deletar
          </ButtonDelete>
        )}
      </ButtonContainer>
    </StyledForm>
  )
}

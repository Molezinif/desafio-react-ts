/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useGlobalContext } from '../../context'
import { IUser } from '../../interfaces'
import api from '../../services'
import {
  ButtonDelete,
  ButtonSubmit,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './styles'

export const Form: React.FC = () => {
  const { register, handleSubmit, reset, setValue } = useForm<IUser>()
  const { setUsers, users, isEditing, toggleEditModal, toggleModal, userEdit } =
    useGlobalContext()

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

  const handlePatchUsers = useCallback(
    async (data: IUser) => {
      try {
        const response = await api.patch(`/users/${data.id}`, data)
        console.log(data.id)
        console.log(response.data)
        const updatedUsers = users.map((user) =>
          user.id === data.id ? data : user
        )
        setUsers((users) => updatedUsers)
      } catch (error) {
        console.error('error: ' + error)
      }
    },
    [setUsers, users]
  )

  const editUser = useCallback(
    (data: IUser) => {
      /* const updatedUsers = Array.from(user) */
      handlePatchUsers(data)
      toggleEditModal({} as IUser)
      reset()
    },
    [handlePatchUsers, reset, toggleEditModal]
  )

  const handleDeleteUsers = useCallback(
    async (data: IUser) => {
      try {
        const response = await api.delete(`/users/${data.id}`)
        console.log(data.id)
        console.log(response.data)
        setUsers(users.filter((user) => user.id !== data.id))
      } catch (error) {
        console.error('error: ' + error)
      }
    },
    [setUsers, users]
  )

  const deleteUser = useCallback(
    (data: IUser) => {
      handleDeleteUsers(data)
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
    <StyledForm onSubmit={handleSubmit(isEditing ? editUser : addUser)}>
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
      <StyledInput type="text" {...register('address.street')} />
      <StyledLabel>Empresa:</StyledLabel>
      <StyledInput type="text" {...register('company.name')} />
      <ButtonSubmit>Salvar</ButtonSubmit>
      {isEditing && (
        <ButtonDelete onClick={() => deleteUser(userEdit)}>
          Deletar
        </ButtonDelete>
      )}
    </StyledForm>
  )
}

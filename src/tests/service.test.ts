import axios from 'axios'
import { mockEditUser } from '../mocks/mockEditUser'
import { usersMock } from '../mocks/userMock'
import { apiUrl } from '../services'

describe('fetchUsers function', () => {
  jest.mock('axios')
  test('fetches data from fetchUsers', async () => {
    axios.get = jest
      .fn()
      .mockImplementation(
        async () => await Promise.resolve({ data: usersMock })
      )
    const { data } = await axios.get(`${apiUrl}/users`)
    expect(data).toEqual(usersMock)
  })
})

describe('postUser function', () => {
  jest.mock('axios')
  test('posts data from postUser', async () => {
    axios.post = jest
      .fn()
      .mockImplementation(
        async () => await Promise.resolve({ data: usersMock[0] })
      )
    const { data } = await axios.post(`${apiUrl}/users`, usersMock[0])
    expect(data).toEqual(usersMock[0])
  })
})

describe('patchUser function', () => {
  jest.mock('axios')
  test('patches data from patchUser', async () => {
    axios.patch = jest
      .fn()
      .mockImplementation(
        async () => await Promise.resolve({ data: usersMock[0] })
      )
    const { data } = await axios.patch(`${apiUrl}/users/1`, mockEditUser[1])
    expect(data).toEqual(usersMock[0])
  })
})

describe('deleteUser function', () => {
  jest.mock('axios')
  test('deletes data from deleteUser', async () => {
    axios.delete = jest
      .fn()
      .mockImplementation(
        async () => await Promise.resolve({ data: usersMock[0] })
      )
    const { data } = await axios.delete(`${apiUrl}/users/1`)
    expect(data).toEqual(usersMock[0])
  })
})

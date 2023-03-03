import axios from 'axios'
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

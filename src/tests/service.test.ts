import axios from 'axios'

describe('Teste Axios', () => {
  test('deve retornar um objeto com dados do usuário', async () => {
    const userId = 1
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )

    expect(response.data).toEqual({
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    })
  })
})

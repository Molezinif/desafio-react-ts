import { useEffect } from 'react'
import api from '../../services'

//rascunho
export const userDetails = () => {
  useEffect(() => {
    api
      .get('/users')
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.log('Error: ' + err)
      })
  }, [])
}

import axios from 'axios'

const axipsOptions = {
  baseURL: 'http://127.0.0.1:5000/api'
}

const apiInstance = axios.create(axipsOptions)

const users = [
  {
    id: Symbol(),
    name: 'name1',
    phone: '+380000000000',
    isBanned: false
  },
  {
    id: Symbol(),
    name: 'name2',
    phone: '+380001111111',
    isBanned: false
  }
]

//export const getUsers = () => apiInstance.get('/users')
export const getUsers = () => {
  return Promise.resolve({ data: users })
}

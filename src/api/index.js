import axios from 'axios';

const axipsOptions = {
  baseURL: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axipsOptions);

const users = [
  {
    id: Date.now() + Math.trunc(Math.random() * 1000000),
    name: 'name1',
    phone: '+380000000000',
    isBanned: false,
  },
  {
    id: Date.now() + Math.trunc(Math.random() * 1000000),
    name: 'name2',
    phone: '+380001111111',
    isBanned: false,
  },
];

//export const getUsers = () => apiInstance.get('/users')
export const getUsers = () => {
  return Promise.resolve({ data: users });
};

//для варианта с сервером мы использоуем апи инстанс
// export const createUser = user => apiInstance.post('/users',user)

export const createUser = user => {
  const newUser = {
    id: Date.now(),
    ...user,
  };
  users.push(newUser);
  return Promise.resolve({ data: newUser });
};

//для сервера
//export const deleteUser = id => apiInstance.delete(`/users/${id}`)
export const deleteUser = id => {
  const index = users.findIndex(u => u.id === id);

  return Promise.resolve({ data: users.splice(index, 1) });
};

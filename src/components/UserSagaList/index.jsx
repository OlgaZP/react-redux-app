import React from 'react'
import { connect } from 'react-redux'

// Получить состояние из глобального состояния
function UsersSagaList (props) {
  const { users } = props

  const mapUser = ({ id, name, telNumber, isBanned }) => {
    const changeBann = () => {
      updateUserAction({ id: id, isBanned: !isBanned })
    }

    const deleteUser = () => {
      deleteUserAction(id)
    }
    return (
      <li key={id}>
        ID: {id} name: {name} tel.: {telNumber}
        <input type='checkbox' checked={isBanned} onChange={changeBann} />
        <button onClick={deleteUser}>Delete</button>
      </li>
    )
  }

  return <ul>{users.map(mapUser)}</ul>
}

export default UsersSagaList

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions';
import ACTION_TYPES from '../../actions/actionTypes';

// Получить состояние из глобального состояния
function UsersSagaList (props) {
  const { users, isFetching, error, getUsers } = props;

  useEffect(() => {
    getUsers();
  }, [users.length]);

  const mapUser = ({ id, name, phone, isBanned }) => {
    // const changeBann = () => {
    //   updateUserAction({ id: id, isBanned: !isBanned })
    // }

    // const deleteUser = () => {
    //   deleteUserAction(id)
    // }
    return (
      <li key={id}>
        ID: {id} name: {name} tel.: {phone}
        <input type='checkbox' checked={isBanned} />
        <button>Delete</button>
      </li>
    );
  };

  return <ul>{users.map(mapUser)}</ul>;
}

const mapStateToProps = state => state.sagaUsers;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(actionCreators.getUsersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersSagaList);

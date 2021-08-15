import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions';


function UsersList(props) {
    const { users, deleteUserAction } = props;
    const mapUser = ({id, name, phone, isBanned}, index) => {

        const changeUserStatus = () => {};

        const deleteUser = index => {
            deleteUserAction(index);
        };

        return <li key={id}>
            ID: {id}  name: {name} tel.: {phone}
            <input type='checkbox' checked={isBanned} onChange={changeUserStatus} />
            <button onClick={deleteUser}> Delete </button>
        </li>;
    };

    return <ul>{users.map(mapUser)}</ul>;
}

const mapStateToProps = state => state.users;

const mapDispatchToProps = dispatch => {
    return {
        deleteUserAction: index => {dispatch(actionCreators.deleteUser(index))},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);


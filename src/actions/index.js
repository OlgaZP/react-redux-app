import ACTION_TYPES from './actionTypes';

export const increment = () => ({ type: ACTION_TYPES.INCREMENT });

export const decrement = () => ({ type: ACTION_TYPES.DECREMENT });

export const setStep = newStep => ({
  type: ACTION_TYPES.SET_STEP,
  value: newStep,
});

export const createUser = userData => {
  return {
    type: ACTION_TYPES.CREATE_USER,
    userData: userData,
  };
};

export const deleteUser = id => {
  return {
    type: ACTION_TYPES.DELETE_USER,
    id: id,
  };
};

export const updateUser = newInfo => {
  return {
    type: ACTION_TYPES.UPDATE_USER,
    newInfo: newInfo,
  };
};

//это идет в сагу
export const getUsersAction = () => ({
  type: ACTION_TYPES.GET_USERS_ACTION,
});

export const getUsersRequest = () => ({
  type: ACTION_TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccess = users => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  users: users,
});

export const getUsersError = error => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  error: error,
});

//экшн криэйторс для создания юзера
export const createUserAction = user => ({
  type: ACTION_TYPES.CREATE_USER_ACTION,
  user: user,
});

export const createUserRequest = () => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
});

export const createUserSuccess = user => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  user,
});

export const createUserError = error => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  error,
});

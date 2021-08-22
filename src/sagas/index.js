import { takeLatest } from '@redux-saga/core/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createUserSaga, getUsersSaga } from './usersSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getUsersSaga);
  yield takeLatest(ACTION_TYPES.CREATE_USER_ACTION, createUserSaga);
}

export default rootSaga;

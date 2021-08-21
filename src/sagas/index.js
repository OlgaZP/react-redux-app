import { takeLatest } from '@redux-saga/core/effects'
import ACTION_TYPES from '../actions/actionTypes'
import { getUsersSaga } from './usersSaga'

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getUsersSaga)
}

export default rootSaga

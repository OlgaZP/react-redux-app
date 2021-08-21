import { put } from 'redux-saga/effects'
import { getUsersError, getUsersRequest, getUsersSuccess } from '../actions'
import * as API from './../api'

export function * getUsersSaga () {
  yield put(getUsersRequest()) // отправка экшна
  try {
    const { data: users } = yield API.getUsers()
    yield put(getUsersSuccess(users))
  } catch (e) {
    yield put(getUsersError(e))
  }
}

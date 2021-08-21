import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import usersReducer from './usersReducer'
import usersSagaReducer from './usersSagaReduser'

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  user: usersSagaReducer
})

export default rootReducer

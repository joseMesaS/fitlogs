import { combineReducers, Action } from 'redux'

const testReducer = (state = false, action: Action) => {
  switch (action.type) {
    case 'TEST':
      return true
    case 'ERROR':
      return false
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  testReducer,
})

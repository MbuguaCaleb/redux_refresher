import { combineReducers } from 'redux'
import reducer from './accountReducer'
import accountReducer from './accountReducer'

//Combine reducer is a function that takes in an Object of all the reducers we want to combine
const reducers = combineReducers({
  account: accountReducer,
})

export default reducers

//This is very Powerful since i have a combination of all my States
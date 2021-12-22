import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

//takes in the combined reducers plus INITIAL State.
//In this example the intial default State is an empty Object

export const store = createStore(reducers, {}, applyMiddleware(thunk))

//i then hook up my Store into my react application

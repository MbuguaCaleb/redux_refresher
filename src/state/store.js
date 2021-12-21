import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'

//takes in the combined reducers plus INITIAL State.
//In this example the intial default State is an empty Object

const composedEnhancer = applyMiddleware(thunkMiddleware)

export const store = createStore(reducers, composedEnhancer)

//i then hook up my Store into my react application

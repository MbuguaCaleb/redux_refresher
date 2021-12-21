import { createStore } from 'redux'
import reducers from './reducers'

//takes in the combined reducers plus INITIAL State.
//In this example the intial default State is an empty Object

export const store = createStore(reducers, {})

//i then hook up my Store into my react application

//A reducer is untimately a function that returns State
const reducer = (state = 0, action) => {
  //the reducer reads an action then returns the appopriate State
  switch (action.type) {
    case 'deposit':
      return state + action.payload
    case 'withdraw':
      return state - action.payload
    default:
      return state
  }
}

export default reducer

//Remember.
//We could have multiple reducers and all are affecting our State.
//We therefore Must Combine them

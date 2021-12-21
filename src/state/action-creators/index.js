//Remember that this is an Action creator and it always will return an
//action or an action with a PayLoad.

export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'deposit',
      payload: amount,
    })
  }
}

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'withdraw',
      payload: amount,
    })
  }
}

//The action dispatched by the Action creator has everything that is required to be acted upon by the reducer.

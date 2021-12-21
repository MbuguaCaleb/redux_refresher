import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

function App() {
  //How i call my Store inside my Component
  //We can do this with any component
  //even when its way below the component tree and be able
  //to acess the State that we want
  const account = useSelector((state) => state.account)

  //I have to use actionCreators with a hook called useDispatch
  const dispatch = useDispatch()

  //Very Important Steps
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  )

  //Once i dispatch an action, our reducer sees that and updates our State
  return (
    <div className='App'>
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  )
}

export default App

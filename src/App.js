import logo from './logo.svg'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  //How i call my Store inside my Component
  //We can do this with any component
  //even when its way below the component tree and be able
  //to acess the State that we want
  const account = useSelector((state) => state.account)

  console.log(account)

  return <div className='App'></div>
}

export default App

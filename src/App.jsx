import {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import UnauthenticatedApp from './UnauthenticatedApp'
import AuthenticatedApp from './AuthenticadedApp'

import {useGlobalContext} from './context/GlobalProvider'

import './App.css'
import Board from './pages/Board'
import BoardProvider from './context/BoardProvider'

function App() {
  const {user} = useGlobalContext();
  console.log(user)

  return (
    // since useEffect executes after render, I could instead directly move to AuthenticatedApp and from there use useEffect to determine wether the user should stay there or not, or maybe a floating login.
    // I guess that'd be more pleasant to the user.
    user ?
      <AuthenticatedApp /> :
      <UnauthenticatedApp />
  )
}

export default App

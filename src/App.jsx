import {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import UnauthenticatedApp from './UnauthenticatedApp'
import AuthenticatedApp from './AuthenticadedApp'

import {useGlobalContext} from './context/GlobalProvider'

import './App.css'

function App() {
  const {user} = useGlobalContext();

  return (
    user ? <AuthenticatedApp /> : <UnauthenticatedApp />
  )
}

export default App

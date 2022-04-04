import {Routes, Route} from 'react-router-dom'

import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import UnauthenticatedApp from './UnauthenticatedApp'
import AuthenticatedApp from './AuthenticadedApp'

import {useAuth} from './context/auth-context'

import './App.css'

function App() {
  const {user} = useAuth();
  console.log(user);
  return (
    user ? <AuthenticatedApp /> : <UnauthenticatedApp />
    // <div className="App">
    //   <header className="App-header">
    //     <Nav />
    //     <Routes>
    //       <Route path="/" element={<Home/>} />
    //       <Route path='/about' element={<About/>}/>
    //     </Routes>
    //   </header>
    // </div>
  )
}

export default App

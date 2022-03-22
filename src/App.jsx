import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </header>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import './layout.scss'
import NavBar from './components/Navbar/NavBar'
import HomePage from './routes/homePage'

function App() {

  return (
    <div className='layout'>
      <div className='navbar'>
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App

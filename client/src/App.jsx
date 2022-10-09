import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  async function getUser() {
    fetch('http://localhost:3000/user').then(res => res.json()).then(res => console.log(res))
  }

  return (
    <div className="App">
      <button onClick={getUser}>Obteneruser</button>
    </div>
  )
}

export default App

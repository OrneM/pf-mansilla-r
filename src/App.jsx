import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBAr from './components/NavBar'

function App() {

  const title = "Vite + React";

  return (
  <> 
  <NavBAr />
  <div>
    <h1> Título {title}</h1>
    <h2> subtitulo {title}</h2>
  </div>

    </>

  )
  
}

export default App 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/moviesCard'
import Home from "./pages/Home"

function App() {


  return (
    <>
  
      <Home />

    </>
  )
}

function Text({display}){
  return(
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App

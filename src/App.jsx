import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/moviesCard'

function App() {
 
  return (
    <>
    <MovieCard movie = {{title: "Inception", year:"2010"}}/>
    <MovieCard movie = {{title: "Inception2", year:"2012"}}/>
    <MovieCard movie = {{title: "Inception3", year:"2015"}}/>

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

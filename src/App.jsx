import './css/App.css'
import Home from "./pages/Home"
import Favorites from './pages/Favourites'
import {Routes, Route, Router} from "react-router-dom"
import NavBar from "./components/NavBar"
import { MovieProvider } from './contexts/MovieContext'
function App() {

  return (

    <MovieProvider>

        <NavBar/>

    <main className = "main-content">

      <Routes>

        <Route path = "/" element = {<Home/>}/>  
        <Route path = "/favourites" element = {<Favorites/>}/>
        
      </Routes>

    </main>
    </MovieProvider>
  
  )
}


export default App

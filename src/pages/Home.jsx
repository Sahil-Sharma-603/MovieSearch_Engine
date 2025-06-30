import { useState } from 'react'
import MovieCard from "../components/MoviesCard";
import "../css/Home.css"

function Home(){
    // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

   const  movies = [
        {id: 1, title: "Inception", year: 2010},
        {id: 2, title: "Interstellar", year: 2014},
        {id: 3, title: "Dunkirk", year: 2017},
    ]

    const handleSearch =()=>{
            alert(searchQuery);
    };

    return(
        <div className = "home">
            <form onSubmit = {handleSearch} className = "search-form"> 
                <input type = "text" 
                placeholder="Search Movies ...."
                 className="search-input"
                 value = {searchQuery} 
                 onChange = {(e) => setSearchQuery(e.target.value)}
                />        
                <button type = "submit" className= "search-button" >Search</button>
            </form>

            <div className="movies-grid">
                
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
            </div>

        </div>

      
    );
}


export default Home;
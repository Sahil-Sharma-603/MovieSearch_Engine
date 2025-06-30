import { useState, useEffect } from 'react'
import MovieCard from "../components/MoviesCard";
import "../css/Home.css"
import {getPopularMovies, searchPopularMovies} from "../services/api"


function Home(){
    // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");
    // storing movie in state so whenever we update the movie list then it will update the UI
  const [movies, setMovies] = useState([]); 
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(true);


    useEffect(()=>{

        // function to get the popular the from api.js file that data we recieved from api
        const loadPopularMovies = async() =>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);

            }catch (err){
                    console.log(err);
                    setError("Failed to load the Movies....")
                    
            }finally{
                setLoading(false);
            }
        }

        //calling the above function
        loadPopularMovies();

    }, [])

    // handling the search using api called
    const handleSearch = async(e)=>{
            e.preventDefault();

            // useful to remove spaces in search
            if(!searchQuery.trim()) return
            if(loading) return

            setLoading(true);
            try{
                const searchedMovie = await searchPopularMovies(searchQuery);
                setMovies(searchedMovie);
                setError(null);

             }catch(err){
                console.log(err);
                setError("Failed to search the Movie... ");

              }finally{
                    setLoading(false);
             }
            
        
            // setSearchQuery("");
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

             {/* Conditional Rendering */}
            {error && (<div className = "error-message"> {error}</div>)}

            {/* Conditional Rendering */}
            {loading ? (<div className='loading'> Loading.... </div> ) 
            :(
                <div className="movies-grid">
                
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
            </div>

            )}
            

        </div>

      
    );
}


export default Home;
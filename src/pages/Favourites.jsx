import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MoviesCard";

function Favorites(){
    const {favorites} =  useMovieContext();

    if(favorites){
        return  <div className="favorites">
        <h2>Your Favorites Movies</h2>
        <div className="movies-grid">
        {favorites.map((movie) => (
            <MovieCard movie = {movie} key = {movie.id}/>
        ))}
        </div>
        </div>
    }

    return(
        <div className="favorites-empty">
            <h2>No Movies added yet</h2>
            <p>You can add favourites movies by clicking the heart icon</p>
            

        </div>
    )
}

export default Favorites;
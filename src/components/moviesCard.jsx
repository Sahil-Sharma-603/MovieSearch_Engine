import "../css/MovieCard.css"

function MovieCard({movie}){
    function onFavoriteClick() {
        alert("Favorite button clicked for ");
    }
    
  return(
    <div className="movie-card"> 
        <div className="movie-poster"> 
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-overlay">
             <button className="favorite-btn" onClick={onFavoriteClick}> ♡ </button>    
            </div>
        </div>
        <div className="movie-info">
            <h3 >{movie.title}</h3>
            <p >{movie.year}</p>
        </div>
    
    </div>

  )
}

export default MovieCard;
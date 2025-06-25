function MovieCard({movie}){
    function onFavoriteClick() {
        alert("Favorite button clicked for ");
    }
    
  return(
    <div className="movie-card"> 
        <div className="movie-card-poster"> 
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-overlay">
             <button className="movie-button" onClick={onFavoriteClick}> ♡ </button>    
            </div>
        </div>
        <div className="`movie-card-info">
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-year">{movie.year}</p>
        </div>
    
    </div>

  )
}

export default MovieCard;
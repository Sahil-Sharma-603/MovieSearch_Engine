import { createContext, useState, useEffect, useContext } from "react";


const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites]  = useState([]);

    // here we are getting the whatever we have in localstorage and setting a state to it.
    useEffect(()=>{
        const storeFavorites = localStorage.getItem("favorites");
        if(storeFavorites){
            setFavorites(JSON.parse(storeFavorites));
        }

    },[])

    // anytime the favorite state is changes we will update the local storage.
    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    }, [favorites])

    // three operations needed - one to add, remove, check is favorite

    const addToFavorite =(movie)=>{
        // updating the state 
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorite = (movieId) =>{
        // updating the state after removing from localstorage
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite =(movieId) =>{
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorite,
        removeFromFavorite,
        isFavorite
    }

    return (
        <MovieContext.Provider value = {value}>
            {children}
        </MovieContext.Provider>

    );
}
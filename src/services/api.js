const API_KEY = "af69e50a9dddbf9c92b4ab7c5c9a166a"
const Base_URL = "https://api.themoviedb.org/3";


// requesting to get the popular movies from api
// fetch is used that send request to the network
// https://developer.themoviedb.org/reference/movie-popular-list
export const getPopularMovies = async () => {

        const response =  await fetch(`${Base_URL}/movie/popular?api_key = ${API_KEY}`);
        const data = await response.json();
        return data.results;
}

//Searching the movie from moviedb.org requesting using api
//https://developer.themoviedb.org/reference/search-movie
export const searchPopularMovies = async (query) =>{

    const resposne = await fetch(`${Base_URL}/search/movie?api_key = ${API_KEY}&query = ${encodeURIComponent(query)}`);
    const data = response.json();
    return data.results;

}
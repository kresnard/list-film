import axios from "axios";

const apiKey = "2c5ead0ae30f2c043cf3bda7d9c593bc"
const baseUrl = "https://api.themoviedb.org/3"

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}
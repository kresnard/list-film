import './App.css';
import { getMovieList, searcMovie } from "./api"
import { useEffect, useState } from "react";

const App = () => {

  const [popularMovies, setPopularMovies] = useState([])
  const imgUrl = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    getMovieList().then((result) => { 
      setPopularMovies(result)
     })
  }, [])

  const search = (q) => {
    console.log({ q })
  }

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img
            className="Movie-image"
            src={`${imgUrl}/${movie.poster_path}`}
            alt={movie.title} />
            <div className="Movie-date">release: {movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CHECK YOUR FAVORITE MOVIES</h1>
        <input 
          placeholder='type your favourite movie!' 
          className='Movie-search'
          onChange={({target})  => search(target.value)}
          />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;

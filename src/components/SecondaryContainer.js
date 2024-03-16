import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector((store) => store.movie);

  console.log(movies)



  return  movies && (
    <div className="bg-black" >
      <div className='-mt-48 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlaying}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"Trending"} movies={movies?.nowPlaying}/>
        <MovieList title={"Your Favorite"} movies={movies?.popularMovies}/>
      <MovieList title={"Try This"} movies={movies?.nowPlaying}/>

      </div>
    </div>
  )
}

export default SecondaryContainer
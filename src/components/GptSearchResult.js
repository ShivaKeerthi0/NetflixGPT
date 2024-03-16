import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


function GptSearchResult() {
    const gptMovieResults = ['Don', 'Bahubali', 'Hanuman', 'KGF', 'Leo'];
    const movies =  useSelector((store) => store.Gpt.movies);

  return  movies && (
    <div className='bg-black mt-2'>
        {
            gptMovieResults.map((movie, index) => (
                <MovieList key={movie} title={movie}  movies = {movies[index]}/>
            ))
        }
    </div>
  )
}

export default GptSearchResult
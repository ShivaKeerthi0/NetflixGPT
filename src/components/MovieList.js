import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies}) {

    
    
  return movies && (
    <div>
        <div className='text-2xl font-bold p-4 text-white'>
            {title}
        </div>
        <div className="flex overflow-scroll scrollbar-hide rounded-lg  p-2">
        <div className='flex'>
            {
                movies.map( (movie, index) => (
                    <MovieCard key ={index} posterPath ={movie.poster_path}/>
                ))
            }
        </div>
    </div>
    </div>
    
  )
}

export default MovieList
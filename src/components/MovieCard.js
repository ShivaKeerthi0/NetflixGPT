import React from 'react'
import {MOVIE_CARD_IMG_URL} from '../utils/constants'

function MovieCard({posterPath}) {
    if(!posterPath) return ;
      return (
    <div className="w-52 p-2 rounded-lg hover:w-60 h-60 z-30 h-52">
        <img alt="Movie Card" className='w-100% h-100%'
        src= {MOVIE_CARD_IMG_URL+posterPath}>
        </img>
    </div>
  )
}

export default MovieCard
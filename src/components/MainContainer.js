import React, { useEffect } from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';
import {TRAILER_API, OPTIONS} from '../utils/constants'

function MainContainer() {

    

    const movies = useSelector((store) => store?.movie?.nowPlaying)
    

    if(!movies) return;

    const mainMovie = movies[0];


    const {title, overview, id} = mainMovie;

    console.log(title, overview, id)


   


    
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer
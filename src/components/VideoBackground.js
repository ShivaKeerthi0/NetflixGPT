import React,{useEffect} from 'react'
import useAddTrailer from '../hooks/useAddTrailer'
import { useSelector } from 'react-redux'

function VideoBackground({movieId}) {

    const trailer= useSelector((store) => store.movie.trailerVideo)
    console.log(trailer?.key)
    useAddTrailer(movieId)

  return (
    <div>
        <iframe  
        className="w-screen aspect-video" title='main-video'
        src={"https://www.youtube.com/embed/" + trailer?.key+"?autoplay=1&mute=1&loop=1&rel=0&showinfo=0&playlist="+trailer?.key}
        >
        </iframe>
    </div>
  )
}

export default VideoBackground
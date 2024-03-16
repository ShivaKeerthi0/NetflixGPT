import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTrailerVideo } from '../utils/Store/movieSlice';
import { TRAILER_API, OPTIONS } from '../utils/constants';

const useAddTrailer = (movieId) => {
  
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movie.trailerVideo)

    const getTrialerForBackground = async () =>{

        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', OPTIONS);

        const json = await data.json(); 
    
        console.log(json)

        const filteredData  = json?.results.filter( (video) => video.type === 'Trailer');

        const trailer = filteredData.length ? filteredData[0] : json[0]

        dispatch(addTrailerVideo(trailer));
    }

    useEffect ( ()=>{

        !trailerVideo && getTrialerForBackground();

    }, [])
}

export default useAddTrailer
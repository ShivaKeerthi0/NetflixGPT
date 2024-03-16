import { useEffect } from "react";
import {OPTIONS, NOWPLAYING_MOVIES_API} from '../utils/constants'
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/Store/movieSlice";

const useNowPlaying = () => {

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movie.nowPlaying)

    const getNowPlayingMovies = async () =>{
        const data = await fetch(NOWPLAYING_MOVIES_API, OPTIONS)
      
        const json = await data.json();
      
        console.log(json.results);
    
        dispatch(addNowPlayingMovies(json.results));
      
    }
      
      useEffect(()=>{
      
        !nowPlayingMovies && getNowPlayingMovies();
      },[])
      
}



export default useNowPlaying
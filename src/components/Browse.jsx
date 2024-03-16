import { useEffect } from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlaying from '../hooks/useNowPlaying.js';
import usePopularMovies from '../hooks/usePopularMovies.js';
import { useSelector } from 'react-redux';
import GptSearchView from './GptSearchView'


const Browse = () => {

  const gptSearchView = useSelector((store)=> store.Gpt.GPTSearchView)
 
  useNowPlaying();
  usePopularMovies();

  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='h-3/12 w-screen z-10 '>
        <Header/>
      </div>
      <div className='h-9/12 w-screen' >
        {
          gptSearchView ? <GptSearchView/> :
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        }
      </div>
      
    </div>
  )
}

export default Browse
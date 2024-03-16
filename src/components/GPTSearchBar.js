import React, { useRef } from 'react'
import { BG_IMAGE } from '../utils/constants'
import { useSelector, useDispatch } from 'react-redux';
import lang from '../utils/assets/lang'
import openai from '../utils/openai'
import {OPTIONS} from '../utils/constants'
import {addMoviesInfo} from '../utils/Store/GptSlice'

function GPTSearchBar() {
    
    const language = useSelector((store) => store.appConfig);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchTMDBInfo = async (movie) =>{

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', OPTIONS)

        const json = await data.json();

        return json.results;
    }
    
    const searchButtonClick = async () => {

        //This gives chaGPT more context - As thi sis paid i did comment the code

        // const gptQuery = "Act as a movie recommedation system and suggest a few movies based on the query" + searchText.current.value+"GIve me around 5 movies list as a csv values";

        // const gptMovieResults = await openai.chat.completions.create({
        //     messages: [{ role: "user", content: gptQuery }],
        //     model: "gpt-3.5-turbo",
        // });

        const gptMovieResults = ['Don', 'Bahubali', 'Hanuman', 'KGF', 'Leo'];

        console.log(gptMovieResults);

        const promiseArray = gptMovieResults.map((movie) => searchTMDBInfo(movie)); // as the function returns promises , it returns array of promises

        const movies = await Promise.all(promiseArray); // resolves all the promises at a go
        
        console.log(movies);

        dispatch( addMoviesInfo(movies));

    
        searchText.current.value = "";
    }

    

  return (
    <div>
        <img  className="  w-screen h-screen object-cover"src={BG_IMAGE}/>
        <form onSubmit={
            (e) =>{
                e.preventDefault();
            }
        }
        className="bg-black w-6/12  h-16 rounded-lg  justify-center -mt-96 mx-auto">
            <input ref= {searchText}
            className=" w-9/12 mr-1 m-2 p-2  bg-white text-center rounded-lg font-bold text-lg"
            placeholder={lang[language?.lang].gptPlaceHolder}
            ></input>
            <button className="bg-red-500 p-2 mr-1 m-2 w-2/12 rounded-lg text-lg font-bold"
            onClick={()=>searchButtonClick()}>{lang[language?.lang].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar
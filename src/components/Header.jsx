import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {delUser} from '../utils/Store/userSlice';
import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase'
import { LOGO } from '../utils/constants';
import { addMoviesInfo, updateSearchView } from '../utils/Store/GptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/Store/appConfigSlice';






const Header = () => {
 const dispatch = useDispatch();
 const user = useSelector((store) => store.user)

 const searchView = useSelector((store) => store.Gpt.GPTSearchView)

const handleGPTSearchView = () =>{

  dispatch(updateSearchView())
  dispatch(changeLanguage('en'))
  dispatch(addMoviesInfo(null))

}
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black flex flex-wrap justify-between">
        <img className= "h-20 w-36 mx-1"  src= {LOGO} alt="logo"/>
        <div className="flex flex-wrap justify-center content-center">
          {
            user && searchView && (
              <select className='bg-transparent justify-center font-bold text-red-500' onChange={ (e) => {
                console.log(e.target.value);
                dispatch(changeLanguage(e.target.value))
              }}>
                {
                  (SUPPORTED_LANGUAGES).map((language) => (
                    <option  className ="bg-black" value={language.identifier} key={language.identifier}>{language.display}</option>
                  ))
                }
              Language</select>
            )
          }
        {
          user && (
            <button className="cursor-pointer justify-center m-2 p-2 border-white font-bold text-red-500 rounded-lg " 
          onClick = {
            ()=>{
              handleGPTSearchView()
            }
          }>{searchView ? "Browser Page" : "GPT Search Page" }</button>
          )
        }
        {user !== null  && <h2 className='m-2 p-2 justify-center  text-red-500 font-bold text-md'> {user?.email}</h2> }
        {user !== null  && <button className='cursor-pointer m-2 p-2 justify-center text-red-500 font-bold text-md' onClick={
          ()=>{
            signOut(auth);
            dispatch(delUser());
          }
        }>Sign out</button> }
        </div>
    </div>
  )
}

export default Header
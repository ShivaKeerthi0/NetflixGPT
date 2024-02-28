import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleForm = () =>{
        setIsSignInForm(!isSignInForm);
    }


  return (
    <div className="absolute">
        <Header/>
        <div className=" absolute  ml-[28rem] mt-32">
            
        <form className="w-8/12  h-full  bg-black rounded-lg text-black opacity-95">

            <h1 
                className=" py-4 px-8 m-2  font-bold text-white text-3xl w-full ">

                { isSignInForm ? "Sign In" : "Sign Up" }
            </h1>

            {
                !isSignInForm && (<input 
                    type="text" className="mx-8 my-4 px-4 py-4 w-10/12 text-center rounded-lg" placeholder="Full Name"/>)
            }

            <input 
                type="text" className="mx-8 my-4 px-4 py-4 w-10/12  text-center rounded-lg" placeholder="Email Address"/>
            
            <input 
                type="text" className="mx-8 my-4 px-4 py-4 w-10/12 rounded-lg text-center"  placeholder="Password"/>
            
            <button 
                className="mx-8  my-4 px-4 py-4 w-10/12 text-white  bg-red-500  font-bold text-2xl rounded-lg cursor-pointer">
                    
                    { isSignInForm ? "Sign In" : "Sign Up" }
            </button>

            <p className="mx-8 my-4 px-4 py-4 w-10/12 font-bold text-md cursor-pointer text-white hover:underline" onClick={handleForm}>
                { isSignInForm ? "Don't have an account ? Sign up now" : "Already have an account? Sign in now"}
            </p>

        </form>
        </div>
        <img  className=" w-screen h-screen"src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
    </div>
  )
}

export default Login




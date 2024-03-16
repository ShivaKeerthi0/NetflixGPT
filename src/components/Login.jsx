import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react';
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/Store/userSlice';
import { BG_IMAGE } from '../utils/constants';


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleForm = () =>{
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null); 
        
    }

    const handleFormValidations = () =>{


        console.log('Form validation');
        // console.log(email);
        // console.log(password);


        const message =  name != null ? validateData(email.current.value, password.current.value, name?.current?.value, isSignInForm) : 
                                        validateData(email.current.value, password.current.value, null, isSignInForm) 

        setErrorMessage(message);

        if(message !== null) return;

        if(!isSignInForm){

            // Signup logic is implemented here 

                
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    console.log("display name is :"+name.current.value);

                    updateProfile(user, {
                        displayName: name.current.value
                      }).then(() => {
                        email.current.value="";
                        password.current.value = "";
                        if(!isSignInForm){
                            name.current.value="";
                        }
                        console.log("Updated Profile Successfully!!!")
                      }).catch((error) => {
                        setErrorMessage("Failed to update Profile")
                      });

                    dispatch(addUser({email : user.email, displayName:user.displayName}));
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errMessage = error.message;
                    setErrorMessage(errMessage);
                });

        } else{

            // SignIn logic is implemented here 

            console.log("Signing in...");

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.email,user.displayName, user.name);
                // ...

                dispatch(addUser({email : user.email, displayName: user.displayName}));

                email.current.value="";
                password.current.value = "";
                if(!isSignInForm){
                    name.current.value="";
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errmsg = error.message;
                setErrorMessage(errmsg);
            });


        }

       

    }


  return (
    <div className="absolute">
        <Header/>
        <div className=" absolute  ml-[28rem] mt-32 rounded-lg shadow-lg" >
            
        <form  onSubmit={
            (e)=> {
                e.preventDefault()
            }
        }
        className="w-8/12  h-full  bg-black rounded-lg text-black opacity-95">

            <h1     
                className=" py-4 px-8 m-2  font-bold text-white text-3xl w-full ">

                { isSignInForm ? "Sign In" : "Sign Up" }
            </h1>

            {errorMessage!== null && <p className="text-red-600 font-bold text-lg  text-center p-2">{errorMessage}</p>}

            {
                !isSignInForm && (<input  ref ={name}
                    type="text" className="mx-8 my-4 px-4 py-4 w-10/12 text-center rounded-lg" placeholder="Full Name"/>)
            }

            <input  ref={email}
                type="text" className="mx-8 my-4 px-4 py-4 w-10/12  text-center rounded-lg" placeholder="Email Address"/>
            
            <input  ref={password}
                type="password" className="mx-8 my-4 px-4 py-4 w-10/12 rounded-lg text-center"  placeholder="Password"/>
            
            <button 
                className="mx-8  my-4 px-4 py-4 w-10/12 text-white  bg-red-500  font-bold text-2xl rounded-lg cursor-pointer"
                
                onClick={handleFormValidations}
                
                >
                    
                    { isSignInForm ? "Sign In" : "Sign Up" }
            </button>

            

            <p className="mx-8 my-4 px-4 py-4 w-10/12 font-bold text-md cursor-pointer text-white hover:underline "  onClick={handleForm}>
                { isSignInForm ? "Don't have an account ? Sign up now" : "Already have an account? Sign in now"}
            </p>


        </form>
        </div>
        <img  className="absoulte  w-screen h-screen"src={BG_IMAGE}/>
    </div>
  )
}

export default Login




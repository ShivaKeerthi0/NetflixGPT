import Body from "./components/Body";
import {Outlet, createBrowserRouter} from 'react-router-dom';
import Login from "./components/Login";
import Browse from "./components/Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; 
import { auth } from "./utils/firebase";
import Error from "./components/Error";
import { useDispatch } from "react-redux";
import { addUser,delUser } from "./utils/Store/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  
  const dispatch = useDispatch();
  const navigator = useNavigate();
  useEffect(()=>{

    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {email,displayName} = user;
        dispatch(addUser({ email : email,displayName : displayName}));
        navigator('/browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(delUser());
        navigator('/');
      }
    });

    return ()=>{
      unsubscribe();
    }
  
  }, [])


  return (
        <Outlet/>
  );
}

export const appRouter = createBrowserRouter([

  {
     path :'/',
     element : <App/>,
     children : [
      {
        path : '/',
        element : <Login/>
      },                         
      {
        path : '/browse', 
        element : <Browse/>
      }
     ],
     errorElement : <Error/>
  },
]);





export default App;

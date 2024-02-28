import React from 'react'
import {createRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

function Body() {

  const appRouter = createRouter([
    { 
      path: '/',
      element : <Login/>
    },
    {
      path : '/browse',
      element : <Browse/>
    }
  ])
  return (
   <RouterProvider routes={appRouter}>
    
   </RouterProvider>
  )
}

export default Body
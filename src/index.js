import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App,{appRouter} from './App';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/Store/appStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store = {appStore}>
    <RouterProvider router={appRouter}>
        <App/>
    </RouterProvider>
    </Provider>
  
);
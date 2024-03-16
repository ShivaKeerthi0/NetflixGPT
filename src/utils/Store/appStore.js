import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import GPTReducer from './GptSlice'
import appConfigReducer from './appConfigSlice'


const appStore = configureStore({
    reducer:{
        user : userReducer,
        movie : movieReducer,
        Gpt : GPTReducer,
        appConfig : appConfigReducer,
    }
})


export default appStore;
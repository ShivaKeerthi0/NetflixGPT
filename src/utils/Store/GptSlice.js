import { createSlice } from "@reduxjs/toolkit"



const GptSlice = createSlice({

    name : 'GPTSearch',
    initialState : {
        GPTSearchView : false,
        movies : null,
    },
    reducers :{
       
        updateSearchView : (state, action) => {
            state.GPTSearchView = !state.GPTSearchView;
        },
        
        addMoviesInfo : (state, action) => {
            state.movies = action.payload;
        }
    }
})




export const {updateSearchView,addMoviesInfo} = GptSlice.actions;

export default GptSlice.reducer
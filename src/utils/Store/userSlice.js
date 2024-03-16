import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name : 'user',
    initialState : null,
    reducers : {
        'addUser' : (state, action) =>{
             // we can either modifiy a state or return a state.

             return action.payload

        },
        'delUser' : (state, action) =>{
            return null;
        },
    }
})



export const {addUser, delUser} = userSlice.actions;

export default userSlice.reducer;
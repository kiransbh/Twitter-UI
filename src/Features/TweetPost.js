import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { Twitterusername:"kiran@0777", displayname:"kiran" };

export const PostSlice = createSlice({
    name: 'post',
    initialState:{ value:initialStateValue },
    reducers:{
        Twitteruser:(state, action) => {
            state.value = action.payload;
        }
    }
});

export const { Twitteruser } = PostSlice.actions;

export default PostSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { email:"" };

export const userSlice = createSlice({
    name: 'email',
    initialState:{ value:initialStateValue },
    reducers:{
        userAuth:(state, action) => {
            state.value = action.payload;
        }
    }
});

export const { userAuth } = userSlice.actions;

export default userSlice.reducer;
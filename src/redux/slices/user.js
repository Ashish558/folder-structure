

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isAuthenticated: false
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateAuth: (state, {payload}) =>{
            state.isAuthenticated = payload
        }
    }
})

export const { updateAuth } = user.actions
export default user.reducer

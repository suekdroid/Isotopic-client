import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated: false,
        username: 'derp'
    },
    reducers: {
        signIn: (state, action) => {
            state.authenticated = true
            state.username = action.payload.username
        },
        signOut: state => {
            state.authenticated = false 
            state.username = 'merp'
        }
    }
})

export const {
    signIn,
    signOut
} = userSlice.actions

export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        msg: '',
        type: 'info',
    },
    reducers: {
        setNotification: (state, action) => {
            state.msg = action.payload.msg
            state.type = action.payload.type
        },
        clearNotification: (state) => {
            state.msg = ''
            state.type = 'info'
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer
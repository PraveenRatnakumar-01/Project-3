import { createSlice } from '@reduxjs/toolkit';

const INITIALSTATE= {
    userId: "",
    userName: "",
    isAdmin: true
}

const authSlice = createSlice({
    name:"Authentication", initialState: INITIALSTATE, 
    reducers: {
        Login: () => { console.log("Login executed") },       //action
        Logout: () => { console.log("Logout executed") }
    }
})

export const { Login, Logout } = authSlice.actions
export default authSlice.reducer;
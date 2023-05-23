import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     firstName: "",
     lastName: ""
}

 export const userSLice = createSlice({
    name:user,
    initialState,
    reducers: {
        setFirstName: (state,action)=>{
            state.firstName = action.payload
        }
    }
 })
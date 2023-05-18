import {createSlice}  from '@reduxjs/toolkit'


const initialState = {
    firstName:"",
    lastName:""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFIrstName: (state,action)=>{
            state.firstName = action.payload
        }
    }
})
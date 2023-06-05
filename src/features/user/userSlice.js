import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    firstName: '',
    lastName: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setFirstName:(state,actions)=>{
            state.firstName = action.payload
        }
    }
})
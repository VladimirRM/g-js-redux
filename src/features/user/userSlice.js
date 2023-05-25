import { createSlice} from "@reduxjs/toolkit"




const initialState = {
    firstName: '',
    lastName: "",
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer:{
           setFirstName: (state,action)=>{
            state.firstName = action.payload
           },
           setLastName: (state,action)=>{
            state.lastName = action.payload
           }
    }
})

export const  {setFirstName,setLastName} = createSlice.actions
export default userSlice.reducer
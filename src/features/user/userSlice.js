import  {createSlice} from "@reduxjs/toolkit"

const initialState = {
    firstname: "",
    lastname:"",
}

export const userSlice = createSlice({
    name:" user",
    initialState,
    reducers:{
        setFirstName: (state,action)=>{
            state.firstname = action.payload
        }
    }
})

export const {setFirstName} = userSlice.actions
export default userSlice.reducer
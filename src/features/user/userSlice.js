import { createSlice } from "@reduxjs/toolkit";



const initialState = ({
    firstName: '',
    lastName: "",
}

)

export  const userSlice = createSlice({

        name: 'user',
        initialState,
        reducers: {
            setFirstName: (state,action)=>{
                state.firstName = state.action.payload
            },
            setLastName:(state,action)=>{
                state.lastName = state.action.payload
            }
        }

        
        
        
    })
    export const { setFirstName, setLastName} = userSlice.actions
    export default userSlice.reducer 
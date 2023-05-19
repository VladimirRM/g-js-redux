import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [],
}

export const  todoSlice = createSlice({
    todos,
    initialState,
    reducers: {
        addTodo: (state,action)=>{

        }
    }
})

export const {addTodo}  = todoSlice.actions
export default todoSlice.reducer


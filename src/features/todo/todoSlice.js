import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [],
}

export const todoSLice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            state.todos.push(action.payload) 
        }
    }
})

export const { addTodo} = todoSLice.actions
export default todoSLice.reducer
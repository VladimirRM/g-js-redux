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
        },
        toggleCompletedTodo:(state,action)=>{
            const toggleTodo = state.todos.find(todo=> todo.id ===action.payload)
        }
    }
})

export const { addTodo} = todoSLice.actions
export default todoSLice.reducer
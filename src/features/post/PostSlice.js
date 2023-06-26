import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    posts:[],
}


export const getPosts = createAsyncThunk({
    
})

export const postSlice = createSlice({
    name: posts,
    initialState:{
        reducers:{
            setPosts:(state,action)=>{
                state.posts = action.payload
            }
        }
    }
})

export const {setPosts} = postSlice.actions
export default postSlice.reducer





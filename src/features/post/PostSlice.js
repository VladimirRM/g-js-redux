import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    posts:[],
}


export const getPosts = createAsyncThunk(
    
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts:(state,action)=>{
            state.posts = action.payload
        }
    }
})

export const {setPost} = postSlice.actions
export default postSlice.reducer


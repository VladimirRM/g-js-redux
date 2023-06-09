import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = { 
    posts:[],
}

export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        setPosts: (state,action)=>{
            state.posts = action.payload
        }
    }
})

export const {setPosts} = postSlice.actions
export default postSlice.reducer
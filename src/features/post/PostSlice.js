import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    posts:[],
}

export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        setPostsCreate:(state,action)=>{
            state.posts = action.payload
        }
    }
})



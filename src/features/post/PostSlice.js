// https://jsonplaceholder.typicode.com/posts

import { createSlice } from "@reduxjs/toolkit";


const initialState = createSlice{
    posts: [],

}


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts:()=>{
            state.posts = action.payload 
        }
    }
})

export






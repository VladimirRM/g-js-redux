import {createSlice }  from '@reduxjs/toolkit'


const initialState = {
    posts: [],
}


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts:(state,action)=>{
            state.posts = action.payload
        }
    }
})
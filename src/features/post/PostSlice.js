import {createSlice} from '@reduxjs/toolkit'
// https://jsonplaceholder.typicode.com/posts

const initialState = {
    posts: [],
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
          
    }
})

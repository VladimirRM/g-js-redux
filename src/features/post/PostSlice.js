import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// https://jsonplaceholder.typicode.com/posts

const initialState = {
    posts: [],
}

export const getPosts = createAsyncThunk ({
    
})

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
          
    }
})

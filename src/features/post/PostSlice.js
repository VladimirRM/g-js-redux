import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
// https://jsonplaceholder.typicode.com/posts

const initialState = {
    posts: [],
}

export const getPosts = createAsyncThunk (
    "posts/getPosts",async (_,{rejectWithValue})=>{
       const result = await axios
    }

)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
          
    }
})

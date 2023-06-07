import {createSlice,  createAsyncThunk}  from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    posts:[],
}

export const getPosts = createAsyncThunk(
    'posts/getPosts', async (_,{rejectWithValue})=>{
      const res = await axios.get(' https://jsonplaceholder.typicode.com/posts')
    }
)

export const postSlice = createSlice({
    name: postSlice,
    initialState,
    reducer:{
         
    }
})


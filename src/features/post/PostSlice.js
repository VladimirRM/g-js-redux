import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    posts:[],
}

export const getPosts = createAsyncThunk(
    'posts/getPosts', async (_,{rejectWithValue,dispatch})=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    } 
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


export const {setPosts}  = postSlice.actions
export default postSlice.reducer

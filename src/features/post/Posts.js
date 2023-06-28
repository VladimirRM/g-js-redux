import React from 'react'
import PostItem from './PostItem'
import { useSelector,useDispatch } from 'react-redux'

const Posts = () => {

    const dispatch = useDispatch()

    const posts = useSelector((state)=>state.post.posts)
    return (
        <div>
            <button
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>
            {posts?.map((post)=> (
            <PostItem 
            key={post.title}
            />
     
            ))}
        </div>
    )
}

export default Posts
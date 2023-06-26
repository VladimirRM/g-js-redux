import React from 'react'
import PostItem from './PostItem'
import {useDispatch,useSelector}  from 'react-redux'

const Posts = () => {

    const dispatch =useDispatch()

    const posts = useSelector((state)=>state.post.posts)
    return (
        <div>
            <button
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
               onClick={()=>dispatch(getPosts())}
            >
                Get posts
            </button>
            {posts?.map((post)=>(
            <PostItem 
            post={post}
            
            key={post.title}/>

            ))}
        </div>
    )
}

export default Posts

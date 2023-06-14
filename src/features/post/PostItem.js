import React from 'react'
import { useDispatch } from 'react-redux'
import { deletedPostById } from './PostSlice'

const PostItem = ({post}) => {

    const dispatch = useDispatch()
    return (
        <div className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'
        onClick={()=> dispatch(deletedPostById(post.id))}
        >
            {post.title}
        </div>
    )
}

export default PostItem
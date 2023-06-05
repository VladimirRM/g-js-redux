import React from 'react'
import { useSelector } from 'react-redux'


const FirstName = () => {
    const lastName = useSelector((state)=>state.user.lastName)
    return <div className='font-bold'>{lastName}</div>
}

export default FirstName
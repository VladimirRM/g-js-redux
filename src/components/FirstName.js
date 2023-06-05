import React from 'react'
import { useSelector } from 'react-redux'

const FirstName = () => {

    const name = useSelector((state)=> state.user.firstName)
    return <div className='font-bold'>First Name</div>
}

export default FirstName
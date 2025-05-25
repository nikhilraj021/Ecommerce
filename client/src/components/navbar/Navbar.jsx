import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-gray-500 absolute top-0 w-full' >
            <h1 className='text-2xl font-bold text-white'>Ecommerce</h1>
            <button className='border px-2 py-1 rounded-md text-white'>Logout</button>
        </nav>
    )
}

export default Navbar
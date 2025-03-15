import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className='w-full px-10 py-2 mx-auto  text-center bg-primary  '>
                <ul className='flex gap-20 justify-center items-center m-auto'>
                    <li className='hover:text-purple-200'>Services</li>
                    <li className='hover:text-purple-200'>Skills</li>
                    <li className='hover:text-purple-200'>Product</li>
                    <li className='hover:text-purple-200'>Blog</li>
                    <li className='hover:text-purple-200'><button className='btn btn-dark'>Let's Talk</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

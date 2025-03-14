import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className='w-fit px-10 py-2 mx-auto my-2 border rounded-2xl'>
                <ul className='flex justify-center items-center gap-10 m-auto'>
                    <li>Services</li>
                    <li>Skills</li>
                    <li>Product</li>
                    <li>Blog</li>
                    <li><button className='btn btn-primary'>Let's Talk</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

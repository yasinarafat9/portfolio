import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'


const Main = () => {
    return (
        <div className=''>
            <Navbar/>
            <Outlet />
        </div>
    )
}

export default Main

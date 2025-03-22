import React from 'react'
import Wrapper from './Wrapper'

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <Wrapper>
                <div className="navbar flex justify-between ">
                    <div className="navbar-start">
                        <div className="dropdown md:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-lg dropdown-content bg-base-100  z-1 mt-1 w-52 pb-10 left-[-10px] shadow ">
                                <li className=''><a>Services</a></li>
                                <li className=''><a>Skills</a></li>
                                <li className=''><a>About</a></li>
                                <li className=''><a>Contact</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Muhammad Yasin Arafat</a>
                    </div>
                   
                    <ul className='navber-end flex justify-between items-center gap-5 invisible md:visible md:blcok'>
                        <li><a>Services</a></li>
                        <li><a>Skills</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    {/* <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div> */}
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar

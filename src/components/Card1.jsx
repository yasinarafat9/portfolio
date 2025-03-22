import React from 'react'
import { Link } from 'react-router'

const Card1 = ({ data }) => {
    return (
        <Link to={data.pageRoute}>
            <div className=' hover:scale-[102%] duration-200 ease-in-out '>
                <img className='w-full h-[240px] md:h-[300px] object-cover' src={data.cardImg} alt="" />
                <div className='bg-gray-800 py-3'>
                    <h4 className='text-center font-semibold '>{data.title}</h4>
                </div>
            </div>
        </Link>
    )
}

export default Card1

import React from 'react'

const Card1 = ({data }) => {
    return (
        <div className=' rounded-lg hover:scale-[102%] duration-200 ease-in-out '>
            <img className='w-full h-[300px] object-cover' src={data.cardImg} alt="" />
            <div className='bg-gray-800 py-2'>
                <h4 className='text-center font-semibold py-3'>{data.title}</h4>
            </div>
        </div>
    )
}

export default Card1

import React from 'react'

const Card3 = ({ imgLink, title, texts }) => {
    return (
        <div className='p-3 bg-gray-900 max-w-[300px] '>
            <img className='w-[300px] h-[200px] object-cover' src={imgLink} alt="" />
            <div className='flex flex-col justify-between'>

                <div>
                    <h4 className='text-primary text-xl my-2'>{title}</h4>
                    <p className='text-xs'>{texts}</p>
                </div>
                <div className=' '>
                    <button className='btn btn-primary my-2'>Select This Theme</button>
                </div>
            </div>
        </div>
    )
}

export default Card3

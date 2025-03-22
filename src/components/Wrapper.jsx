import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-[1080px] m-auto'>
      {children}
    </div>
  )
}

export default Wrapper

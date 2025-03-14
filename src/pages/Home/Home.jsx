import React from 'react'
import Wrapper from '../../components/Wrapper'

const Home = () => {
  return (
    <>
      <section className='relative'>
        <div className='m-auto relative'>
          <img className='m-auto w-[1000px] h-[600px] object-cover' src="https://i.pinimg.com/736x/4d/62/e9/4d62e9562c5c93b567d9e20150c7806e.jpg" alt="" />
          <div className='absolute top-70 right-200 '>
            <h1 className='text-4xl'>Designer &</h1>
            <h1 className='text-4xl'> Web Devoloper</h1>
          </div>
        </div>
      </section>


      <Wrapper>
        <section className='mt-10 mx-auto '>
          <h1 className='text-center text-5xl mb-10'>Services</h1>

          <div className='grid md:grid-cols-4 gap-4'>
            <div className=' rounded-lg'>
              <img className='w-full h-[200px] object-cover' src="https://i.pinimg.com/736x/d2/0d/cd/d20dcdd6c7a77c7a110ba3767902cf26.jpg" alt="" />
              <div>
                <h4 className='text-center font-semibold py-3'>Art/Image Editing</h4>
              </div>
            </div>
            <div className=' rounded-lg'>
              <img className='w-full h-[200px] object-cover' src="https://i.pinimg.com/736x/97/c7/b4/97c7b4a4f4cbb8fc7c5cf210f2051adb.jpg" alt="" />
              <div>
                <h4 className='text-center font-semibold py-3'>Video Creation</h4>
              </div>
            </div>
            <div className=' rounded-lg'>
              <img className='w-full h-[200px] object-cover' src="https://i.pinimg.com/736x/e1/b6/c1/e1b6c1e8d45eadc175c3abfe8b8694f1.jpg" alt="" />
              <div>
                <h4 className='text-center font-semibold py-3'>Website Devolopment</h4>
              </div>
            </div>
            <div className=' rounded-lg'>
              <img className='w-full h-[200px] object-cover' src="https://i.pinimg.com/736x/a1/a3/5c/a1a35cdaec7db958fa8e6a2cc8ef80a5.jpg" alt="" />
              <div>
                <h4 className='text-center font-semibold py-3'>3D Modeling</h4>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
      <br />
      <br />
      <br />
      <br />
    </>

  )
}

export default Home

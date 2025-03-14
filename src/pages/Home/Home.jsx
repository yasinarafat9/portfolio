import React from 'react'
import Wrapper from '../../components/Wrapper'
import Card1 from '../../components/Card1'
import Card2 from '../../components/Card2'

const Home = () => {

  const services = [
    {
      title: "Art and Image Editing",
      cardImg: "https://i.pinimg.com/736x/d2/0d/cd/d20dcdd6c7a77c7a110ba3767902cf26.jpg"
    },
    {
      title: "Video Creation",
      cardImg: "https://i.pinimg.com/736x/03/7f/d2/037fd24802f9d193cdfa502f9de66e50.jpg"
    },
    {
      title: "Website Devolopment",
      cardImg: "https://i.pinimg.com/736x/e0/ff/c5/e0ffc588a25df6fa93acd1680a0113d9.jpg"
    },
    {
      title: "3D Modeling",
      cardImg: "https://i.pinimg.com/736x/f9/02/ad/f902adcf1a39c3e3725ef66a827e701e.jpg"
    }
  ]


  const projects = [
    {
      category: '',
      title: 'Image Editing with gradient and blur steps',
      cardImg: 'https://i.pinimg.com/736x/48/01/e1/4801e173808191d5c205a58e5e9db609.jpg'
    },
    {
      category: '',
      title: 'Digital Skretch Image ',
      cardImg: 'https://i.pinimg.com/736x/35/d4/e8/35d4e8b0cc901dc0a5d45a719d7e4f78.jpg'
    },
    {
      category: '',
      title: ' KREMLIN ',
      cardImg: 'https://i.pinimg.com/736x/4e/46/9d/4e469dadbcd7032835bced6289449366.jpg'
    },
    {
      category: '',
      title: ' BLACK AND WHITE ',
      cardImg: 'https://i.pinimg.com/736x/20/65/21/206521d6326850db0936a4f08bb78fd3.jpg'
    },
  ]

  return (
    <>
      {/* BANNER */}
      <section className='relative mt-10'>
        <div className='m-auto relative'>
          <img className='m-auto w-[1000px] h-[600px] object-cover  hover:scale-[105%] duration-200 ease-in-out ' src="https://i.pinimg.com/736x/4d/62/e9/4d62e9562c5c93b567d9e20150c7806e.jpg" alt="" />
          <div className='absolute top-70 right-200  hover:scale-[120%] duration-300 ease-in-out '>
            <h1 className='text-4xl'>Designer &</h1>
            <h1 className='text-4xl'> Web Devoloper</h1>
          </div>
        </div>
      </section>



      {/* SERVICE */}
      <Wrapper>
        <section className='mt-20 mx-auto bg-gray-900 p-10 py-20'>
          <h1 className='text-center text-5xl mb-10'>Services</h1>

          <div className='grid md:grid-cols-4 gap-4'>
            {
              services.map((data, index) => (
                <Card1 key={index} data={data}></Card1>
              ))
            }
          </div>
        </section>


        {/* SELECTED WORK */}
        <section className='mt-40'>
          <div className='flex justify-between items-center'>
            <h2 className='text-3xl'>Selected Work</h2>
            <div className='flex gap-5 text-red-400'>
              <button>Random Projects View</button>
              <button>Art and Image Editing</button>
              <button>Video Creation</button>
              <button>Website Devolopment</button>
              <button>3D Modeling</button>
            </div>
          </div>

          <div className='m-auto grid md:grid-cols-2 gap-10 mt-10'>
            {
              projects.map((data, index) => (
                <Card2 key={index} data={data}></Card2>
              ))
            }
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

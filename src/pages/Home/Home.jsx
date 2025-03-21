
import Wrapper from '../../components/Wrapper'
import Card1 from '../../components/Card1'
import Card2 from '../../components/Card2'
import Services from './Services'
import Reviews from './Reviews'

const Home = () => {





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
      {/* <section className='relative mt-10'>
        <div className='m-auto relative'>
          <img className='m-auto w-[1000px] h-[600px] object-cover  hover:scale-[105%] duration-200 ease-in-out ' src="https://i.pinimg.com/736x/4d/62/e9/4d62e9562c5c93b567d9e20150c7806e.jpg" alt="" />
          <div className='absolute top-70 right-200  hover:scale-[120%] duration-300 ease-in-out '>
            <h1 className='text-4xl'>Designer &</h1>
            <h1 className='text-4xl doto-font'> Web Devoloper</h1>
          </div>
        </div>
      </section> */}



      {/* SERVICE */}
      {/* <Wrapper> */}
        <Services />


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



        {/* Reviews */}
        <Reviews />
      {/* </Wrapper> */}
      <br />
      <br />
      <br />
      <br />
    </>

  )
}

export default Home

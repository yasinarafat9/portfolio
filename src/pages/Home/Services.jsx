import React from 'react'
import Card1 from '../../components/Card1'

const Services = () => {
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

    return (
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
    )
}

export default Services

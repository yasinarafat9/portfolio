import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <section className='mx-auto mt-30 bg-gray-900 p-10'>
            <div className='my-10 mb-15 '>
                <h3 className='text-3xl text-center'>Client Reviews</h3>
            </div>

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-[250px]">
                {
                    reviews.map(item => (
                        <SwiperSlide key={item.id}  >
                            <div className=''>
                                <div className='flex items-center gap-4 pb-5'>
                                    <img src={item.imageLink} className='rounded-full size-16 ' alt="" />
                                    <h4 className='text-2xl '>{item.username}</h4>
                                </div>
                                <p>{item.comment}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>

    )
}

export default Reviews

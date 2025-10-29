'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const reviews = [
    {
        "id": 1,
        "review": "Courses was fantastic! It is a master platform for those looking to start a new career, or need a refresher.",
        "name": "Jacob Jones",
        "role": "Student, National University",
        "image": "/reviews/Jacob Jones.jpg"
    },
    {
        "id": 2,
        "review": "The instructors were very knowledgeable, and the course content was easy to follow. Highly recommend this platform!",
        "name": "Emily Carter",
        "role": "Software Engineer, Google",
        "image": "/reviews/Emily Carter.jpg"
    },
    {
        "id": 3,
        "review": "I loved how practical the lessons were. It really helped me land my first job in web development!",
        "name": "Michael Lee",
        "role": "Frontend Developer, Freelance",
        "image": "/reviews/Michael lee.jpg"
    },
    {
        "id": 4,
        "review": "This platform made learning so much fun! The interactive quizzes and projects kept me motivated all the way through.",
        "name": "Sophia Rodriguez",
        "role": "UX Designer, Startup Studio",
        "image": "/reviews/Sophia Rodriguez.jpg"
    },
    {
        "id": 5,
        "review": "I've taken many online courses before, but none were as structured and engaging as this one. Totally worth it!",
        "name": "Daniel Kim",
        "role": "Data Analyst, Microsoft",
        "image": "/reviews/Daniel-Kim.jpg"
    },
    {
        "id": 6,
        "review": "Excellent support and great learning experience. The mentors are very helpful and responsive!",
        "name": "Avi Patel",
        "role": "Student, Open University",
        "image": "/reviews/Avi Patel.jpeg"
    }
]

const Swipper_Reviews = () => {
    return (
        <div className='bg-[#f4f0fa] mt-6 sm:mt-8 lg:mt-10 py-12 sm:py-16 lg:py-20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ 
                        clickable: true,
                        el: '.custom-review-pagination',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}>
                    {reviews.map((res, idx) =>
                    (
                        <SwiperSlide key={idx}>
                            <div className='flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6'>
                                <img src='/logo.png' className='w-16 h-14 sm:w-20 sm:h-16 lg:w-[80px] lg:h-[72px] mb-6 sm:mb-8' alt="" />
                                <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-4'>
                                    {res.review}
                                </p>
                                <div className='mb-4 sm:mb-5'>
                                    <img src={res.image} className='h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover' alt="" />
                                </div>
                                <p className='text-base sm:text-lg font-semibold text-gray-900 mb-1'>{res.name}</p>
                                <p className='text-sm sm:text-base text-gray-600'>{res.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-review-pagination flex justify-center mt-8 sm:mt-10 lg:mt-12"></div>
            </div>
        </div>
    );
};

export default Swipper_Reviews;
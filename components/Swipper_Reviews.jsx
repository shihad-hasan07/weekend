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
        "review": "I’ve taken many online courses before, but none were as structured and engaging as this one. Totally worth it!",
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
        <div className='bg-[#f4f0fa] mt-10'>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1} 
                className="">
                {reviews.map((res, idx) =>
                (
                    <SwiperSlide key={idx}>
                        <div className='border flex flex-col  items-center'>
                            <img src='/logo.png' className='w-[80] h-[72]' alt="" />
                            <p>{res.review}</p>
                            <div>
                                <img src={res.image} className='h-16 w-16' alt="" />
                            </div>
                            <p>{res.name}</p>
                            <p>{res.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Swipper_Reviews;
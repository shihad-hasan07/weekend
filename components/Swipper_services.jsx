'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FiMonitor } from 'react-icons/fi';
import { MdDesignServices, MdKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineLineChart } from 'react-icons/ai';
import { PiDesktopTower } from "react-icons/pi";

const courses = [
    {
        title: "Interaction Design",
        desc: "Lessons on modern design trends and best practices todaytodaytodaytodaytoday.",
        color: "bg-white text-black",
        icon: <PiDesktopTower size={28} className='text-blue-500 font-bold' />,
    },
    {
        title: "UX Design Course",
        desc: "Learn UX principles and latest web design methods easily.",
        color: "bg-white text-black",
        icon: <FiMonitor size={26} className="text-blue-500" />,
    },
    {
        title: "User Interface Design",
        desc: "Explore user interface design trends and modern techniques.",
        color: "bg-white text-black",
        icon: <AiOutlineLineChart size={26} className="text-pink-500" />,
    },
    {
        title: "Web Design Mastery",
        desc: "Advanced lessons to master modern web UI/UX design skills.",
        color: "bg-white text-black",
        icon: <MdDesignServices size={26} className="text-purple-500" />,
    },
    {
        title: "Product Design",
        desc: "Understand design thinking and innovative creative solutions.",
        color: "bg-white text-black",
        icon: <AiOutlineLineChart size={26} className="text-yellow-500" />,
    },
    {
        title: "Design Systems",
        desc: "Build reusable components for consistent modern design easily.",
        color: "bg-white text-black",
        icon: <FiMonitor size={26} className="text-green-500" />,
    },
    {
        title: "Responsive Design",
        desc: "Make designs work perfectly on all devices smoothly today.",
        color: "bg-white text-black",
        icon: <AiOutlineLineChart size={26} className="text-cyan-500" />,
    }
];



export default function CardCarousel() {
    return (
        <div className="container mx-auto py-12">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {courses.map((course, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='min-h-[210px]  p-6 rounded-2xl border flex flex-col justify-between'>
                            <div className='flex items-center gap-4'>
                                <div className='border rounded-lg p-2 bg-[#fce7f6]'>{course.icon}</div>
                                <div className='text-2xl font-bold'>{course.title}</div>
                            </div>
                            <p className='text-gray-500 my-5'>{course.desc}</p>
                            <div className='text-[#4AC8AE] text-[18px] gap-2 flex items-center'>
                                <button>Learn More</button>
                                <MdKeyboardArrowRight  size={24} className='pt-1'/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

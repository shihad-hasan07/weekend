import Image from 'next/image';
import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import ReactRating from './ReactRating';

const Card = ({ res }) => {
    const { id, category, title, description, rating, reviews, duration,
        instructor, instructorImage, enrolled, price, image } = res

    return (
        <div className='p-4 sm:p-5 lg:p-6 border rounded-lg drop-shadow-sm backdrop-blur-3xl bg-white'>
            <div className='relative min-h-[200px] sm:min-h-[220px] lg:min-h-[250px]'>
                <Image
                    src={`${image}`} alt={title}
                    fill placeholder='blur' className='rounded-md object-cover'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
                />

                <p className='absolute font-semibold right-1 sm:right-2 top-1 sm:top-2 rounded-[4] text-[#8892a8] text-[11px] sm:text-xs lg:text-[14px] border bg-white px-1.5 sm:px-2 py-0.5'>
                    {
                        (() => {
                            let hour, minute;
                            if (duration > 60) {
                                hour = Math.floor(duration / 60)
                                minute = duration % 60
                            }
                            else {
                                minute = duration
                            }
                            return hour > 0 ? `${hour} hr ${minute} minute` : `${minute} minute`;
                        })
                            () // ei line er extra bracket gulo hosse .. arrow function take bananor por () er maddhome call kra hoyese
                    }
                </p>
            </div>
            <p className='my-3 sm:my-4 font-semibold text-sm sm:text-base text-gray-500'>{category}</p>
            <div className='flex justify-between items-center text-lg sm:text-xl lg:text-2xl font-semibold'>
                <p>{title}</p>
                <MdOutlineArrowOutward className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
            </div>

            <p className='text-[#667085] my-3 sm:my-4 text-sm sm:text-base'>{description}</p>

            <div className='flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base'>
                <p className='text-gray-500 font-semibold'>{rating}</p>
                <div className='pb-[2]'><ReactRating rating={rating} /></div>
                <p className='text-gray-500'>({reviews})</p>
            </div>

            <div className='flex justify-between items-end mt-6 sm:mt-7 lg:mt-8'>
                <div className='flex gap-2 sm:gap-3'>
                    <img className='w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full' src={instructorImage} alt={instructor} />
                    <div>
                        <p className='text-gray-700 font-semibold text-sm sm:text-base'>{instructor}</p>
                        <p className='text-gray-500 text-xs sm:text-sm'>{enrolled} Enrolled</p>
                    </div>
                </div>
                <div className='text-xl sm:text-2xl lg:text-[26px] text-[#3FC89E] font-bold'>${price}</div>
            </div>

        </div>
    );
};

export default Card;
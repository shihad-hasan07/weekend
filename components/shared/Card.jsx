
import Image from 'next/image';
import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import ReactRating from './ReactRating';

const Card = ({ res }) => {
    const { id, category, title, description, rating, reviews, duration,
        instructor, instructorImage, enrolled, price, image } = res

    return (
        <div className='p-6 rounded-lg drop-shadow-sm backdrop-blur-3xl bg-white'>
            <div className='relative min-h-[250]'>
                <Image
                    src={`${image}`} alt={title}
                    fill placeholder='blur' className='rounded-md object-cover'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
                />

                <p className='absolute font-semibold right-2 top-2 rounded-[4] text-[#8892a8] text-[14px] border bg-white px-2'>
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
            <p className='my-4 font-semibold text-gray-500'>{category}</p>
            <div className='flex justify-between items-center text-2xl font-semibold'>
                <p>{title}</p>
                <MdOutlineArrowOutward />
            </div>

            <p className='text-[#667085] my-4'>{description}</p>

            <div className='flex gap-2 items-center'>

                <span className='text-gray-500 font-semibold'>{rating}</span>


                <div className='mt-1'><ReactRating rating={rating} /></div>
                
                <span className='text-gray-500'>({reviews})</span>
            </div>

            <div className='flex justify-between items-end mt-8'>
                <div className='flex gap-3'>
                    <img className='w-12 h-12 rounded-full' src={instructorImage} alt={instructor} />
                    <div>
                        <p className='text-gray-700 font-semibold'>{instructor}</p>
                        <p className='text-gray-500'>{enrolled} Enrolled</p>
                    </div>
                </div>
                <div className='text-[26px] text-[#3FC89E] font-bold '>${price}</div>
            </div>

        </div>
    );
};

export default Card;
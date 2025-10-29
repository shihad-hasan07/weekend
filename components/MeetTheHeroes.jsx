import React from 'react';
import Heading_SubHeading from './shared/Heading_SubHeading';
import Link from 'next/link';

const heroes = [
    {
        "image": "theHeroes/person1.png",
        "name": "Theresa Webb",
        "position": "Application Support Analyst Lead",
        "formerpost": 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'
    },
    {
        "image": "theHeroes/person2.png",
        "name": "Courtney Henry",
        "position": "Director, Undergraduate Analytics and Planning",
        "formerpost": "Lead engineering teams at Figma, Pitch, and Protocol Labs."
    },
    {
        "image": "theHeroes/person3.png",
        "name": "Albert Flores",
        "position": "Career Educator",
        "formerpost": "Former PM for Linear, Lambda School, and On Deck."
    },
    {
        "image": "theHeroes/person4.png",
        "name": "Marvin McKinney",
        "position": "Co-op & Internships Program & Operations Manager",
        "formerpost": "Former frontend dev for Linear, Coinbase, and Postscript."
    },
]

const MeetTheHeroes = () => {
    return (
        <div className='pt-4 sm:pt-5 lg:pt-6 container mx-auto px-4 sm:px-6 lg:px-8'>
            <Heading_SubHeading title={'Tutors'} details={'Meet the Heroes'}></Heading_SubHeading>
            <p className='text-center text-gray-500 text-sm sm:text-base lg:text-[18px] mt-3 sm:mt-4 lg:mt-5 px-2'>
                On Weekend UX, instructors from all over the world instruct millions of students. <br className='hidden sm:block' /> We offer the knowledge and abilities.
            </p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10'>
                {
                    heroes.map((res, idx) =>
                        <div key={idx} className='bg-[#f9fafb] p-4 sm:p-5 lg:p-6 flex flex-col justify-between items-center text-center'>
                            <img src={res.image} className='w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20' alt="" />
                            <p className='text-base sm:text-lg font-semibold mt-3 sm:mt-4'>{res.name}</p>
                            <p className='text-[#22B286] text-sm sm:text-base mt-1 sm:mt-2'>{res.position}</p>
                            <p className='text-[#667085] text-xs sm:text-sm lg:text-base mt-2 sm:mt-3'>{res.formerpost}</p>

                            <div className='mt-3 sm:mt-4 flex justify-center gap-2 sm:gap-3'>
                                <Link href='https://x.com/' target='_blank'>
                                    <img src="/theHeroes/Vector.png" alt="" className='w-4 h-4 sm:w-5 sm:h-5' />
                                </Link>
                               
                                <Link href='https://www.linkedin.com/' target='_blank'>
                                    <img src="/theHeroes/Group.png" alt="" className='w-4 h-4 sm:w-5 sm:h-5' />
                                </Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MeetTheHeroes;
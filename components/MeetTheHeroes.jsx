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
        <div className='pt-6 container mx-auto'>
            <Heading_SubHeading title={'Tutors'} details={'Meet the Heroes'}></Heading_SubHeading>
            <p className='text-center text-gray-500 text-[18px] mt-5'>On Weekend UX, instructors from all over the world instruct millions of students. <br /> We offer the knowledge and abilities.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    heroes.map((res, idx) =>
                        <div key={idx} className='bg-[#f9fafb] p-6 flex flex-col justify-between items-center text-center'>
                            <img src={res.image} className='w-20 h-20' alt="" />
                            <p className=''>{res.name}</p>
                            <p className='text-[#22B286]'>{res.position}</p>
                            <p className='text-[#667085]'>{res.formerpost}</p>

                            <div className='mt-4 flex justify-center gap-3'>
                                <Link href='https://x.com/' target='_blank'><img src="/theHeroes/Vector.png" alt="" /></Link>
                               
                                <Link href='https://www.linkedin.com/' target='_blank'><img src="/theHeroes/Group.png" alt="" /></Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MeetTheHeroes;
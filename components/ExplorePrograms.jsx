import React from 'react';
import Heading_SubHeading from './shared/Heading_SubHeading';
import fetch_courses from './shared/fetch_courses';
import Swipper_PopularClass from './Swipper_PopularClass';
import Link from 'next/link';


const courses = [
    {
        "id": 1,
        "category": "Design",
        "title": "Figma UI UX Design",
        "description": "Use Figma to get a job in UI Design, User Interface, User Experience design.",
        "rating": 4.3,
        "reviews": 16325,
        "duration": 492,
        "instructor": "Jane Cooper",
        "instructorImage": "https://i.ibb.co.com/gZmqKjLf/JANCO.jpg",
        "enrolled": 2801,
        "price": 17.84,
        "image": "https://i.ibb.co.com/1tvyq9p3/download.webp"
    },
    {
        "id": 2,
        "category": "Design",
        "title": "Learn With Shihad",
        "description": "Design websites and mobile apps that your users love and return to again.",
        "rating": 3.9,
        "reviews": 832,
        "duration": 363,
        "instructor": "Jenny Wilson",
        "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
        "enrolled": 2001,
        "price": 8.99,
        "image": "https://i.ibb.co.com/G4PnvfGb/OIP.webp"
    },
    {
        "id": 3,
        "category": "Design",
        "title": "Building User Interface",
        "description": "Learn how to apply User Experience (UX) principles to your website designs.",
        "rating": 4.2,
        "reviews": 125,
        "duration": 62,
        "instructor": "Esther Howard",
        "instructorImage": "https://i.ibb.co.com/90WqNgy/mechanical-engineering-student-from-london-england-offering-engaging-lessons-english-math-and-physic.jpg",
        "enrolled": 2209,
        "price": 11.70,
        "image": "https://i.ibb.co.com/r2FGb8Wf/OIP.webp"
    },
    {
        "id": 4,
        "category": "Development",
        "title": "Complete JavaScript Bootcamp",
        "description": "Master JavaScript from scratch and build powerful web applications.",
        "rating": 4.7,
        "reviews": 9284,
        "duration": 765,
        "instructor": "Cody Fisher",
        "instructorImage": "https://i.ibb.co.com/gZmqKjLf/JANCO.jpg",
        "enrolled": 3204,
        "price": 14.99,
        "image": "https://i.ibb.co.com/j9VRCxng/maxresdefault.jpg"
    },
    {
        "id": 5,
        "category": "Development",
        "title": "React for Beginners",
        "description": "Learn the fundamentals of React and build dynamic web interfaces.",
        "rating": 4.5,
        "reviews": 6421,
        "duration": 568,
        "instructor": "Robert Fox",
        "instructorImage": "https://i.ibb.co.com/bR5jykFK/OIF.jpg",
        "enrolled": 4102,
        "price": 12.50,
        "image": "https://i.ibb.co.com/v6kkFNWy/OIP.webp"
    },
    {
        "id": 6,
        "category": "Development",
        "title": "Node.js and Express Masterclass",
        "description": "Build scalable backend applications using Node.js and Express framework.",
        "rating": 4.6,
        "reviews": 3521,
        "duration": 617,
        "instructor": "Savannah Nguyen",
        "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
        "enrolled": 2890,
        "price": 13.75,
        "image": "https://i.ibb.co.com/Ldyx803t/1-WHMo-Bw40-Ed3zp2y-NDksoyw.png"
    },
    {
        "id": 7,
        "category": "Design",
        "title": "Adobe XD for Beginners",
        "description": "Learn how to create stunning UI/UX prototypes with Adobe XD.",
        "rating": 4.1,
        "reviews": 542,
        "duration": 276,
        "instructor": "Courtney Henry",
        "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
        "enrolled": 1450,
        "price": 9.20,
        "image": "https://i.ibb.co.com/gZKvmPtp/OIP.webp"
    },
    {
        "id": 8,
        "category": "Marketing",
        "title": "Digital Marketing Essentials",
        "description": "Understand SEO, social media marketing, and analytics to grow your brand.",
        "rating": 4.8,
        "reviews": 8245,
        "duration": 671,
        "instructor": "Guy Hawkins",
        "instructorImage": "https://i.ibb.co.com/bR5jykFK/OIF.jpg",
        "enrolled": 5201,
        "price": 15.30,
        "image": "https://i.ibb.co.com/C5psQCzV/why-digital-marketing-important.jpg"
    },
    {
        "id": 9,
        "category": "Photography",
        "title": "Master Mobile Photography",
        "description": "Capture professional-quality photos with just your smartphone camera.",
        "rating": 4.0,
        "reviews": 1489,
        "duration": 322,
        "instructor": "Kathryn Murphy",
        "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
        "enrolled": 890,
        "price": 7.50,
        "image": "https://i.ibb.co.com/d0C6BYzj/Master-Mobile-Filmmaking-in-20-Minutes.jpg"
    },
    {
        "id": 10,
        "category": "Development",
        "title": "Full Stack MERN Crash Course",
        "description": "Learn MongoDB, Express, React, and Node.js to build full-stack web apps.",
        "rating": 4.9,
        "reviews": 12567,
        "duration": 940,
        "instructor": "Darlene Robertson",
        "instructorImage": "https://i.ibb.co.com/bR5jykFK/OIF.jpg",
        "enrolled": 5104,
        "price": 19.99,
        "image": "https://i.ibb.co.com/xtvf413d/download.webp"
    }
]

const ExplorePrograms = async () => {
    // const courses = await fetch_courses()


    return (
        <div className='container mx-auto my-6 sm:my-8 lg:my-10 px-4 sm:px-6 lg:px-8'>
            <Heading_SubHeading position={'left'} title={'Explore Programs'} details={'Our Most Popular Class'}></Heading_SubHeading>
            <p className='text-[#667085] text-base sm:text-lg lg:text-[20px] mt-2 sm:mt-3'>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>

            <div className='px-0 sm:px-2 lg:px-4 my-5 sm:my-6 lg:my-7'>
                <Swipper_PopularClass></Swipper_PopularClass>
            </div>
            <div className='flex justify-center items-center'>
                <Link href='/courses'>
                    <button className='cursor-pointer bg-[#f9fafb] mt-2 px-3 sm:px-4 py-1 sm:py-1.5 font-semibold text-xs sm:text-sm text-center border rounded-sm'>Explore All Programs</button>
                </Link>
            </div>
        </div>
    );
};

export default ExplorePrograms;
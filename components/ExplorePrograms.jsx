import React from 'react';
import Heading_SubHeading from './shared/Heading_SubHeading';
import fetch_courses from './shared/fetch_courses';
import Card from './shared/Card';

const ExplorePrograms = async () => {
    const courses = await fetch_courses()


    return (
        <div className='container  mx-auto mt-10'>
            <Heading_SubHeading position={'left'} title={'Explore Programs'} details={'Our Most Popular Class'}></Heading_SubHeading>
            <p className='text-[#667085] text-[20px]'>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>

            {/* courses */}
            <div>
                {
                    courses.map((res, idx) => <Card res={res} key={idx}></Card>)
                }
            </div>
        </div>
    );
};

export default ExplorePrograms;
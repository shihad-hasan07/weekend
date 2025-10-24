import React from 'react';
import Heading_SubHeading from './shared/Heading_SubHeading';
import CardCarousel from './Swipper';

const OurServices = () => {
    return (
        <div className='mt-20'>
            <Heading_SubHeading title={'Our Services'} details={'Fostering a playful & engaging learning environment'}></Heading_SubHeading>
            <CardCarousel></CardCarousel>
        </div>
    );
};

export default OurServices;
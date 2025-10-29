import React from 'react';

const Heading_SubHeading = ({ position, title, details }) => {
    return (
        <div className={`${position == 'left' ? '':'flex flex-col items-center text-center'} `}>
            <p className='text-gray-400 font-semibold text-sm sm:text-base lg:text-lg'>{title}</p>
            <p className='text-[#101828] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] lg:max-w-190 mt-1'>{details}</p>
        </div>
    );
};

export default Heading_SubHeading;
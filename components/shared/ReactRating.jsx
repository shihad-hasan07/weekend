// 'use client'
// import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";




// const ReactRating = ({ rating }) => {
   

//     return (
//         <>
           
//         </>
//     )
// };

// export default ReactRating;




'use client';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

const ReactRating = ({ rating }) => {
  return (
    <ReactStars
      count={5}                 
      value={5}         
      edit={false}               
      isHalf={true}              
      size={21}                  
      activeColor="#ff9b26"    
      color="#e0e0e0"         
      emptyIcon={<MdOutlineStarOutline />}
      filledIcon={<MdOutlineStarPurple500 />}
    />
  );
};

export default ReactRating;

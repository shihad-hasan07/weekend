import React from 'react';

const Card = ({ res }) => {
    const { id, category, title, description, rating, reviews, duration, instructor, enrolled, price, image } = res
    
    return (
        <div>
            {id}
        </div>
    );
};

export default Card;
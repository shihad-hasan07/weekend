'use client'
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import Rating from "react-rating";

const ReactRating = ({ rating }) => {
    return (
        <>
            <Rating
                initialRating={rating}
                fullSymbol={<MdOutlineStarPurple500 size={21} color="ff9b26" />}
                emptySymbol={<MdOutlineStarOutline size={21} color="ff9b26" />}
                fractions={10}
                readonly
            />

        </>
    );
};

export default ReactRating;
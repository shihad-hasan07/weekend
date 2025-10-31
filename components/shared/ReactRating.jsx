'use client'
import dynamic from 'next/dynamic'

const ReactStars = dynamic(() => import('react-stars'), { ssr: false })

export default function ReactRating({ rating }) {
    return (
        <>
            <ReactStars
                count={5}
                size={22}
                value={rating}
                edit={false}
                color2="#ffd700"
            />
        </>
    )
}
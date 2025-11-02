
// export default async function fetch_courses() {
//     const res = await fetch('http://localhost:3000//api/courses')
//     const data = await res.json()

//     return data
// };


'use client'


import { useEffect, useState } from "react";

const fetch_courses = async () => {

    const res = await fetch('http://localhost:3000/api/courses')
    const ress = await res.json()
    return ress;
};

export default fetch_courses;


// https://weekend-iota.vercel.app/
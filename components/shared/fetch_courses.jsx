
export default async function fetch_courses() {
    const res = await fetch('https://weekend-iota.vercel.app/api/courses')
    const data = await res.json()

    return data
};


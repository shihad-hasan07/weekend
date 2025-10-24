
export default async function fetch_courses() {
    const res = await fetch('http://localhost:3000/api/courses')
    const data = await res.json()

    return data
};

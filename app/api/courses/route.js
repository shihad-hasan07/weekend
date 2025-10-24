import courses from '@/public/db/courses.json';

export async function GET() {
  return Response.json(courses);
}
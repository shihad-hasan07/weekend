'use client'
import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import ReactRating from '@/components/shared/ReactRating';

const Card = ({ res }) => {
    const { id, category, title, description, rating, reviews, duration,
        instructor, instructorImage, enrolled, price, image } = res;

    return (
        <div className='flex flex-col justify-between p-4 sm:p-5 lg:p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
            <div className='relative h-[200px] sm:h-[220px] lg:h-[250px] mb-4'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-full rounded-md object-cover'
                />
                <p className='absolute font-semibold right-2 top-2 rounded text-gray-600 text-xs lg:text-sm border bg-white px-2 py-1'>
                    {
                        (() => {
                            let hour, minute;
                            if (duration > 60) {
                                hour = Math.floor(duration / 60);
                                minute = duration % 60;
                            } else {
                                minute = duration;
                            }
                            return hour > 0 ? `${hour}h ${minute}m` : `${minute}m`;
                        })()
                    }
                </p>
            </div>

            <p className='mb-3 font-semibold text-sm sm:text-base text-gray-500'>{category}</p>

            <div className='flex justify-between items-start gap-2 mb-3'>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold line-clamp-2'>{title}</h3>
            </div>

            <p className='text-gray-600 mb-4 text-sm sm:text-base line-clamp-2'>{description}</p>

            <div className='flex  items-center gap-2 text-sm sm:text-base mb-6'>
                <p className='text-gray-700 font-semibold'>{rating}</p>
                <div className='pb-0.5'>
                    <ReactRating rating={rating} />
                </div>
                <p className='text-gray-500'>({reviews})</p>
            </div>

            <div className='flex justify-between items-end'>
                <div className='flex gap-3'>
                    <img className='w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover' src={instructorImage} alt={instructor} />
                    <div>
                        <p className='text-gray-700 font-semibold text-sm sm:text-base'>{instructor}</p>
                        <p className='text-gray-500 text-xs sm:text-sm'>{enrolled} Enrolled</p>
                    </div>
                </div>
                <div className='text-xl sm:text-2xl lg:text-3xl font-bold' style={{ color: '#20b486' }}>${price}</div>
            </div>
        </div>
    );
};

const CoursesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('popular');

    const courses = [
        {
            "id": 1,
            "category": "Design",
            "title": "Figma UI UX Design",
            "description": "Use Figma to get a job in UI Design, User Interface, User Experience design.",
            "rating": 4.3,
            "reviews": 16325,
            "duration": 492,
            "instructor": "Jane Cooper",
            "instructorImage": "https://i.ibb.co.com/gZmqKjLf/JANCO.jpg",
            "enrolled": 2801,
            "price": 17.84,
            "image": "https://i.ibb.co.com/1tvyq9p3/download.webp"
        },
        {
            "id": 2,
            "category": "Design",
            "title": "Learn With Shihad",
            "description": "Design websites and mobile apps that your users love and return to again.",
            "rating": 3.9,
            "reviews": 832,
            "duration": 363,
            "instructor": "Jenny Wilson",
            "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
            "enrolled": 2001,
            "price": 8.99,
            "image": "https://i.ibb.co.com/G4PnvfGb/OIP.webp"
        },
        {
            "id": 3,
            "category": "Design",
            "title": "Building User Interface",
            "description": "Learn how to apply User Experience (UX) principles to your website designs.",
            "rating": 4.2,
            "reviews": 125,
            "duration": 62,
            "instructor": "Esther Howard",
            "instructorImage": "https://i.ibb.co.com/90WqNgy/mechanical-engineering-student-from-london-england-offering-engaging-lessons-english-math-and-physic.jpg",
            "enrolled": 2209,
            "price": 11.70,
            "image": "https://i.ibb.co.com/r2FGb8Wf/OIP.webp"
        },
        {
            "id": 4,
            "category": "Development",
            "title": "Complete JavaScript Bootcamp",
            "description": "Master JavaScript from scratch and build powerful web applications.",
            "rating": 4.7,
            "reviews": 9284,
            "duration": 765,
            "instructor": "Cody Fisher",
            "instructorImage": "https://i.ibb.co.com/gZmqKjLf/JANCO.jpg",
            "enrolled": 3204,
            "price": 14.99,
            "image": "https://i.ibb.co.com/j9VRCxng/maxresdefault.jpg"
        },
        {
            "id": 5,
            "category": "Development",
            "title": "React for Beginners",
            "description": "Learn the fundamentals of React and build dynamic web interfaces.",
            "rating": 4.5,
            "reviews": 6421,
            "duration": 568,
            "instructor": "Robert Fox",
            "instructorImage": "https://i.ibb.co.com/bR5jykFK/OIF.jpg",
            "enrolled": 4102,
            "price": 12.50,
            "image": "https://i.ibb.co.com/v6kkFNWy/OIP.webp"
        },
        {
            "id": 6,
            "category": "Development",
            "title": "Node.js and Express Masterclass",
            "description": "Build scalable backend applications using Node.js and Express framework.",
            "rating": 4.6,
            "reviews": 3521,
            "duration": 617,
            "instructor": "Savannah Nguyen",
            "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
            "enrolled": 2890,
            "price": 13.75,
            "image": "https://i.ibb.co.com/Ldyx803t/1-WHMo-Bw40-Ed3zp2y-NDksoyw.png"
        },
        {
            "id": 7,
            "category": "Design",
            "title": "Adobe XD for Beginners",
            "description": "Learn how to create stunning UI/UX prototypes with Adobe XD.",
            "rating": 4.1,
            "reviews": 542,
            "duration": 276,
            "instructor": "Courtney Henry",
            "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
            "enrolled": 1450,
            "price": 9.20,
            "image": "https://i.ibb.co.com/gZKvmPtp/OIP.webp"
        },
        {
            "id": 8,
            "category": "Marketing",
            "title": "Digital Marketing Essentials",
            "description": "Understand SEO, social media marketing, and analytics to grow your brand.",
            "rating": 4.8,
            "reviews": 8245,
            "duration": 671,
            "instructor": "Guy Hawkins",
            "instructorImage": "https://i.ibb.co.com/bR5jykFK/OIF.jpg",
            "enrolled": 5201,
            "price": 15.30,
            "image": "https://i.ibb.co.com/C5psQCzV/why-digital-marketing-important.jpg"
        },
        {
            "id": 9,
            "category": "Photography",
            "title": "Master Mobile Photography",
            "description": "Capture professional-quality photos with just your smartphone camera.",
            "rating": 4.0,
            "reviews": 1489,
            "duration": 322,
            "instructor": "Kathryn Murphy",
            "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
            "enrolled": 890,
            "price": 7.50,
            "image": "https://i.ibb.co.com/d0C6BYzj/Master-Mobile-Filmmaking-in-20-Minutes.jpg"
        },
        {
            "id": 10,
            "category": "Development",
            "title": "Full Stack MERN Crash Course",
            "description": "Learn MongoDB, Express, React, and Node.js to build full-stack web apps.",
            "rating": 4.9,
            "reviews": 12567,
            "duration": 940,
            "instructor": "Darlene Robertson",
            "instructorImage": "https://i.ibb.co.com/bR5jykFK/OIF.jpg",
            "enrolled": 5104,
            "price": 19.99,
            "image": "https://i.ibb.co.com/xtvf413d/download.webp"
        },
        {
            "id": 11,
            "category": "Development",
            "title": "Python Programming Fundamentals",
            "description": "Start your programming journey with Python and build real-world projects.",
            "rating": 4.4,
            "reviews": 5678,
            "duration": 480,
            "instructor": "Jane Cooper",
            "instructorImage": "https://i.ibb.co.com/gZmqKjLf/JANCO.jpg",
            "enrolled": 3890,
            "price": 13.99,
            "image": "https://i.ibb.co.com/99n3jB5C/python-programming-language-programing-workflow-260nw-1846209262.webp"
        },
        {
            "id": 12,
            "category": "Business",
            "title": "Entrepreneurship Essentials",
            "description": "Learn how to start and grow your own successful business from scratch.",
            "rating": 4.3,
            "reviews": 2341,
            "duration": 390,
            "instructor": "Jenny Wilson",
            "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
            "enrolled": 2567,
            "price": 16.50,
            "image": "https://i.ibb.co.com/40rMWsQ/1654672568391.webp"
        },
        {
            "id": 13,
            "category": "Design",
            "title": "Illustration Masterclass",
            "description": "Master digital illustration techniques and create stunning artwork.",
            "rating": 4.6,
            "reviews": 1876,
            "duration": 425,
            "instructor": "Esther Howard",
            "instructorImage": "https://i.ibb.co.com/90WqNgy/mechanical-engineering-student-from-london-england-offering-engaging-lessons-english-math-and-physic.jpg",
            "enrolled": 1980,
            "price": 18.75,
            "image": "https://i.ibb.co.com/hRgN9nH7/depositphotos-506592740-stock-illustration-art-master-class-illustration.webp"
        },
        {
            "id": 14,
            "category": "Development",
            "title": "Angular Complete Guide",
            "description": "Build modern web applications with Angular framework from basics to advanced.",
            "rating": 4.5,
            "reviews": 4532,
            "duration": 680,
            "instructor": "Cody Fisher",
            "instructorImage": "https://i.ibb.co.com/gZmqKjLf/JANCO.jpg",
            "enrolled": 3456,
            "price": 15.99,
            "image": "https://i.ibb.co.com/4xNHphq/Download-File-in-Angular-JS.webp"
        },
        {
            "id": 15,
            "category": "Marketing",
            "title": "Content Marketing Strategy",
            "description": "Create compelling content that drives engagement and conversions.",
            "rating": 4.2,
            "reviews": 3214,
            "duration": 310,
            "instructor": "Robert Fox",
            "instructorImage": "https://i.ibb.co.com/bR5jykFK/OIF.jpg",
            "enrolled": 2789,
            "price": 12.99,
            "image": "https://i.ibb.co.com/bgZnJCx6/content-marketing-news-social-media-websites-and-advertising-concept.webp"
        },
        {
            "id": 16,
            "category": "Photography",
            "title": "Professional Portrait Photography",
            "description": "Learn portrait photography techniques used by professional photographers.",
            "rating": 4.7,
            "reviews": 1956,
            "duration": 545,
            "instructor": "Savannah Nguyen",
            "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
            "enrolled": 1654,
            "price": 19.50,
            "image": "https://i.ibb.co.com/TZ6Bggx/Student-learning-to-become-a-professional-photographer.webp"
        },
        {
            "id": 17,
            "category": "Business",
            "title": "Financial Planning & Analysis",
            "description": "Master financial modeling, budgeting, and forecasting for business success.",
            "rating": 4.4,
            "reviews": 2890,
            "duration": 420,
            "instructor": "Courtney Henry",
            "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
            "enrolled": 2345,
            "price": 17.25,
            "image": "https://i.ibb.co.com/JwfC2xy5/premium-photo-1661434638236-410c530e70a3.webp"
        },
        {
            "id": 18,
            "category": "Development",
            "title": "Vue.js Modern Web Development",
            "description": "Build reactive and progressive web applications using Vue.js framework.",
            "rating": 4.6,
            "reviews": 3987,
            "duration": 590,
            "instructor": "Guy Hawkins",
            "instructorImage": "https://i.ibb.co.com/bR5jykFK/OIF.jpg",
            "enrolled": 3102,
            "price": 14.75,
            "image": "https://i.ibb.co.com/67hYrqvQ/vueschool-tech-logos.webp"
        },
        {
            "id": 19,
            "category": "Design",
            "title": "Motion Graphics with After Effects",
            "description": "Create stunning animations and motion graphics for videos and presentations.",
            "rating": 4.8,
            "reviews": 2765,
            "duration": 635,
            "instructor": "Kathryn Murphy",
            "instructorImage": "https://i.ibb.co.com/RpwwzhMB/OIP.jpg",
            "enrolled": 2456,
            "price": 21.99,
            "image": "https://i.ibb.co.com/h1920N07/Adobe-After-Effects.webp"
        },
        {
            "id": 20,
            "category": "Marketing",
            "title": "Social Media Marketing Pro",
            "description": "Master Instagram, Facebook, TikTok marketing strategies that actually work.",
            "rating": 4.5,
            "reviews": 5432,
            "duration": 385,
            "instructor": "Darlene Robertson",
            "instructorImage": "https://i.ibb.co.com/bR5jykFK/OIF.jpg",
            "enrolled": 4567,
            "price": 13.50,
            "image": "https://i.ibb.co.com/GvsnRss8/cef9af3a5c1f1debcd994c4ba05381f4.webp"
        }
    ];

    const categories = ['All', ...new Set(courses.map(course => course.category))];

    const filteredAndSortedCourses = useMemo(() => {
        let filtered = courses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        switch (sortBy) {
            case 'popular':
                return filtered.sort((a, b) => b.enrolled - a.enrolled);
            case 'rating':
                return filtered.sort((a, b) => b.rating - a.rating);
            case 'price-low':
                return filtered.sort((a, b) => a.price - b.price);
            case 'price-high':
                return filtered.sort((a, b) => b.price - a.price);
            default:
                return filtered;
        }
    }, [searchQuery, selectedCategory, sortBy, courses]);

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #e8f5f1 0%, #f0fdf9 100%)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="mb-10 sm:mb-12 relative overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(135deg, #20b486 0%, #17a374 100%)' }}>
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-5 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-5 left-10 w-56 h-56 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10">
                        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-8">
                            <div className="flex-1 text-white text-center lg:text-left w-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 text-white rounded-full text-xs font-semibold mb-3 sm:mb-4 bg-[#49bd99] bg-opacity-20 backdrop-blur-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                    {courses.length} COURSES AVAILABLE
                                </div>

                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 leading-tight">
                                    Explore Our <span className="text-yellow-300">Premium Courses</span>
                                </h1>

                                <p className="text-white text-opacity-90 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0">
                                    Join thousands of learners and master new skills with expert instructors
                                </p>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                                    <div>
                                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                            {courses.reduce((sum, c) => sum + c.enrolled, 0).toLocaleString()}+
                                        </div>
                                        <div className="text-white text-opacity-80 text-xs sm:text-sm">Students</div>
                                    </div>
                                    <div className="w-px bg-white bg-opacity-30"></div>
                                    <div>
                                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                            {courses.length}
                                        </div>
                                        <div className="text-white text-opacity-80 text-xs sm:text-sm">Courses</div>
                                    </div>
                                    <div className="w-px bg-white bg-opacity-30"></div>
                                    <div>
                                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                            {[...new Set(courses.map(c => c.instructor))].length}
                                        </div>
                                        <div className="text-white text-opacity-80 text-xs sm:text-sm">Instructors</div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:flex gap-3">
                                <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl flex items-center justify-center text-2xl xl:text-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30">
                                    🎓
                                </div>
                                <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl flex items-center justify-center text-2xl xl:text-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30">
                                    📚
                                </div>
                                <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl flex items-center justify-center text-2xl xl:text-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30">
                                    ⭐
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 space-y-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-sm sm:text-base"
                            style={{ focusRing: '2px solid #20b486' }}
                            onFocus={(e) => e.target.style.borderColor = '#20b486'}
                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Filter className="w-4 h-4 text-gray-600" />
                                <span className="text-sm font-medium text-gray-700">Category</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category
                                            ? 'text-white'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                            }`}
                                        style={selectedCategory === category ? { backgroundColor: '#20b486' } : {}}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="sm:w-48">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-sm bg-white"
                                style={{ focusRing: '2px solid #20b486' }}
                                onFocus={(e) => e.target.style.borderColor = '#20b486'}
                                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                            >
                                <option value="popular">Most Popular</option>
                                <option value="rating">Highest Rated</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <p className="text-gray-600 text-sm sm:text-base">
                        Showing {filteredAndSortedCourses.length} {filteredAndSortedCourses.length === 1 ? 'course' : 'courses'}
                    </p>
                </div>

                {filteredAndSortedCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredAndSortedCourses.map(course => (
                            <Card key={course.id} res={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-gray-400 mb-4">
                            <Search className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoursesPage;
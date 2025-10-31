'use client'
import { useState } from 'react';
import { LuMailPlus } from "react-icons/lu";
import { ChevronDown, Book, GraduationCap, Clock, Award, Mail, Search } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqCategories = [
        {
            category: "Getting Started",
            icon: <Book className="w-5 h-5" />,
            questions: [
                {
                    question: "How do I create an account?",
                    answer: "Click on the 'Sign Up' button in the top right corner, fill in your details including name, email, and password, then verify your email address to activate your account."
                },
                {
                    question: "What courses are available?",
                    answer: "We offer a wide range of courses including programming, design, business, marketing, and personal development. Browse our course catalog to see all available options with detailed descriptions and previews."
                },
                {
                    question: "How do I enroll in a course?",
                    answer: "Once logged in, navigate to the course page and click the 'Enroll Now' button. You'll be guided through the payment process if it's a paid course, or you can start learning immediately for free courses."
                }
            ]
        },
        {
            category: "Course Access",
            icon: <GraduationCap className="w-5 h-5" />,
            questions: [
                {
                    question: "How long do I have access to a course?",
                    answer: "Once you enroll in a course, you have lifetime access to all course materials, including future updates and additional content added by the instructor."
                },
                {
                    question: "Can I download course materials?",
                    answer: "Yes, most courses allow you to download lecture slides, PDFs, and supplementary materials. Video lectures can be watched online or downloaded for offline viewing through our mobile app."
                },
                {
                    question: "Can I access courses on mobile devices?",
                    answer: "Absolutely! Our platform is fully responsive and works on all devices. We also have dedicated mobile apps for iOS and Android for a better learning experience on the go."
                }
            ]
        },
        {
            category: "Learning Experience",
            icon: <Clock className="w-5 h-5" />,
            questions: [
                {
                    question: "Can I learn at my own pace?",
                    answer: "Yes! All our courses are self-paced, allowing you to learn whenever it's convenient for you. There are no strict deadlines, so you can take your time to fully understand each concept."
                },
                {
                    question: "Are there live classes or sessions?",
                    answer: "Most courses are pre-recorded for flexible learning. However, some premium courses include live Q&A sessions with instructors, which are scheduled in advance and recordings are available afterward."
                },
                {
                    question: "Can I interact with instructors?",
                    answer: "Yes! You can ask questions in the course discussion forums, and instructors regularly respond. Premium courses may also include direct messaging with instructors and mentor support."
                }
            ]
        },
        {
            category: "Certificates & Progress",
            icon: <Award className="w-5 h-5" />,
            questions: [
                {
                    question: "Will I receive a certificate?",
                    answer: "Yes, upon completing a course and passing all assessments, you'll receive a certificate of completion that you can share on LinkedIn or add to your resume."
                },
                {
                    question: "How is my progress tracked?",
                    answer: "Your progress is automatically saved as you complete lessons. You can view your overall progress, quiz scores, and time spent learning in your personal dashboard."
                },
                {
                    question: "Can I retake quizzes?",
                    answer: "Yes, you can retake quizzes as many times as needed. Your highest score will be recorded, and you can review correct answers to learn from mistakes."
                }
            ]
        }
    ];

    const allQuestions = faqCategories.flatMap((category, catIndex) =>
        category.questions.map((q, qIndex) => ({
            ...q,
            categoryIndex: catIndex,
            questionIndex: qIndex,
            category: category.category,
            icon: category.icon
        }))
    );

    const filteredCategories = searchQuery
        ? [{
            category: "Search Results",
            icon: <Search className="w-5 h-5" />,
            questions: allQuestions.filter(q =>
                q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }]
        : faqCategories;

    return (
        <div className="min-h-screen ">
            {/* Header */}
            <div className="">
                <div className="max-w-5xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg mb-8">
                        Everything you need to know about our e-learning platform
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-300 shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* Stats Cards */}
                {!searchQuery && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-emerald-100 p-2 rounded-lg">
                                    <Book className="w-5 h-5 text-emerald-600" />
                                </div>
                                <h3 className="font-semibold text-gray-700">50+ Courses</h3>
                            </div>
                            <p className="text-sm text-gray-500">Wide range of topics</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-teal-100 p-2 rounded-lg">
                                    <GraduationCap className="w-5 h-5 text-teal-600" />
                                </div>
                                <h3 className="font-semibold text-gray-700">10k+ Students</h3>
                            </div>
                            <p className="text-sm text-gray-500">Active learners worldwide</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cyan-500">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-cyan-100 p-2 rounded-lg">
                                    <Award className="w-5 h-5 text-cyan-600" />
                                </div>
                                <h3 className="font-semibold text-gray-700">Certificates</h3>
                            </div>
                            <p className="text-sm text-gray-500">On course completion</p>
                        </div>
                    </div>
                )}

                {/* FAQ Categories */}
                {filteredCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-10">
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="bg-emerald-500 text-white p-3 rounded-lg">
                                {category.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{category.category}</h2>
                            <div className="flex-1 h-px bg-gray-200 ml-4"></div>
                        </div>

                        {/* Questions */}
                        <div className="space-y-3">
                            {category.questions.length > 0 ? (
                                category.questions.map((faq, questionIndex) => {
                                    const globalIndex = `${categoryIndex}-${questionIndex}`;
                                    const isOpen = openIndex === globalIndex;

                                    return (
                                        <div
                                            key={questionIndex}
                                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(globalIndex)}
                                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                            >
                                                <span className="text-base font-medium text-gray-800 pr-4">
                                                    {faq.question}
                                                </span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>

                                            <div
                                                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
                                                    } overflow-hidden`}
                                            >
                                                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    No questions found matching your search.
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {/* Contact Card */}
                <div className="mt-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <div className="inline-block bg-[#3fbb9c] bg-opacity-20 p-3 rounded-lg mb-3">
                                <LuMailPlus className='w-8 h-8' />
                                {/* <Mail className="w-6 h-6" /> */}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                            <p className="text-emerald-50">
                                Our support team is here to help you 24/7
                            </p>
                        </div>
                        <Link href='/contact-us'>
                            <button className="cursor-pointer bg-emerald-50 text-emerald-600  px-8 py-3 rounded-lg font-semibold hover:bg-[#3fbb9c] hover:text-white transition-colors shadow-lg whitespace-nowrap">
                                Contact Support
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
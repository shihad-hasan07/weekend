const Banner = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12'>

                {/* left side */}
                <div className="relative order-2 lg:order-1">
                    <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-snug lg:leading-19'>
                        Up Your <span className='text-[#20b486]'>Skills</span>
                        <br />To <span className='text-[#20b486]'>Advance</span> Your
                        <br /> <span className='text-[#20b486]'>Career</span> Path
                    </p>
                    <p className="max-w-full sm:max-w-2/3 my-4 sm:my-5 lg:my-7 text-sm sm:text-base text-gray-500">
                        Learn UI-UX Design skills with weekend UX . The latest online learning system and material that help your knowledge growing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                        <button className='bg-[#20B486] px-5 sm:px-6 lg:px-7 text-base sm:text-lg py-2.5 sm:py-3 rounded-lg font-semibold text-white'>
                            Get Started
                        </button>
                        <button className="bg-[#eafff9] px-5 sm:px-6 lg:px-7 text-base sm:text-lg py-2.5 sm:py-3 rounded-lg font-semibold text-[#20b486]">
                            Get free trial
                        </button>
                    </div>

                    <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-wrap gap-4 sm:gap-6 lg:gap-10">
                        <div className="flex items-center gap-2">
                            <img src="/banner/speakilng.png" alt="" className="w-8 sm:w-10 lg:w-auto" />
                            <p className="text-sm sm:text-base lg:text-[17px] text-gray-500 font-semibold">Public Speaking</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/banner/Briefcase.png" alt="" className="w-8 sm:w-10 lg:w-auto" />
                            <p className="text-sm sm:text-base lg:text-[17px] text-gray-500 font-semibold">Career-Oriented</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/banner/idea.png" alt="" className="w-8 sm:w-10 lg:w-auto" />
                            <p className="text-sm sm:text-base lg:text-[17px] text-gray-500 font-semibold">Creative Thinking</p>
                        </div>
                    </div>

                    <div className="absolute -top-8 -left-30 -z-50 hidden xl:block">
                        <div className="relative w-[400] h-[400] border rounded-full">
                            <div className="absolute w-[12] h-[12] rounded-full top-8 left-19 bg-green-500"></div>
                            <div className="absolute top-[40] left-[40] w-[320] h-[320] border rounded-full">
                                <div className="absolute top-[40] left-[40] w-[240] h-[240] border rounded-full">
                                    <div className="absolute top-[40] left-[40] w-[160] h-[160] border rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="order-1 lg:order-2">
                    <div className="relative flex justify-center lg:justify-start">

                        <div className="flex justify-center w-[280px] sm:w-[350px] md:w-[420px] lg:w-[490px] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[490px] rounded-full bg-[#20b486] overflow-hidden">
                            <img src="/banner/bannerPerson.png" alt="banner" className="mt-8 sm:mt-10 lg:mt-12 pr-6 sm:pr-8 lg:pr-10" />
                        </div>
                        <div className="absolute -left-3 sm:-left-4 lg:-left-5 -top-2 sm:-top-3 lg:-top-4 -z-10 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[490px] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[490px] border-2 rounded-full"></div>

                        {/* card 1=> around the cricle */}
                        <div className="absolute top-20 sm:top-28 lg:top-35 -left-16 sm:-left-20 lg:-left-27 border-2 p-2 sm:p-3 lg:p-4 rounded-2xl w-40 sm:w-48 lg:w-55 bg-[#f5f5f4] flex items-center gap-2 sm:gap-3 lg:gap-5">
                            <img src="/banner/reading_icon.png" alt="icon1" className="w-10 sm:w-12 lg:w-auto" />
                            <div>
                                <p className="font-bold text-lg sm:text-xl lg:text-2xl">2K+</p>
                                <p className="text-gray-400 text-xs sm:text-sm font-semibold">Video Courses</p>
                            </div>
                        </div>

                        {/* card 2=> around the cricle */}
                        <div className="absolute -top-2 sm:top-0 -right-6 sm:-right-8 lg:-right-10 border-2 p-2 sm:p-3 lg:p-4 rounded-2xl bg-[#f5f5f4] flex flex-col items-center text-center gap-2 sm:gap-3 lg:gap-5">
                            <img src="/banner/Progress_icon.png" alt="icon2" className="w-10 sm:w-12 lg:w-fit" />
                            <div>
                                <p className="font-bold text-lg sm:text-xl lg:text-2xl">5K+</p>
                                <p className="text-gray-400 text-xs sm:text-sm font-semibold">Online Courses</p>
                            </div>
                        </div>

                        {/* card 3=> around the cricle */}
                        <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 -right-1 sm:-right-2 border-2 p-2 sm:p-3 lg:p-4 rounded-2xl w-32 sm:w-36 lg:w-42 bg-[#f5f5f4] flex items-center gap-2 sm:gap-3 lg:gap-5">
                            <img src="/banner/tutor_icon.png" alt="icon1" className="w-10 sm:w-12 lg:w-auto" />
                            <div>
                                <p className="text-gray-400 text-xs sm:text-sm font-semibold">Tutors</p>
                                <p className="font-bold text-lg sm:text-xl lg:text-2xl">250+</p>
                            </div>
                        </div>

                        {/* a small circle  */}
                        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 w-[30] sm:w-[35] lg:w-[40] h-[30] sm:h-[35] lg:h-[40] rounded-full bg-[#20b486]"></div>

                        <div className="absolute -bottom-40 -right-35 -z-50 hidden xl:block">
                            <div className="relative w-[400] h-[400] border rounded-full">
                                <div className="absolute w-[14] h-[14] rounded-full bottom-28 left-[9] bg-green-500"></div>
                                <div className="absolute top-[40] left-[40] w-[320] h-[320] border rounded-full">
                                    <div className="absolute top-[40] left-[40] w-[240] h-[240] border rounded-full">
                                        <div className="absolute top-[40] left-[40] w-[160] h-[160] border rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* below the banners section */}
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-12 lg:mt-14">
                <div className="text-center sm:text-left">
                    <span className="text-[#999999] text-2xl sm:text-3xl font-bold">250+</span> <br />
                    <span className="text-[#999999] text-sm sm:text-base font-semibold">Collaboration</span>
                </div>
                <img src="/banner/duolingo.png" alt="" className="h-6 sm:h-8 lg:h-auto" />
                <img src="/banner/codecov.png" alt="" className="h-6 sm:h-8 lg:h-auto" />
                <img src="/banner/usertesting.png" alt="" className="h-6 sm:h-8 lg:h-auto" />
                <img src="/banner/magicleap.png" alt="" className="h-6 sm:h-8 lg:h-auto" />
            </div>
        </div>
    );
};

export default Banner;


const Banner = () => {
    return (
        <div className='container mx-auto px-20 mt-20 flex justify-between'>

            {/* left side */}
            <div>
                <p className='text-7xl font-bold leading-19 '>Up Your <span className='text-[#20b486]'>Skills</span>
                    <br />To <span className='text-[#20b486]'>Advance</span> Your
                    <br /> <span className='text-[#20b486]'>Career</span>Path
                </p>
                <p className="max-w-2/3 my-7 text-gray-500">Learn UI-UX Design skills with weekend UX . The latest online learning system and material that help your knowledge growing.</p>
                <div>
                    <button className='bg-[#20B486] px-7 text-lg py-3 rounded-lg font-semibold text-white'>Get Started</button>
                    <button className="ml-5 bg-[#eafff9] px-7 text-lg py-3 rounded-lg font-semibold text-[#20b486]">Get free trial</button>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            {/* right side */}
            <div>
                <div className="relative">

                    <div className=" flex justify-center w-[490px] h-[490px] rounded-full bg-[#20b486] overflow-hidden">
                        <img src="/banner/bannerPerson.png" alt="banner" className=" mt-12 pr-10" />
                    </div>
                    <div className="absolute -left-5 -top-4 -z-10 w-[490px] h-[490px] border-2 rounded-full "></div>

                    {/* card 1=> around the cricle */}
                    <div className="absolute top-35 -left-27 border-2 p-4 rounded-2xl w-55 bg-[#f5f5f4]  flex items-center gap-5">
                        <img src="/banner/reading_icon.png" alt="icon1" />
                        <div>
                            <p className="font-bold text-2xl">2K+</p>
                            <p className="text-gray-400 font-semibold">Video Courses</p>
                        </div>
                    </div>

                    {/* card 2=> around the cricle */}
                    <div className="absolute top-0 -right-10 border-2 p-4 rounded-2xl bg-[#f5f5f4]  flex flex-col items-center text-center gap-5">
                        <img src="/banner/Progress_icon.png" alt="icon2" className="w-fit" />
                        <div>
                            <p className="font-bold text-2xl">5K+</p>
                            <p className="text-gray-400 font-semibold">Online Courses</p>
                        </div>
                    </div>

                    {/* card 3=> around the cricle */}
                    <div className="absolute bottom-6 -right-2 border-2 p-4 rounded-2xl w-42 bg-[#f5f5f4]  flex items-center gap-5">
                        <img src="/banner/tutor_icon.png" alt="icon1" />
                        <div>
                            <p className="text-gray-400 font-semibold">Tutors</p>
                            <p className="font-bold text-2xl">250+</p>
                        </div>
                    </div>

                    {/* a small circle  */}
                    <div className="absolute bottom-10 w-[40] h-[40] rounded-full bg-[#20b486]"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
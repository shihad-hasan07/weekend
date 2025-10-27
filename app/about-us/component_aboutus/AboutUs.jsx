

export default function AboutUs() {
    return (
        <div className="container mx-auto lg:px-20">

            <section className="px-12 md:px-16 py-12">
                {/* ===== About Section ===== */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:justify-between">
                    {/* Left Text Section */}
                    <div className="lg:w-5/9">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600"> About Us</h2>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6"><span className="text-orange-500">WEEKEND UX </span> Providing The Best Opportunities To The Students Around The Glob.</h3>
                        <p className="text-gray-600 mt-4 leading-relaxed"> Weekend UX is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting. It was started in 2023 and passionate towards User Interface Design / User Experience Design, Human Computer Interaction Design. Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost courses in the area of UI/UX Design, by strengthening your skills, for your golden future.</p>
                        <button className="cursor-pointer mt-6 bg-green-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-green-700 transition">Join Us →</button>
                    </div>

                    {/* Right Images */}
                    <div className="relative w-[320]   h-[300] bg-[#f2f2f2] rounded-sm">
                        <img src="/aboutPage/desk.png" alt="desk" className="w-[220] absolute -top-5 -right-7" />
                        <img src="/aboutPage/office.png" alt="desk" className="w-[220] absolute -bottom-5 -left-7" />
                    </div>
                </div>

                {/* ===== Features Section ===== */}
                <div className="grid md:grid-cols-2 gap-10 items-center mt-25">
                    {/* Left Image */}
                    <div className="relative rounded-lg bg-[#f2f2f2] w-[474] h-[474]">
                        <img src="/aboutPage/light.png" alt="Creative bulbs"
                            className="absolute w-[434] h-[471] top-7 left-5" />
                    </div>

                    {/* Right Text Section */}
                    <div className="order-1 md:order-2">
                        <h3 className="text-green-600 font-semibold text-lg">Features</h3>
                        <h2 className="text-2xl md:text-3xl font-semibold mt-2">We are always working to provide you best of the features in all aspects.</h2>

                        <p className="text-gray-600 mt-4 leading-relaxed"> At WEEKEND UX the chief determination is to clear the minds of our students about their goals, while making them consistent in their ambitions and pushing them to be confident for their journey towards the course of time.</p>

                        <p className="text-gray-600 mt-4 leading-relaxed"> You will find every little thing on the Internet in just a click of hand, but here we admire that without knowledge and practice the Internet may even also fail you in your life.</p>

                        <button className="mt-6 cursor-pointer bg-green-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-green-700 transition">Learn More →</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

const benefits = [
  {
    id: "01",
    title: "Standardization",
    desc: "When working in a global workplace, it's often difficult to gauge learners' training experiences, which are ...",
  },
  {
    id: "02",
    title: "Reduced Costs",
    desc: "With Weekend UX, there's no cost to reproduce materials and, thanks to mobile learning and microlearning ...",
  },
  {
    id: "03",
    title: "More Customization",
    desc: "Just like learners aren't one-size-fits-all, learning is not a one-size-fits-all experience. By using different ...",
  },
  {
    id: "04",
    title: "Affordable Pricing",
    desc: "With Weekend UX, there's no cost to reproduce materials and, thanks to mobile learning and microlearning ...",
  },
  {
    id: "05",
    title: "Learner Satisfaction",
    desc: "If you really want students to retain what they learn, you'll need to aim for high satisfaction rates. Bad ...",
  },
  {
    id: "06",
    title: "Multimedia Materials",
    desc: "One of the main reasons why custom eLearning is effective is that it's the perfect delivery method for ...",
  }
];

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
      <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 lg:py-12">
        {/* ===== About Section ===== */}
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 lg:justify-between">
          {/* Left Text Section */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600">
              About Us
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mt-4 sm:mt-5 lg:mt-6">
              <span className="text-orange-500">WEEKEND UX </span> 
              Providing The Best Opportunities To The Students Around The Glob.
            </h3>
            <p className="text-sm sm:text-base lg:text-base text-gray-600 mt-3 sm:mt-4 leading-relaxed">
              Weekend UX is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting. It was started in 2023 and passionate towards User Interface Design / User Experience Design, Human Computer Interaction Design. Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost courses in the area of UI/UX Design, by strengthening your skills, for your golden future.
            </p>
            <button className="cursor-pointer mt-4 sm:mt-5 lg:mt-6 bg-green-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base rounded-full font-medium hover:bg-green-700 transition">
              Join Us →
            </button>
          </div>

          {/* Right Images */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] h-[240px] sm:h-[280px] lg:h-[360px] xl:h-[400px] bg-[#f2f2f2] rounded-sm">
            <img 
              src="/aboutPage/desk.png" 
              alt="desk" 
              className="w-[200px] sm:w-[240px] lg:w-[280px] xl:w-[320px] absolute -top-3 sm:-top-4 lg:-top-5 -right-4 sm:-right-5 lg:-right-6 xl:-right-7" 
            />
            <img 
              src="/aboutPage/office.png" 
              alt="office" 
              className="w-[200px] sm:w-[240px] lg:w-[280px] xl:w-[320px] absolute -bottom-3 sm:-bottom-4 lg:-bottom-5 -left-4 sm:-left-5 lg:-left-6 xl:-left-7" 
            />
          </div>
        </div>

        {/* ===== Features Section ===== */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-10 items-center mt-12 sm:mt-16 lg:mt-20 xl:mt-25">
          {/* Left Image */}
          <div className="relative rounded-lg bg-[#f2f2f2] w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] xl:max-w-[474px] h-[300px] sm:h-[360px] lg:h-[420px] xl:h-[474px] mx-auto md:mx-0">
            <img 
              src="/aboutPage/light.png" 
              alt="Creative bulbs"
              className="absolute w-[260px] sm:w-[320px] lg:w-[380px] xl:w-[434px] h-[280px] sm:h-[340px] lg:h-[400px] xl:h-[471px] top-4 sm:top-5 lg:top-6 xl:top-7 left-3 sm:left-4 lg:left-5" 
            />
          </div>

          {/* Right Text Section */}
          <div className="order-1 md:order-2">
            <h3 className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg">
              Features
            </h3>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
              We are always working to provide you best of the features in all aspects.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 leading-relaxed">
              At WEEKEND UX the chief determination is to clear the minds of our students about their goals, while making them consistent in their ambitions and pushing them to be confident for their journey towards the course of time.
            </p>

            <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 leading-relaxed">
              You will find every little thing on the Internet in just a click of hand, but here we admire that without knowledge and practice the Internet may even also fail you in your life.
            </p>

            <button className="mt-4 sm:mt-5 lg:mt-6 cursor-pointer bg-green-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base rounded-full font-medium hover:bg-green-700 transition">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14 xl:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-green-600 font-semibold mb-2 sm:mb-3 text-xs sm:text-sm lg:text-base">
            Our Benefits
          </h4>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-3 sm:mb-4 px-2">
            By Joining <span className="text-gray-900">WEEKENS UX Platform,</span>
            <br className="hidden sm:block" /> 
            One Can Avail a Lot Of Benefits.
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-2">
            Install our top-rated dropshipping app to your e-commerce site and get
            access to US Suppliers, AliExpress vendors, and the best.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {benefits.map((b) => (
              <div
                key={b.id}
                className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-left hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg">
                    {b.id}
                  </span>
                </div>
                <h3 className="text-gray-900 font-semibold text-sm sm:text-base lg:text-lg mb-1.5 sm:mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {b.desc}{" "}
                  <a
                    href="#"
                    className="text-green-600 font-medium hover:underline"
                  >
                    Read More
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
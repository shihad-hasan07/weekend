import Image from 'next/image';

export default function RecentBlogs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-12">Our recent blogs</h2>
        
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          
          {/* Left Column - 2 blogs */}
          <div className="space-y-8">
            {/* Blog 1 */}
            <div className="flex gap-4">
              <div className="relative w-64 h-44  overflow-hidden rounded">
                <Image
                  src="/blogs/Image (3).png"
                  alt="Three Pillars of User Delight"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-teal-500 text-sm font-medium mb-2">November 16, 2014</p>
                <h3 className="text-xl font-bold mb-2">
                  Three Pillars of User Delight
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...
                </p>
                <div className="flex gap-2">
                  <span className="text-pink-600 text-sm font-medium">
                    Research
                  </span>
                  <span className="text-blue-600 text-sm font-medium">
                    UI UX
                  </span>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="flex gap-4">
              <div className="relative w-64 h-44 overflow-hidden rounded">
                <Image
                  src="/blogs/Image (4).png"
                  alt="UX Mapping Methods"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-teal-500 text-sm font-medium mb-2">September 24, 2017</p>
                <h3 className="text-xl font-bold mb-2">
                  UX Mapping Methods
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                </p>
                <div className="flex gap-2">
                  <span className="text-pink-600 text-sm font-medium">
                    Research
                  </span>
                  <span className="text-blue-600 text-sm font-medium">
                    UI Design
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 1 large blog */}
          <div>
            <div className="relative w-full h-60 mb-4 overflow-hidden rounded">
              <Image
                src="/blogs/Image (5).png"
                alt="Agile Development Projects and Usability"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-teal-500 text-sm font-medium mb-2">March 13, 2014</p>
            <h3 className="text-2xl font-bold mb-3">
              Agile Development Projects and Usability
            </h3>
            <p className="text-gray-600 text-base mb-4">
              Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.
            </p>
            <div className="flex gap-3">
              <span className="text-orange-500 text-sm font-medium">
                Programming
              </span>
              <span className="text-blue-600 text-sm font-medium">
                Research
              </span>
              <span className="text-pink-600 text-sm font-medium">
                Developments
              </span>
            </div>
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          
          {/* Blog 1 */}
          <div className="group cursor-pointer">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/blogs/Image (3).png"
                alt="Three Pillars of User Delight"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-teal-500 text-sm font-medium mb-2">November 16, 2014</p>
            <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 transition-colors">
              Three Pillars of User Delight
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-pink-600 text-sm font-medium px-3 py-1 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                Research
              </span>
              <span className="text-blue-600 text-sm font-medium px-3 py-1 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                UI UX
              </span>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="group cursor-pointer">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/blogs/Image (4).png"
                alt="UX Mapping Methods"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-teal-500 text-sm font-medium mb-2">September 24, 2017</p>
            <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 transition-colors">
              UX Mapping Methods
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-pink-600 text-sm font-medium px-3 py-1 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                Research
              </span>
              <span className="text-blue-600 text-sm font-medium px-3 py-1 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                UI Design
              </span>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="group cursor-pointer">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/blogs/Image (5).png"
                alt="Agile Development Projects and Usability"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-teal-500 text-sm font-medium mb-2">March 13, 2014</p>
            <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 transition-colors">
              Agile Development Projects and Usability
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-orange-500 text-sm font-medium px-3 py-1 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                Programming
              </span>
              <span className="text-blue-600 text-sm font-medium px-3 py-1 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                Research
              </span>
              <span className="text-pink-600 text-sm font-medium px-3 py-1 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                Developments
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
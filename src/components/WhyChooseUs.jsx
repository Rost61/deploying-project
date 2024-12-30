import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-8 px-1 md:px-36 max-lg:px-7 lg:px-9 max-xl:px-3 xl:px-3 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl text-green-700 text-center mb-3">Your Benefits</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Why Choose Us</h2>
        <p className="text-center text-black mb-12">
          Unleash your productivity with our premium workspace solutions. Elevate<br className="hidden md:block" /> your work game and join the winning team today.
        </p>

        
        <div className="px-px flex flex-col lg:flex-row items-center max-2xl:space-x-36 max-xl:space-x-2 lg:space-x-32 gap-20 lg:gap-24">
          
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col items-center text-center bg-green-100 w-80 max-xl:w-72 max-lg:w-56 lg:w-56 md:w-64 p-4">
                <img src="/pathimages/logoxx.jpg" className="w-12 h-12 mb-4 rounded-full"
                />
              <h3 className="text-lg font-bold">Creative Space</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-green-100 w-80 max-xl:w-72 max-lg:w-56 lg:w-56 md:w-64 p-4">
            <img src="/pathimages/logoxx.jpg" className="w-12 h-12 mb-4 rounded-full"
                />
              <h3 className="text-lg font-bold">High Speed Wifi</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-green-100 w-80 max-xl:w-72 max-lg:w-56 lg:w-56 md:w-64 p-4">
            <img src="/pathimages/logoxx.jpg" className="w-12 h-12 mb-4 rounded-full"
                />
              <h3 className="text-lg font-bold">Parking Area</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex-shrink-0">
            <img
              src="/pathimages/WhyChooseUsphoto.jpg"
              alt="Workspace"
              className="w-full max-w-[350px] md:max-w-[400px] h-auto mx-auto"
            />
          </div>

          {/* Right Features */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col items-center text-center bg-green-100 w-80 max-xl:w-72 max-lg:w-56 lg:w-56 md:w-64 p-4">
            <img src="/pathimages/logoxx.jpg" className="w-12 h-12 mb-4 rounded-full"
                />
              <h3 className="text-lg font-bold">24/7 Access</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-green-100 w-80 max-xl:w-72 max-lg:w-56 lg:w-56 md:w-64 p-4">
            <img src="/pathimages/logoxx.jpg" className="w-12 h-12 mb-4 rounded-full"
                />
              <h3 className="text-lg font-bold">Great Location</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-green-100 w-80 max-xl:w-72 max-lg:w-56 lg:w-56 md:w-64 p-4">
            <img src="/pathimages/logoxx.jpg" className="w-12 h-12 mb-4 rounded-full"
                />
              <h3 className="text-lg font-bold">Outdoor Space</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


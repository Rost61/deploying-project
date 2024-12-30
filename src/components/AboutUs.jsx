import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-8 px-20 lg:px-2 max-sm:px-4 bg-white">
      <div className="flex justify-between max-sm:flex-col items-start py-20 m-11 max-sm:py-8">
        <div className="mr-16">
          <h2 className="text-xl text-green-600 font-bold mb-4">About Us</h2>
          <p className="text-3xl text-black font-bold">
            We offer creative working environments that suit your business.
          </p><br />
          </div>
          <div className="w-0.5 bg-black h-40 max-sm:hidden"></div>
          <div className="h-auto w-10  mx-12"></div>
          <div className="md:w-1/2">
          <p className='text-black text-left max-sm:text-justify'> Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, conubia leo rutrum praesent dui turpis lobortis, vulputate pellentesque tristique primis cum tincidunt placerat maecenas, velit metus fermentum eget.
            </p>    
          <a
            href="#more-about"
            className="inline-block mt-4 text-green-700 hover:underline"
          >
            More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

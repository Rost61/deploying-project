const Features = () => {
    return (
      <section className="py-8 px-10 max-sm:px-2 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl max-sm:text-3xl text-center font-bold mb-8">We Offer Creative Working<br /> environments</h2>
          <h3 className="text-2xl max-sm:text-xl mb-8">Find your perfect workspace. Choose from versatile options<br /> tailored to your needs.</h3>
          <div className="mx-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:grid-cols-1">
            {[
              { title: "Renting Offices", description: "Lorem ipsum dolor sit amet.", image: "/pathimages/Officephoto.jpg" },
              { title: "Coffee Shop", description: "Enjoy coffee and work.", image: "/pathimages/Coffeephoto.jpg" },
              { title: "Private Event Space", description: "Host private events.", image: "/pathimages/Eventphoto.jpg" },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <img src={feature.image} alt={feature.title} className="rounded mb-4" />
                <h3 className="font-bold text-lg text-green-700">{feature.title}</h3>
                <div className="h-0.5 bg-green-700 w-full lg:w-2/12 mx-auto my-2"></div>
                <p className="text-black">{feature.description}</p>
                <button className="mt-4 text-green-700 hover:text-gray-500 hover:underline">Learn More</button>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    );
    
  };
  export default Features;
  
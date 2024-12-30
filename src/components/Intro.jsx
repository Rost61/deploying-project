const Intro = () => {
    return (
      <section className="relative bg-cover bg-center h-dvh flex items-center justify-center text-white text-center max-sm:mt-20 px-56 lg:px-1 md:px-36 max-sm:px-12" style={{ backgroundImage: "url('pathimages/Backgroundone.png')" }}>
        
        <div className="absolute inset-0 bg-gray-800 bg-opacity-5"></div>
        <div className="relative z-10 px-80 max-lg:px-8 lg:px-8 max-md:px-4 md:px-2 max-sm:px-1 flex flex-col items-center"><h2 className="text-3xl lg:text-3xl max-sm:text-2xl mt-10 text-center">The Best Workspace in Kigali</h2>
        <p className="mt-4 text-5xl lg:text-6xl max-sm:text-4xl text-center font-bold">
  <span className="text-green-600">Professional</span>, Creative,<br /> Flexible, Scalable{" "}
  <span className="text-green-600">Workspace</span>
</p><br />

        <p classname="mt-6 text-5xl lg:text-8xl max-sm:text-xl text-center">Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office<br /> 
spaces. Elevate your business with flexible solutions tailored to your needs. Find your perfect office today!</p>
        <button className="mt-16 object-center bg-green-600 px-6 py-2 rounded text-white hover:bg-green-700">Explore</button>
        </div>
      </section>
    );
  };
  export default Intro;
  
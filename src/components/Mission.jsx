import React from "react";

const Mission = () => {
  return (
    <section
      id="mission"
      className="py-16 my-24  bg-cover bg-center text-white"
     style={{
       backgroundImage: "url('pathimages/Backgroundtwo.png')",
     }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-6xl max-sm:text-4xl font-bold mb-4"> <span className="text-green-600">Our</span> Mission</h2>
          <p className="text-center text-xl max-sm:text-xs leading-relaxed font-bold">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit odio felis aliquet montes turpis consequat, est sociosqu vitae id nec rutrum. Ornare dictumst et eget fames cursus vel penatibus quis posuere, ultrices fermentum libero pretium convallis pharetra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;



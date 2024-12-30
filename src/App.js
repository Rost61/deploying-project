import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import AboutUs from './components/AboutUs'; 
import WhyChooseUs from './components/WhyChooseUs';
import Mission from './components/Mission';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full flex flex-col'>
      <Header />
      <Intro />
      <Features />
      <AboutUs /> 
      <WhyChooseUs />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;




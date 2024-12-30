import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
      <footer className="bg-white text-black w-full h-full py-8 px-20 lg:px-2 max-lg:px-8 max-md:px-16 max-sm:px-8">
        <hr className="border-green-600 w-full lg:w-11/12 mx-auto" />
        <div className="container mx-auto flex flex-wrap max-md:flex-col items-start justify-between text-center">
          <div className='mt-6 pl-10 max-sm:pl-3'>
          <h3 className="text-lg font-bold flex justify-start items-start"> <img src="/pathimages/Logov.png" className="w-8 h-8"/>
          Business <span className="text-green-700">Cafe</span><br />
          </h3>
          <p className="mt-4 text-xs text-black text-justify">Discover your ideal workspace with us.<br /> Work smart, not hard in our fully-equipped office<br /> spaces.<br />
          </p>
          
       <div className='flex justify-around items-center gap-6 p-3'>   
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="py-2 px-2 pr-3 pl-3 rounded-full border-2 border-green-700 text-green-700 hover:text-teal-300 text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="p-2 rounded-full border-2 border-green-700 text-green-700 hover:text-teal-300 text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="py-2 px-2 pr-3 pl-3 rounded-full border-2 border-green-700 text-green-700 hover:text-teal-300 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="p-2 rounded-full border-2 border-green-700 text-green-700 hover:text-teal-300 text-2xl" />
          </a>
          </div>
          </div>
          
          <ul className="mt-6 space-y-2 text-justify"><span className='font-bold'>Quick Links</span><br />
          <div className="h-0.5 bg-gradient-to-r from-green-600 to-black w-full lg:w-11/12 mx-auto"></div>
          <nav className="text-justify">
          <li><a href="#" className="text-black hover:text-green-500">Home</a></li>
          <li><a href="#" className="text-black hover:text-green-500">Space</a></li>
          <li><a href="#" className="text-black hover:text-green-500">About</a></li>
          <li><a href="#" className="text-black hover:text-green-500">Contact</a></li>
        </nav>
          </ul>
          <ul className="mt-6 pr-24 space-y-2 text-justify"><span className='font-bold'>Contact Info</span><br />
          <div className="h-0.5 bg-gradient-to-r from-green-600 to-black w-full lg:w-11/12 mx-auto"></div>
            <li><span className='font-bold'>Location: </span>Kigali, <span className="text-green-700">Rwanda</span></li>
            <li><span className='font-bold'>Email: </span>businesscafe@info.com</li>
            <li><span className='font-bold'>Phone: </span> +250787387817</li>
            <li><a href="https://www.google.com/maps/d/viewer?hl=en&ie=UTF8&oe=UTF8&msa=0&mid=1o2cUkUb6MuCeiDOQKlo65xgwxAE&ll=-2.037623841691473%2C30.094707000000014&z=12" className="text-green-700 underline">Visit Location on GoogleMap</a></li>
          </ul>
        </div><br />
        <hr className="border-green-600 w-full lg:w-11/12 mx-auto" />
        <div className="text-black text-center mt-4">Copyright © 2023 Business Coffee All rights reserved.</div>
      </footer>
    );
  };
  export default Footer;
  
import React, {useState} from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
      <header className="bg-white fixed top-0 right-0 left-0 z-50 px-36 py-8 lg:px-10 max-sm:px-8 md:px-4 flex justify-between items-center">
        <div className="flex justify-start items-start">    
        <img src="/pathimages/Logov.png" className="w-10 h-10 mb-4"/>
        <h1 className="text-xl font-bold">
            Business <span className="text-green-700">Cafe</span>
        </h1>
        </div> 
        <button
          className="block lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> 
        <nav className={`${
            isMenuOpen ? "block" : "hidden"
          } sticky top-full left-0 text-center bg-white w-full lg:flex lg:items-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-6 lg:bg-transparent`}
        >
          <a href="#" className="text-green-700 font-bold hover:text-gray-900">Home</a><br />
          <a href="#" className="text-black hover:text-gray-700">Space</a><br />
          <a href="#" className="text-black hover:text-gray-700">About</a><br />
          <a href="#" className="text-black hover:text-gray-700">Contact</a><br />
        </nav>
      </header>
    );
  };
  export default Header;
  
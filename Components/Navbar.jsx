import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-sky-600">
          <Link href="/">
            <Image src='/images/logo.png' height={80} width={80} alt="Logo" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link className="text-gray-700 hover:text-sky-600" href="/">
            Home
          </Link>
          <Link className="text-gray-700 hover:text-sky-600" href="/about">
          About Us
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-sky-600">
          Gallery
          </Link>
          <Link href="/book" className="text-gray-700 hover:text-sky-600">
          Book Now
          </Link>
        </div>

        {/* Get in Touch Button */}
        <div className="hidden md:block">
          <Link href="/contact" className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700">
    
              Get in Touch
         
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
       
            <a
              className="block text-gray-700 hover:text-orange-600 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
     
       
            <a
              className="block text-gray-700 hover:text-orange-600 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>

     
            <a
              className="block text-gray-700 hover:text-orange-600 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>

            <a
              className="block text-gray-700 hover:text-orange-600 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
  
 
            <a
              className="block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 text-center mx-4 my-2"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;

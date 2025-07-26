'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/image2.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-6">
        {/* Logo on Left */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Taalish Logo" className="h-16 w-auto" />
        </div>

        {/* Navigation on Right */}
        <nav className="flex space-x-8 text-white font-light text-lg">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">About</a>
         
          <a href="#" className="hover:text-yellow-400">Cottages</a>
          <a href="#" className="hover:text-yellow-400">Restaurant</a>
          <a href="#" className="hover:text-yellow-400">Gallery</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </nav>
      </div>

      {/* Heading + Paragraph */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 sm:px-8">
        <h1 className="text-white text-3xl sm:text-5xl font-light font-serif mb-4">
          Live the Grand Life in Diveagar
        </h1>
        <p className="text-white text-base sm:text-lg max-w-3xl font-light font-serif">
          Welcome to Grand Ambience Resort, your perfect getaway by the sea and hills of Diveagar.
          Whether you're planning a relaxing vacation, a family trip, or a romantic escape, our resort blends <span className="font-medium">warmth</span>, <span className="font-medium">comfort</span>.
        </p>
      </div>
    </div>
  );
}

import React from 'react'

const Navibar = () => {
   return (
    <nav className="bg-white-900 text-black ">
      <div className="max-w-8xl mx-auto px-35">
        <div className="flex justify-between items-center h-16 space-x-10">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
                src="/Icon.svg"
                alt="Logo" 
                className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold tracking-wide">
                Nexcent
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg   font-semibold " >
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <a href="#" className="hover:text-blue-400 transition">Services</a>
            <a href="#" className="hover:text-blue-400 transition">Feature</a>
            <a href="#" className="hover:text-blue-400 transition">Product</a>
            <a href="#" className="hover:text-blue-400 transition">Testimonial</a>
            <a href="#" className="hover:text-blue-400 transition">FAQ</a>

            {/* Auth Buttons */}
            
          </div>

        {/* Right Section (Auth Buttons) */}
        <div className="flex items-center space-x-2">
            <button className="px-4 py-2 rounded-lg text-green-500 hover:bg-gray-200 transition">
            Login
            </button>

            <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition font-medium">
            Sign Up
            </button>
        </div>



          
        </div>
      </div>

     
      
    </nav>
  );
}

export default Navibar
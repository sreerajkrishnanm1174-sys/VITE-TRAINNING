import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-800  text-white p-40">
        <div className="grid grid-cols-2 gap-5 w-fit">

            {/* Column 1 */}
            <div className="space-y-4">
                <div> 
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img 
                            src="/Icon.svg"
                            alt="Logo" 
                            className="h-10 w-auto object-contain"
                        />
                        <span className="text-5xl font-bold tracking-wide">
                            Nexcent
                        </span>
                    </div>
                </div>
                <div>
                    <p className="text-xl text-gray-600 mt-6">
                        Copyright © 2020 Nexcent ltd. <br /> All rights reserved
                    </p>
                </div>
                
                <div className="flex  items-center space-x-6  ">
                    <a href="#" className="inline-block transition-transform duration-300 hover:scale-110">
                    <img
                        src="/IMAGES (3)/social media/Social Icons-1.png"
                        alt="logo1"
                        className="h-12 object-contain"
                    />
                    </a>
                    <a href="#" className="inline-block transition-transform duration-300 hover:scale-110">
                    <img
                        src="/IMAGES (3)/social media/Social Icons-2.png"
                        alt="logo1"
                        className="h-12 object-contain"
                    />
                    </a>

                    <a href="#" className="inline-block transition-transform duration-300 hover:scale-110">
                    <img
                        src="/IMAGES (3)/social media/Social Icons-3.png"
                        alt="logo1"
                        className="h-12 object-contain"
                    />
                    </a>

                    <a href="#" className="inline-block transition-transform duration-300 hover:scale-110">
                    <img
                        src="/IMAGES (3)/social media/Social Icons.png"
                        alt="logo1"
                        className="h-12 object-contain"
                    />
                    </a>
                    
                </div>
                
            </div>

            {/* Column 2 */}
            <div className="space-y-6">

                {/* 3 Columns */}
                <div className="grid grid-cols-3 gap-13 ">
                    <div>
                        <h1 className='text-2xl font-semibold'>Company</h1>
                        <br />
                         <a href="#" className='text-lg'>About us</a>
                        <br />
                        <br />
                        <a href="#" className='text-lg'>Blog</a>
                        <br />
                        <br />
                        <a href="#" className='text-lg'>Contact us</a>
                        <br />
                        <br />
                        <a href="#" className='text-lg'>Pricing</a>
                        <br />
                        <br />
                        <a href="#" className='text-lg'>Testimonials</a>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Support</h1>
                        <br />
                        
                        <a href="#" className='text-lg'>Help center</a>
                        <br />
                        <br />
                         <a href="#" className='text-lg'>Terms of service</a>
                        <br />
                        <br />
                         <a href="#" className='text-lg'>Legal</a>
                        <br />
                        <br />
                         <a href="#" className='text-lg'>Privacy policy</a>
                        <br />
                        <br />
                        <a href="#" className='text-lg'>Status</a>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Stay up to date</h1>
                        <br />
                        <div className="relative w-80">
  
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-gray-700 rounded-lg py-3 pl-4 pr-12 
                                focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <button
                                className="absolute right-2 top-1/2 -translate-y-1/2 
                                 p-2 rounded-md hover: transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2803 0.219691C16.4841 0.423419 16.5531 0.725843 16.4579 0.997784L11.2079 15.9978C11.1063 16.288 10.8378 16.4869 10.5306 16.4994C10.2233 16.5119 9.93954 16.3356 9.81465 16.0546L6.9318 9.56822L0.4454 6.68538C0.16439 6.56049 -0.0119081 6.27671 0.000627214 5.96945C0.0131626 5.66219 0.211991 5.39371 0.502241 5.29213L15.5022 0.0421271C15.7742 -0.0530519 16.0766 0.0159624 16.2803 0.219691ZM8.39456 9.16612L10.4171 13.7167L13.9564 3.60429L8.39456 9.16612ZM12.8957 2.54362L2.78331 6.08297L7.3339 8.10546L12.8957 2.54362Z" fill="white"/>
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer
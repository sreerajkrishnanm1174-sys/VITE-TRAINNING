import "./App.css";
import Navibar from "./components/Navbar/Navibar";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(0);
  const totalSlides = 3;
  return (
    <>
    <Navibar/>

    <div className="flex flex-col items-center space-y-6">

      {/* Content Area */}
      <div className="w-full h-fit bg-white-200 rounded-lg flex items-center   pl-46 py-16">

        {/* Left Side - Text */}
        <div className="w-fit h-fit  flex  ">
          <div className="text-left">
            <h1 className="text-8xl text-gray-600 font-semibold ">
              Lessons and insights
            </h1>

            <h2 className="text-6xl  text-green-500 mt-2 font-semibold">
              from 8 years
            </h2>

            <p className="text-lg text-gray-600 mt-2">
              Where to grow your business as a photographer: site or social media?
            </p>
            <br />
            <button className="px-8 py-3 bg-green-500 text-white rounded-sm  hover:bg-green-600 transition font-medium">
            Register
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-fit h-fit  mx-24 py-4 ">
          <img
            src="/IMAGES (3)/Illustration.png"
            alt="Illustration"
            className="h-110 w-130 object-contain"
          />
        </div>

      </div>
      {/* Dot Navigation */}
      <div className="flex space-x-3">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              active === index
                ? "bg-green-600 scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
    
    <div className="w-full h-fit flex flex-col justify-center items-center text-center  ">

      {/* First Div */}
      <div className="h-fit w-fit pt-36">
        <h2 className="text-4xl text-gray-700 font-semibold">
          Our Clients
        </h2>
        <p className="text-2xl text-gray-500 mt-2">
              We have been working with some Fortune 500+ clients
            </p>
      </div>

      {/* Second Div */}
      <div className="flex justify-center items-center space-x-46  py-10">
        <img src="/IMAGES (3)/client-icon/Logo-1.svg" alt="logo1" className="h-12 object-contain" />
        <img src="/IMAGES (3)/client-icon/Logo-2.svg" alt="logo2" className="h-12 object-contain" />
        <img src="/IMAGES (3)/client-icon/Logo-3.svg" alt="logo3" className="h-12 object-contain" />
        <img src="/IMAGES (3)/client-icon/Logo-4.svg" alt="logo4" className="h-12 object-contain" />
        <img src="/IMAGES (3)/client-icon/Logo-5.svg" alt="logo4" className="h-12 object-contain" />
        <img src="/IMAGES (3)/client-icon/Logo-6.svg" alt="logo4" className="h-12 object-contain" />
        <img src="/IMAGES (3)/client-icon/Logo-3.svg" alt="logo3" className="h-12 object-contain" />

        
      </div>

    </div>

    <div className="w-full h-fit flex flex-col justify-center items-center text-center pt-20  ">

      {/* First Div */}
      <div className="h-fit w-fit mt-6">
        <h2 className="text-4xl text-gray-700 font-semibold">
          Manage your entire community <br />in a single system
        </h2>
        <p className="text-2xl text-gray-500 mt-2">
              Who is Nextcent suitable for?

            </p>
      </div>

      {/* Second Div */}
      <div className="w-full h-96 flex flex-row  py-15  px-55 space-x-40 ">

         <div className="flex-1 bg-white flex flex-col">

          {/* Image Section */}
          <div className="flex-1 flex flex-col justify-center">
            <img
              src="/IMAGES (3)/Manage your/Membership Organisations.svg"
              alt="Example"
              className="h-16 object-contain"
            />
            

            <h1 className="text-4xl font-semibold">
             Membership <br />Organisations
            </h1>
          </div>

          {/* Heading Section */}
          <div className="flex-1 flex items-center justify-center">
            <p className="text-1xl text-gray-500 mt-2">
              Our membership management software provides full automation of membership renewals and payments

            </p>
          </div>

        </div>
         <div className="flex-1 bg-white flex flex-col">

          {/* Image Section */}
          <div className="flex-1 flex flex-col justify-center">
            <img
              src="/IMAGES (3)/Manage your/National Associations.svg"
              alt="Example"
              className="h-16 object-contain"
            />
            

            <h1 className="text-4xl font-semibold">
              National <br /> Associations
            </h1>
          </div>

          {/* Heading Section */}
          <div className="flex-1 flex items-center justify-center">
            <p className="text-1xl text-gray-500 mt-2">
              Our membership management software provides full automation of membership renewals and payments

            </p>
          </div>

        </div>
         <div className="flex-1 bg-white flex flex-col">

          {/* Image Section */}
          <div className="flex-1 flex flex-col justify-center">
            <img
              src="/IMAGES (3)/Manage your/Clubs And Groups.svg"
              alt="Example"
              className="h-16 object-contain"
            />
            

            <h1 className="text-4xl font-semibold">
              Clubs And <br />Groups
            </h1>
          </div>

          {/* Heading Section */}
          <div className="flex-1 flex items-center justify-center">
            <p className="text-1xl text-gray-500 mt-2">
              Our membership management software provides full automation of membership renewals and payments

            </p>
          </div>

        </div>

        

      </div>

    </div>

    <div className="flex flex-col items-center space-y-6">

      {/* Content Area */}
      <div className="w-full h-fit bg-white-200 rounded-lg flex items-center   pl-26 py-16">

        <div className="w-fit h-fit  mx-24 py-4 ">
          <img
            src="/IMAGES (3)/Frame 35.png"
            alt="Illustration"
            className="h-110 w-130 object-contain"
          />
        </div>
        {/* Left Side - Text */}
        <div className="w-180 h-fit  flex  ">
          <div className="text-left">
            <h1 className="text-5xl text-gray-600 font-semibold ">
              The unseen of spending three <br /> years at Pixelgrade
            </h1>

            <p className="text-lg text-gray-600 mt-2">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <br />
            <button className="px-8 py-3 bg-green-500 text-white rounded-sm  hover:bg-green-600 transition font-medium">
            Learn more
            </button>
          </div>
        </div>

        {/* Right Side - Image */}

      </div>
    

    </div>
    <div className="flex flex-col items-center space-y-6">

      {/* Content Area */}
      <div className="w-full h-fit bg-white-200 rounded-lg flex items-center   pl-36 py-16">

        <div className="w-fit h-fit  mx-24 py-4 ">
          <h1 className="text-4xl text-gray-600 font-semibold ">
              Helping a local 
            </h1>

            <h2 className="text-4xl  text-green-500 mt-2 font-semibold">
              business reinvent itself
            </h2>

            <p className="text-lg text-gray-600 mt-2">
              We reached here with our hard work and dedication
            </p>
        </div>
        {/* Left Side - Text */}
        <div className="w-1/2 h-fit grid grid-cols-2 grid-rows-2 gap-6 pl-30">
          <div className="bg-white  flex items-center justify-center">

          <div className="bg-white  flex items-center justify-start">
              {/* Image */}
            <img
              src="IMAGES (3)/Helping/Icon (1).svg"
              alt="Example"
              className="h-20 w-20 object-contain "
            />

            {/* Text Container */}
            <div className="pl-5 h-fit">
              <h2 className="text-4xl font-bold">
                2,245,341
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Members
              </p>
            </div>
          </div>
          </div>

          <div className="bg-white  flex items-center justify-center">
            <div className="bg-white flex items-center justify-start">
              {/* Image */}
            <img
              src="IMAGES (3)/Helping/Icon.png"
              alt="Example"
             className="h-20 w-20 object-contain"
            />

            {/* Text Container */}
            <div className="pl-5 h-fit">
              <h2 className="text-4xl font-bold">
                46,328
              </h2>
              <p className="text-sm text-gray-600 mt-1">
               Clubs
              </p>
            </div>
          
          </div>
          </div>

          <div className="bg-white  flex items-center justify-center">
            <div className="bg-white  flex items-center justify-start">
              {/* Image */}
            <img
              src="IMAGES (3)/Helping/Icon (2).svg"
              alt="Example"
              className="h-20 w-20 object-contain "
            />

            {/* Text Container */}
            <div className="pl-5 h-fit">
              <h2 className="text-4xl font-bold">
                828,867
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Event Bookings
              </p>
            
            </div>
          </div>
          </div>

          <div className="bg-white  flex items-center justify-center ">
            <div className="bg-white  flex items-center justify-center">
              {/* Image */}
            <img
              src="IMAGES (3)/Helping/Icon (3).svg"
              alt="Example"
              className="h-20 w-20 object-contain "
            />

            {/* Text Container */}
            <div className="pl-5 h-fit">
              <h2 className="text-4xl font-bold">
                1,926,436
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Payments
              </p>
            </div>
          </div>
          </div>

        </div>

        {/* Right Side - Image */}

      </div>
    

    </div>


    
    </>
  
  );
}

export default App; 

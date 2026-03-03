import "./App.css";
import Footer from "./components/footer/Footer";
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
        <div className="w-1/2 h-fit grid grid-cols-2 grid-rows-2 gap-6 pl-50">
          <div className="bg-white  flex items-center justify-start">

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

          <div className="bg-white  flex items-center justify-start">
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

          <div className="bg-white  flex items-center justify-start">
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

          <div className="bg-white  flex items-center justify-start ">
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

      <div className="w-full h-fit bg-white-200 rounded-lg flex items-center   pl-26 py-16">

        <div className="w-fit h-fit  mx-24 py-4 ">
          <img
            src="/IMAGES (3)/mobile-login/pana.png"
            alt="Illustration"
            className="h-110 w-130 object-contain"
          />
        </div>
      {/* Left Side - Text */}
        <div className="w-190 h-fit  flex  ">
          <div className="text-left">
            <h1 className="text-5xl text-gray-600 font-semibold ">
              How to design your site footer like <br />we did
            </h1>

            <p className="text-lg text-gray-600 mt-2">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <br />
            <button className="px-8 py-3 bg-green-500 text-white rounded-sm  hover:bg-green-600 transition font-medium">
            Learn more
            </button>
          </div>
        </div>

      {/* Right Side - Image */}

      </div>



      <div className="w-full h-fit bg-white-200 rounded-lg flex items-center    py-16">

        <div className="w-fit h-fit  mx-24 py-4 ">
          <img
            src="/IMAGES (3)/image 9.png"
            alt="Illustration"
            className="h-110 w-130 object-contain"
          />
        </div>
      {/* Left Side - Text */}
        <div className="w-230  h-fit  flex  ">
          <div className="text-left">
            <p className="text-lg text-gray-600 mt-2">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <br />
            <h1 className="text-3xl text-green-600 font-semibold ">
              Tim Smith
            </h1>

            <p className="text-lg text-gray-600 mt-2">
              British Dragon Boat Racing Association
            </p>

            <div className="flex flex-row justify-center h-fit items-center space-x-20   py-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  className="h-10 w-12 text-blue-600"
                  fill="currentColor"
                >
                  <g clipPath="url(#clip0_0_1443)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2H30C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1443">
                      <rect width="40" height="40" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <img src="/IMAGES (3)/client-icon/Logo-2.svg" alt="logo2" className="h-10 object-contain" />
              <img src="/IMAGES (3)/client-icon/Logo-3.svg" alt="logo3" className="h-10 object-contain" />
              <img src="/IMAGES (3)/client-icon/Logo-4.svg" alt="logo4" className="h-10 object-contain" />
              <img src="/IMAGES (3)/client-icon/Logo-6.svg" alt="logo4" className="h-10 object-contain" />
              <img src="/IMAGES (3)/client-icon/Logo-5.svg" alt="logo4" className="h-10 object-contain" />
              <a
                  href="#"
                  className="text-green-500 text-lg flex items-center gap-2 whitespace-nowrap font-semibold
                  transition-all duration-300 ease-in-out
                  hover:text-green-600 hover:gap-3"
                >
                <span>Meet all customers</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-15 pt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" />
                </svg>
              </a>
                          
              {/* <img src="/IMAGES (3)/client-icon/Logo-3.svg" alt="logo3" className="h-12 object-contain" /> */}
            </div> 
          
          

          
          
          </div>
      </div>

      {/* Right Side - Image */}

      </div>

      <div className="w-full">

          {/* Row 1 */}
          <div className="bg-white-600">
            <div className="max-w-4xl mx-auto text-center  px-6">
              
              <h1 className="text-5xl  font-semibold text-gray-700" >
                Caring is the new marketing
              </h1>

              <p className="text-xl text-gray-600 mt-6">
                The Nexcent blog is the best place to read about the latest membership insights,
                trends and more. See who's joining the community, read about how our community
                are increasing their membership income and lot's more.
              </p>

            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 px-40 gap-16  py-10 w-fit h-fit rounded-lg">
            <div className="relative bg-bl-200 text-center w-fit  h-fit">
              <img
                src="/IMAGES (3)/BG/image 18.png"
                alt=""
                className="w-130 h-100"
                
              />

              <div className="absolute z-50 bg-white shadow-md h-50 w-110 -bottom-20 left-1/2 -translate-x-1/2 text-center rounded-lg p-6">

                <p className="text-2xl text-gray-600 font-semibold">
                  Creating Streamlined <br />Safeguarding  Processes with <br /> OneRen
                </p>

                
                <a
                  href="#"
                  className="mt-4 text-2xl text-green-500 flex justify-center items-center gap-2 
                  whitespace-nowrap font-semibold
                  transition-all duration-300 ease-in-out
                  hover:text-green-600 hover:gap-3"
                >
                  <span>Readmore</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" />
                  </svg>

                </a>

              </div>
            </div>

            <div className="relative bg-white-200 text-center w-fit h-fit">
              <img
                src="/IMAGES (3)/BG/image 19.png"
                alt=""
                className="w-130 h-100"
                
              />

              <div className="absolute z-50 bg-white shadow-md h-50 w-110 -bottom-20 left-1/2 -translate-x-1/2 text-center rounded-lg p-6">

                <p className="text-2xl text-gray-600 font-semibold">
                What are your safeguarding responsibilities and how can you manage them?
                </p>

                <a
                  href="#"
                  className="mt-4 text-2xl text-green-500 flex justify-center items-center gap-2 
                  whitespace-nowrap font-semibold
                  transition-all duration-300 ease-in-out
                  hover:text-green-600 hover:gap-3"
                >
                  <span>Readmore</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" />
                  </svg>

                </a>

              </div>
            </div>

            <div className="relative bg-white-200 text-center w-fit h-fit">
              <img
                src="/IMAGES (3)/BG/image 20.png"
                alt=""
                className="w-130 h-100"
                
              />

              <div className="absolute z-50 bg-white shadow-md h-50 w-110 -bottom-20 left-1/2 -translate-x-1/2 text-center rounded-lg p-6">

                <p className="text-2xl text-gray-600 font-semibold">
                  Revamping the Membership <br /> Model with Triathlon <br /> Australia
                </p>

                <a
                  href="#"
                  className="mt-4 text-2xl text-green-500 flex justify-center items-center gap-2 
                  whitespace-nowrap font-semibold
                  transition-all duration-300 ease-in-out
                  hover:text-green-600 hover:gap-3"
                >
                  <span>Readmore</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" />
                  </svg>

                </a>

              </div>
            </div>
          
          
            
          </div>

      </div>

      <div className="flex flex-col items-center justify-center text-center pt-40 pb-10">

        <h1 className="text-8xl text-gray-800 font-semibold mb-6">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h1>

        <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg
            hover:bg-green-600 transition
            flex items-center justify-center gap-2"
          >
            <span>Get Demo</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" />
            </svg>
        </button>

      </div>
      
      <Footer/>

    
    </>
  
  );
}

export default App; 

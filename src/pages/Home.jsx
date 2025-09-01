import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import profilePic from "../assets/profilepic.png";

export default function Home() {
  return (
    <>
      <Header />

      {/* this is the main hero section */}
      <div className="flex justify-between lg:p-15 p-5 items-center mt-10">
        <a href="http:/">
          <div className="flex flex-col gap-8 ">
            <h1 className=" flex font-[900] lg:text-6xl text-5xl text-wrap text-[#B5B1B1]">
              ELVIS UI/UX.
            </h1>
            <h1 className="skill flex font-[900] lg:text-6xl text-6xl text-wrap text-black dark:">
              PRODUCT DESIGNER.
            </h1>
          </div>
        </a>
        {/* hero image */}
        <img
          className="hidden lg:block heroimg w-100 h-auto"
          src={profilePic}
          alt=""
        />
      </div>
      {/* the three doings in the hero section */}
      <div className="lg:flex flex-col p-5 gap-10 md:flex-row md:p-8 lg:p-15 justify-between items-center">
        <div className="py-3">
          <h2
            className="text-[#B5B1B1] text-2xl font-semibold hover:text-gray-500
          cursor-pointer transition duration-300"
          >
            CURRENT
          </h2>
          <p className="w-[75%]">Intern Product Designer at ighub.ng</p>
        </div>
        <div className="py-3">
          <h2
            className="text-[#B5B1B1] text-2xl font-semibold hover:text-gray-500
          cursor-pointer transition duration-300"
          >
            SOON
          </h2>
          <p className="w-[75%]">
            Incoming Product Designer at Any Nice Organization.ng
          </p>
        </div>
        <div className="py-3">
          <h2
            className="text-[#B5B1B1] text-2xl font-semibold hover:text-gray-500
          cursor-pointer transition duration-300"
          >
            PAST
          </h2>
          <p className="w-[100%]">None for Now.</p>
        </div>
      </div>
      {/* here is the feature section page */}
      <div className="lg:grid justify-between lg:gap-25 gap-5 lg:p-15 p-5">
        {/* h1 in the feature section */}
        <h1 className="text-[#B5B1B1] font-bold lg:text-8xl text-7xl">
          Featured Projects.
        </h1>
        {/* button in the feature section */}
        <div className="flex  py-10 gap-5">
          <button className="btn bg-[#B5B1B1] py-2 px-3 rounded-[5px] font-semibold hover:scale-115 transition duration-300">
            PRODUCT DESIGN
          </button>
          <button className="btn bg-[#B5B1B1] py-2 px-3 rounded-[5px] font-semibold hover:scale-115 transition duration-300">
            INTERNSHIP
          </button>
        </div>
        {/* ighub in the features section */}
        <div>
          <h1 className="flex gap-10 items-center font-semibold lg:text-4xl text-3xl">
            Innovation Hub Internship
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={70}
              viewBox="0 0 24 24"
              className="arrowright hover:fill-[#d2d2d2] transition duration-300 "
            >
              <path
                // fill="currentColor"
                d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
              ></path>
            </svg>
          </h1>
          <p className="lg:text-[20px] pt-10 text-[20px] py-2">
            A Rundown of my learning, growth and experience at Innovation growth
            Hub
          </p>
        </div>
      </div>
      {/* ighub image */}
      <a href="/ighub">
        <div
          className="ighub-bg bg-gray-50 p-5 grid place-items-center w-[90%] lg:w-[80%] md:h-[30%] mx-auto mb-10 
  h-[calc(50vh-100px)] md:gap-5 gap-10 lg:h-[calc(90vh-100px)]"
        >
          <h1 className="ighub pt-20 pb-0 lg:text-8xl md:text-[700%] font-bold text-[#b5b1b1]">
            IGHUB
          </h1>
          <img
            className="ighubimg lg:w-[20%] w-[25%] mx-auto pb-20"
            src="src/assets/IGHub-Logo.png"
            alt="ighub logo"
          />
        </div>
      </a>

      {/* another section of the project */}
      {/* Here is the Fun Project section page */}
      <div className="grid justify-between gap-25 lg:p-15 p-5">
        {/* button in the feature section */}
        <div className="flex gap-5">
          <button className="btn bg-[#B5B1B1] py-2 px-3 rounded-[5px] font-semibold hover:scale-115 transition duration-300">
            PRODUCT DESIGN
          </button>
        </div>
        <div>
          <h1 className="flex gap-10 items-center font-bold lg:text-4xl text-3xl">
            Fun Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={70}
              viewBox="0 0 24 24"
              className="arrowright hover:fill-[#d2d2d2] transition duration-300 "
            >
              <path
                // fill="currentColor"
                d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
              ></path>
            </svg>
          </h1>
          <p className="text-[20px] py-2">
            Learning while trying out and recreating designs made by senior
            designers in my field on Twitter
          </p>
        </div>
      </div>
      {/* fun project (wallets) image */}
      <a href="/fun">
        <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto mb-10 md:h-120 left-0">
          <div className="flex lg:gap-20 gap-15 justify-center">
            <img
              className="workimg lg:w-[100%] w-[30%] h-[30%] pb-10"
              src="src/assets/wallet 2 1.png"
              alt="ighub logo"
            />
            <img
              className="workimg lg:w-[100%] w-[30%] h-[30%] pt-10"
              src="src/assets/wallet 2 1.png"
              alt="ighub logo"
            />
          </div>
        </div>
      </a>
      {/* another section of the project */}
      {/* Here is the Dhabi's PLace Project section page */}
      <div className="grid justify-between gap-25 lg:p-15 p-5">
        {/* button in the feature section */}
        <div className="flex gap-5">
          <button className="btn bg-[#B5B1B1] py-2 px-3 rounded-[5px] font-semibold hover:scale-115 transition duration-300">
            FOOD GRAPHICS
          </button>
        </div>
        <div>
          <h1 className="flex gap-10 items-center lg:text-4xl text-3xl font-bold">
            Dhabi's Place
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={70}
              viewBox="0 0 24 24"
              className="arrowright hover:fill-[#d2d2d2] transition duration-300 "
            >
              <path
                // fill="currentColor"
                d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
              ></path>
            </svg>
          </h1>
          <p className="text-[20px] py-2">
            Collections of graphics designs projects made for Dhabi’s Place
            Eatery.
          </p>
        </div>
      </div>
      {/* dhabis project image image */}
      <a href="/dhabis">
        <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] md:h-120 mx-auto">
          <div className="flex justify-center items-center gap-30">
            <img
              className="workimg lg:w-[80%] w-[70%] overflow-hidden"
              src="src/assets/foodie.png"
              alt="ighub logo"
            />
          </div>
        </div>
      </a>
      {/* another section of the project */}
      {/* Here is the Miscellaneous Project section page */}
      <div className="grid justify-between gap-25 lg:p-15 p-5">
        {/* button in the feature section */}
        <div className="flex gap-5">
          <button className="btn bg-[#B5B1B1] py-2 px-3 rounded-[5px] font-semibold hover:scale-115 transition duration-300">
            GALLARY
          </button>
          <button className="btn bg-[#B5B1B1] py-2 px-3 rounded-[5px] font-semibold hover:scale-115 transition duration-300">
            UI DESIGN
          </button>
        </div>
        <div>
          <h1 className="flex gap-10 items-center font-bold text-4xl">
            Miscellaneous Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={70}
              viewBox="0 0 24 24"
              className="arrowright hover:fill-[#d2d2d2] transition duration-300 "
            >
              <path
                // fill="currentColor"
                d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
              ></path>
            </svg>
          </h1>
          <p className="text-[20px] py-2">
            Collection of UI miscellaneous project, Including both apps and
            websites.
          </p>
        </div>
      </div>
      {/* Misce image */}
      <a href="/misce">
        <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] md:h-120 mx-auto">
          <div className="flex justify-center items-center gap-30">
            <img
              className="workimg lg:w-[80%] w-[70%] overflow-hidden"
              src="src/assets/Group 28.png"
              alt="ighub logo"
            />
          </div>
        </div>
      </a>

      <Footer />
    </>
  );
}

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Misce = () => {
  return (
    <>
      <Header />
      {/* Misce image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[60%] w-[70%] overflow-hidden"
            src="src/assets/Group 28.png"
            alt="ighub logo"
          />
        </div>
      </div>
      {/* button in the feature section */}
      <div className="flex items-center gap-5 p-15">
        <button className="btn bg-[#B5B1B1] py-2 px-3 rounded-[5px] font-semibold hover:scale-115 transition duration-300">
          MISCELLANEOUS PROJECT
        </button>
      </div>
      <p className="lg:p-15 p-5 text-justify mt-[-6%]">
        A gallery of miscellaneous projects I've worked on through the years,
        including hackathon work, UI exercises, and other side projects.
      </p>
      {/* the uba bank project */}
      <div className="lg:grid grid lg:p-15 p-5 lg:gap-5">
        <h1 className="text-4xl font-semibold">UBA BANK</h1>
        <p className="text-justify text-wrap py-5 lg:w-[100%]">
          Redesigning the UBA Bank App & Website for a Modern, User-Centered
          Experience
        </p>
      </div>
      {/* UBA project image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[25%] w-[50%] overflow-hidden"
            src="src/assets/funImages/uba.png"
            alt="ighub logo"
          />
        </div>
      </div>
      {/* the crunchies project */}
      <div className="lg:grid grid lg:p-15 p-5 lg:gap-5">
        <h1 className="text-4xl font-bold">Crunchies</h1>
        <p className="text-justify text-wrap py-5 lg:w-[100%]">
          Redesigning the Crunchies food App & Website for a Modern,
          User-Centered Experience
        </p>
      </div>
      {/* Crunchies image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[28%] w-[30%] overflow-hidden"
            src="src/assets/funImages/crunchies.png"
            alt="ighub logo"
          />
        </div>
      </div>
      {/* the crunchies project */}
      <div className="lg:grid grid lg:p-15 p-5 lg:gap-5">
        <h1 className="text-4xl font-bold">NFT App</h1>
        <p className="text-justify text-wrap py-5 lg:w-[100%]">
          Built an NFT App from Scratch with Sleek, Interactive Prototypes
        </p>
      </div>
      {/* NFT App image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[50%] w-[70%] overflow-hidden"
            src="src/assets/funImages/Nft.png"
            alt="ighub logo"
          />
        </div>
      </div>
      {/* NGO Eco friend website project */}
      <div className="lg:grid grid lg:p-15 p-5 lg:gap-5">
        <h1 className="text-4xl font-bold">NGO Eco-friend Website</h1>
        <p className="text-justify text-wrap py-5 lg:w-[100%]">
          Developed a User-Centered Web App for an NGO Advocating Sustainable
          Agriculture
        </p>
      </div>
      {/* NGO Eco-friend image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[26%] w-[35%] overflow-hidden"
            src="src/assets/funImages/ecofarm.png"
            alt="ighub logo"
          />
        </div>
      </div>
      <a href="/projects">
        <h2 className="flex items-center gap-2 lg:text-3xl font-semibold hover:text-[#b5b1b1] hover:scale-115 transition duration-300 cursor-pinter justify-end mr-30">
          More{" "}
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
        </h2>
      </a>
      <Footer />
    </>
  );
};

export default Misce;

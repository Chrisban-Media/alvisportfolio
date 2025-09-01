import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Zollos from "../assets/funImages/zollos.png";

const Projects = () => {
  return (
    <>
      <Header />

      {/* the uba bank project */}
      <div className="lg:grid grid lg:p-15 p-5 lg:gap-5">
        <h1 className="text-4xl font-semibold">Zollo Bitters</h1>
        <p className="text-justify text-wrap py-5 lg:w-[100%]">
          Designed a web app from scratch for Zollo Bitters with sleek,
          user-friendly prototypes.
        </p>
      </div>
      {/* UBA project image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[25%] w-[75%] overflow-hidden"
            src={Zollos}
            alt="Zollows logo"
          />
        </div>
      </div>
      {/* the crunchies project */}
      <div className="lg:grid grid lg:p-15 p-5 lg:gap-5">
        <h1 className="text-4xl font-bold">Voice Matters</h1>
        <p className="text-justify text-wrap py-5 lg:w-[100%]">
          Voice Matters was a two-day hackathon where my team and I built a
          website to help bridge communication between the Abia State government
          and the public, aimed at solving a real community problem.
        </p>
      </div>
      {/* Voice-matters image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[28%] w-[60%] overflow-hidden"
            src="src/assets/funImages/voicematters.png"
            alt="ighub logo"
          />
        </div>
      </div>
      {/* the crunchies project */}
      <div className="lg:grid grid lg:p-15 p-5 lg:gap-5">
        <h1 className="text-4xl font-bold">REZEST</h1>
        <p className="text-justify text-wrap py-5 lg:w-[100%]">
          I applied the skills I gained during my internship at Ighub to my
          dad’s pest control business by designing a website that boosted the
          company’s online presence. The platform helped generate significant
          revenue and played a key role in introducing digital marketing
          strategies to attract and retain customers.
        </p>
      </div>
      {/* NFT App image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[50%] w-[23%] overflow-hidden"
            src="src/assets/funImages/rezest.png"
            alt="ighub logo"
          />
        </div>
      </div>
      {/* NGO Eco friend website project */}
      <div className="lg:grid grid lg:p-15 p-5 lg:gap-5">
        <h1 className="text-4xl font-bold">IGHUB</h1>
        <p className="text-justify text-wrap py-5 lg:w-[100%]">
          Redesigned the IGHUB website with a modern, user-centered approach,
          which helped me deepen my skills and learn more about effective web
          design.
        </p>
      </div>
      {/* NGO Eco-friend image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[26%] w-[28%] overflow-hidden"
            src="src/assets/funImages/ighub.png"
            alt="ighub logo"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;

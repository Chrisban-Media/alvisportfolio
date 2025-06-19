import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Ighub = () => {
  return (
    <>
      <Header />
      {/* here is the Ighub Project project page */}
      <div className="justify-between gap-25 p-15">
        <div className="ighub-bg bg-gray-50 grid justify-center items-center w-[100%] h-[calc(90vh-100px)] mx-auto mb-10 left-0">
          <h1 className="ighub pt-20 pb-0 text-7xl font-bold text-[#b5b1b1]">
            IGHUB
          </h1>
          <img
            className="ighubimg w-[45%] mx-auto pb-20"
            src="src/assets/IGHub-Logo.png"
            alt="ighub logo"
          />
        </div>{" "}
        <h1 className="flex gap-10 items-center font-semibold text-4xl">
          Innovation Growth Hub
        </h1>
      </div>
      {/* here are the design lead in the tech field */}
      <div className="flex p-15 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold ">ROLE </h1>

          <p>Product Design Intern</p>
        </div>
        <div className="grid">
          <h1 className="text-2xl font-semibold ">DURATION </h1>
          <p className="flex text-wrap text-justify w-[150%]">
            January to June 2025 (6 months)
          </p>
        </div>
      </div>
      {/* here is second the design lead in the tech field */}
      <div className="flex p-15 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold ">Brief </h1>
        </div>

        <p className="flex text-wrap text-justify w-[150%]">
          At Ighub, I worked on a feature for an internal design tool aimed at
          supporting design systems and improving collaboration between
          designers and engineers. The goal was to streamline communication and
          ensure design consistency across projects. This experience helped me
          understand the importance of design documentation, handoff processes,
          and building tools that scale with teams.
        </p>
      </div>
      {/* here is second the design lead in the tech field */}
      <div className="flex p-15 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold ">Learning and Growth</h1>
        </div>
        <div className="grid gap-5 w-[150%]">
          <p className="flex text-wrap  text-justify">
            During my time working on the Ighub Digitize Your Business project,
            I had the opportunity to deepen my skills in UX/UI
            design—particularly in the areas of wireframing and prototyping. At
            the start of each project, I focused on understanding the business
            goals and user needs through research and collaborative
            brainstorming sessions. From there, I translated those insights into
            low-fidelity wireframes, which helped map out user flows and
            establish the core structure of each product.
          </p>
          <p className="flex text-wrap text-justify">
            As my understanding of design systems and user behavior grew, I
            advanced to creating high-fidelity prototypes using tools like
            Figma. These prototypes allowed stakeholders and clients to interact
            with the design before development, making it easier to gather
            feedback, iterate quickly, and ensure we were solving the right
            problems. I paid close attention to visual hierarchy, consistency,
            and accessibility to ensure the designs were not only interactive
            but also aesthetically pleasing and intuitive to use.
          </p>
          <p className="flex text-wrap text-justify">
            This hands-on process taught me the importance of designing with
            purpose—every button, transition, and layout decision was
            intentional and tied back to improving the overall user experience.
          </p>
        </div>
      </div>
      {/* here is third the design lead in the tech field */}
      <div className="flex p-15 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold ">Takeaway </h1>
        </div>
        <div className="grid gap-5 w-[150%]">
          <p className="flex text-wrap font-semibold text-justify">
            The work was very challenging, but that pushed me to learn more than
            at any other internship.
          </p>
          <p className="flex text-wrap text-justify">
            My internship at Ighub was both challenging and rewarding. I was
            stepping into a completely new environment, and it took time to
            understand the organization’s workflow and culture before diving
            into my specific project. These initial challenges became a key part
            of my learning experience—they pushed me out of my comfort zone and
            encouraged me to take on unfamiliar tasks. Throughout the
            internship, I learned to approach problems from a high-level
            perspective before getting into the finer details. I also gained
            valuable experience working cross-functionally with designers,
            developers, and project leads, which helped me grow both technically
            and professionally.
          </p>
        </div>
      </div>

      <h2 className="flex items-center gap-2 text-3xl font-semibold hover:text-[#b5b1b1] hover:scale-115 transition duration-300 cursor-pinter justify-end">
        Back To Top{" "}
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
      <Footer />
    </>
  );
};

export default Ighub;

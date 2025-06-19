import React from "react";

const Footer = () => {
  return (
    <>
      <h1 className="flex font-[500] lg:text-5xl text-3xl text-[#b5b1b1] lg:p-15 p-5 mt-9">
        Let's Get In Touch
      </h1>
      <div className="lg:flex md:flex grid grid-row flex-wrap lg:gap-15 gap-10 p-[60px] w-[70%] ">
        <h1 className="flex items-center gap-2 text-3xl font-semibold hover:text-[#b5b1b1] hover:scale-115 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={40}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
            ></path>
          </svg>{" "}
          LinkedIn
        </h1>
        <h1 className="flex items-center gap-2 text-3xl font-semibold hover:text-[#b5b1b1] hover:scale-115 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={40}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
            ></path>
          </svg>{" "}
          Twitter
        </h1>
        <h1 className="flex items-center gap-2 text-3xl font-semibold hover:text-[#b5b1b1] hover:scale-115 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={40}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
            ></path>
          </svg>{" "}
          Email
        </h1>
        <h1 className="flex items-center gap-2 text-3xl font-semibold hover:text-[#b5b1b1] hover:scale-115 transition duration-300 cursor-pinter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={40}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
            ></path>
          </svg>{" "}
          WhatsApp
        </h1>
      </div>
      {/* <h2 className="copyright lg:w-100 lg:p-15 lg:flex font-[400] lg:text-2xl md:text-2xl text-[12px] md:flex md:justify-center md:m-10 text-[#000000] p-5 md:w-100 w-100 justify-center text-wrap text-justify">
        Designed by Elvis (UI/UX) and coded by Chrisban-Media
      </h2> */}
    </>
  );
};

export default Footer;

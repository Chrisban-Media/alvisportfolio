//  Ensure this path is correct based on your project structure

import React, { useState, useEffect } from "react";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="flex justify-between items-center lg:text-6xl lg:gap-8 md:gap-6 lg:p-15 text-6xl text-wrap p-5 gap-3">
        <h1 className=" text-[30px] font-semibold">Elvis</h1>{" "}
        {/* <img
          src="./src/assets/ri_moon-line.png"
          className="scale-[0.8]"
          alt=""
        /> */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {" "}
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205c1.026-1.026 1.846-2.051 2.256-3.282c-3.896 1.436-8.409.82-11.486-2.256"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"
              ></path>
            </svg>
          )}{" "}
        </button>
      </div>
      <nav className="flex justify-between lg:p-15 md:p-10 p-5 lg:gap-15 md:gap-10 gap-4 text-gray-500 lg:text-2xl md:text-1xl text-[15px] font-semibold">
        <a className="anime  hover:text-black" href="/">
          Home
        </a>
        <a className="anime  hover:text-black" href="/fun">
          Fun
        </a>
        <a className="anime hover:text-black" href="/about">
          About
        </a>
      </nav>
    </div>
  );
};

export default Header;

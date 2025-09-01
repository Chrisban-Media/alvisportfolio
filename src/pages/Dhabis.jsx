import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dhabis = () => {
  return (
    <>
      <Header />
      {/* dhabis project image image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] md:h-120 mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[80%] w-[70%] overflow-hidden"
            src="src/assets/foodie.png"
            alt="ighub logo"
          />
        </div>
      </div>
      {/* dhabis project button */}
      <div className="flex lg:p-15 p-5 gap-5">
        <button className="btn bg-[#B5B1B1] py-2 px-3 rounded-[5px] font-semibold hover:scale-115 transition duration-300">
          DHABI’S PLACE
        </button>
      </div>
      {/* here are the design lead in the tech field */}
      <div className="flex flex-col md:flex-row lg:p-15 p-5 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="lg:text-4xl text-2xl font-semibold ">ROLE </h1>

          <p>Product Designer & Graphics Designer</p>
        </div>
        <div className="grid">
          <h1 className="lg:text-4xl text-2xl font-semibold ">DURATION </h1>
          <p className="flex text-wrap text-justify w-[150%]">
            April (Till Date)
          </p>
        </div>
      </div>
      {/* the first write-up in Dhabis project page */}
      <div className="lg:flex grid lg:p-15 p-5 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold">Brief </h1>
        </div>

        <p className="text-justify py-5 lg:mt-0 mt-[-10%] lg:w-[150%]">
          At Dhabi's Place, I led the visual rebranding effort designing the
          logo, marketing materials, and social media content.
        </p>
      </div>
      {/* the second write-up in Dhabis project page */}
      <div className="lg:flex grid lg:p-15 p-5 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold">Learning and Growth </h1>
        </div>

        <p className="text-justify py-5 lg:mt-0 mt-[-10%] lg:w-[150%]">
          At Dhabi's Place, I was playing a key role in revitalizing the brand’s
          visual identity—from redesigning the logo to creating marketing
          materials such as flyers and social media content. I was approaching
          the project with the same dedication and care as if it were my own
          business, consistently producing daily design assets to maintain brand
          engagement and visibility. This hands-on experience was allowing me to
          explore and master new design tools like Adobe Photoshop, while giving
          me the creative freedom to experiment, iterate, and grow as a
          designer. It was becoming a rewarding process that was strengthening
          both my visual design skills and my ability to build a cohesive brand
          presence from the ground up.
        </p>
      </div>

      {/* dhabis project image image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] md:h-120 mx-auto">
        <div className="flex justify-center items-center gap-30">
          <img
            className="workimg lg:w-[80%] w-[70%] overflow-hidden"
            src="src/assets/foodie.png"
            alt="ighub logo"
          />
        </div>
      </div>
      {/* the third write-up in Dhabis project page */}
      <div className="lg:flex grid lg:p-15 p-5 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold ">Goal</h1>
        </div>

        <p className="text-justify py-5 lg:mt-0 mt-[-10%] lg:w-[150%]">
          My main goal was to keep Dhabi's Place visually aligned with modern
          food brand trends by consistently updating its design presence.
          Looking ahead, I aimed to expand the brand’s digital footprint by
          designing a website and mobile app to improve customer engagement and
          create a faster, more seamless connection between the business and its
          audience.
        </p>
      </div>
      {/* here is the customer review image in dhabis project page */}

      <div className="grid lg:p-15 p-5 gap-20">
        <img
          className="lg:rounded-2xl rounded-[5px] h-auto w-100%"
          src="src/assets/funImages/dhabisreview.png"
          alt="customer review"
        />
      </div>
      {/* the fourth write-up in Dhabis project page */}
      <div className="lg:flex grid lg:p-15 p-5 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold ">Takeaway</h1>
        </div>

        <p className="text-justify py-5 lg:mt-0 mt-[-10%] lg:w-[150%]">
          My main goal was to keep Dhabi's Place visually aligned with modern
          food brand trends by consistently updating its design presence.
          Looking ahead, I aimed to expand the brand's digital footprint by
          designing a website and mobile app to improve customer engagement and
          create a faster, more seamless connection between the business and its
          audience.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Dhabis;

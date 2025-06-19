import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Fun = () => {
  return (
    <>
      <Header />
      {/* fun project (wallets) image */}
      <div className=" ighub-bg bg-gray-50 grid justify-center items-center lg:w-[80%] w-[90%] lg:h-[calc(90vh-100px)] h-[calc(50vh-100px)] mx-auto mb-10 left-0">
        <div className="flex gap-10 justify-center">
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
      {/* fun project button */}
      <div className="flex p-15 gap-5">
        <button className="btn bg-[#B5B1B1] py-2 px-3 rounded-[5px] font-semibold hover:scale-115 transition duration-300">
          FUN PROJECT
        </button>
      </div>
      {/* here is second the design lead in the tech field */}
      <div className="lg:flex grid lg:p-15 p-5 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold">Brief </h1>
        </div>

        <p className="text-justify py-5  lg:w-[150%]">
          During my internship, I spent my free time experimenting with new
          prototyping trends I came across on Twitter, YouTube, and TikTok.
          These fun side projects ranged from micro-interactions to AI-driven UI
          concepts, giving me a space to test ideas quickly and push creative
          boundaries. It was a playground for learning—exploring tools, motion
          design, and unconventional UX patterns. These explorations not only
          sharpened my technical skills but also deepened my understanding of
          how trends evolve and how to balance novelty with usability in
          real-world products.
        </p>
      </div>
      {/* here is second the design lead in the tech field */}
      <div className="lg:flex grid lg:p-15 p-5 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold">Learning and Growth</h1>
        </div>
        <div className="text-justify py-5  lg:w-[150%]">
          <p className="text-justify text-w py-5 lg:w-[100%]">
            On my free days during the internship, I loved diving into the
            latest UI design and prototyping trends shared by senior designers
            on Twitter, YouTube, and TikTok. I’d come across slick
            microinteractions, clever layout ideas, or new animation
            techniques—and immediately try to recreate them in Figma. It became
            a fun habit: spot something cool, break it down, and rebuild it with
            my own twist.
          </p>
          <p className="text-justify text-wrap py-5 lg:w-[100%]">
            These mini passion projects helped me sharpen my design eye and
            improve my speed in tools like Figma and Framer. I’d often challenge
            myself to turn static designs into interactive prototypes, testing
            out hover effects, smooth transitions, and user flows that felt both
            fun and functional. Some of these experiments even inspired ideas I
            brought into real client work later on. This self-driven practice
            not only boosted my creativity but also taught me how to learn by
            doing—failing fast, iterating quickly, and staying curious about how
            great design works behind the scenes.
          </p>
        </div>
      </div>
      <div className="grid lg:p-15 p-5 gap-20">
        <img
          className="funimg lg:rounded-2xl rounded-[5px] h-auto w-100%"
          src="src/assets/funImages/fun1.png"
          alt="fun project image"
        />
        <img
          className="funimg lg:rounded-2xl rounded-[5px] h-auto w-100%"
          src="src/assets/funImages/fun2.png"
          alt="fun project image"
        />
        <img
          className="funimg lg:rounded-2xl rounded-[5px] h-auto w-100%"
          src="src/assets/funImages/fun3.png"
          alt="fun project image"
        />
        <img
          className="funimg lg:rounded-2xl rounded-[5px] h-auto w-100%"
          src="src/assets/funImages/fun4.png"
          alt="fun project image"
        />
      </div>
      {/* here is second the design lead in the tech field */}
      <div className="lg:flex grid lg:p-15 p-5 gap-10">
        <div className="grid gap-8 w-[100%]">
          <h1 className="text-4xl font-semibold ">Takeaway</h1>
        </div>
        <div className="text-justify py-5  lg:w-[150%]">
          <p className="text-justify text-wrap py-5 lg:w-[100%]">
            On my free days, I explored UI design and prototyping trends shared
            by senior designers on Twitter, YouTube, and TikTok—recreating them
            in Figma and experimenting with animations, layouts, and
            interactions to sharpen my skills.
          </p>
          <p className="text-justify text-wrap py-5 lg:w-[100%]">
            I learned how to design with intention—balancing creativity with
            usability. From collaborating on real projects to exploring trends
            in my free time, I gained a deeper understanding of user needs,
            design systems, and the power of prototyping. Most importantly, I
            learned how to think like a problem-solver, stay curious, and keep
            improving through practice.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fun;

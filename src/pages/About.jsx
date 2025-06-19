import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />

      {/* this is the main hero section */}
      <div className="lg:flex grid text-wrap justify-between mt-15 gap-15 lg:p-15 p-5 items-center">
        {/* hero image */}
        <img
          className=" lg:hidden md:block block lg:w-100 md:w-[100%] w-[100%] md:h-200 h-auto"
          src="src/assets/profilepic.png"
          alt="profile-images"
        />
        <div className="grid flex-col gap-8 ">
          <h1 className="flex lg:font-[900] font-[900] lg:text-6xl md:text-8xl text-5xl text-[#B5B1B1]">
            Hey there,
          </h1>
          <h1 className="skill flex font-[900] text-6xl md:text-8xl text-black dark:">
            I’m Elvis
          </h1>
          <p className="text-justify py-10 md:text-2xl">
            I’m a product designer who didn’t start with a background in design
            in fact, I knew nothing about it until I stumbled into a frontend
            design class. That’s where everything clicked. I found myself
            fascinated by the way digital interfaces could tell stories, solve
            problems, and shape how people interact with the world. I’d catch
            myself staring at digital billboards or app screens, not for what
            they said, but for how they were designed. What began as curiosity
            quickly turned into a passion for creating intuitive, meaningful
            experiences that bridge form and function. Today, I channel that
            passion into crafting thoughtful digital products that make everyday
            interactions smoother and more enjoyable.  I studied Soil Science
            and land resource management in the university of Nigeria Nsukka,
            and as a recent grad, I'm looking forward to my next chapter!
          </p>{" "}
        </div>

        {/* hero image */}
        <img
          className="aboutimg lg:block hidden"
          src="src/assets/profilepic.png"
          alt=""
        />
      </div>

      {/* this is the RESUME in the About Page */}
      <div className="flex flex-wrap gap-15 p-[60px] w-[70%] ">
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
          Resume
        </h1>
      </div>

      {/* this is the Community in the About Page */}
      <div className="grid justify-between gap-25 lg:p-15 md:p-5 p-5">
        <h1 className="text-[#B5B1B1] font-bold md:text-8xl lg:text-8xl text-5xl lg:p-15 p-5">
          Community
        </h1>
      </div>
      {/* here are the design lead in the tech field */}
      <div className="lg:flex lg:p-15 p-5 grid gap-10 md:p-5">
        <div className="grid gap-8 w-[100%] lg:items-center">
          <h1 className="text-4xl font-semibold ">
            Design Lead & Product Designer{" "}
          </h1>
          <p className="md:text-2xl">
            Civic Connect Hackathon, Abia state - May 2025{" "}
          </p>
        </div>

        <p className="text-justify py-10 md:text-2xl lg:text-[20px] lg:w-[160%]">
          During that time, I dedicated myself to building a digital platform
          aimed at bridging the gap between the government and its
          citizens—focusing on key areas such as healthcare, education,
          infrastructure, and public safety. The project not only allowed me to
          think critically about real-world challenges but also gave me my first
          hands-on exposure to User Experience (UX) design. Through
          collaborative brainstorming sessions, I discovered how thoughtful
          design could simplify complex systems and create more transparent,
          accessible solutions for the people who need them most.
        </p>
      </div>
      {/* here are the design lead in the tech field */}
      <div className="lg:flex lg:p-15 p-5 gap-10 md:p-5">
        <div className="grid lg:gap-8 gap-20 w-[100%]">
          <h1 className="text-4xl font-semibold ">
            Design Lead & Product Designer{" "}
          </h1>
          <p className="md:text-2xl mt-[-50px]">Zollo Bitters -June 2025 </p>
        </div>

        <p className="text-justify py-10 md:text-2xl lg:text-[20px] lg:w-[160%]">
          I spent that period designing and building a digital product—a web
          app—for Zello Bitters, a drink brand. The goal was to create a
          user-friendly platform that allowed customers to easily browse and
          order drinks while also supporting the brand’s digital marketing
          efforts. This project gave me the opportunity to explore the full user
          experience (UX) process—from conducting user research and defining
          customer personas to wireframing, prototyping, and refining the
          interface. Brainstorming sessions were especially valuable, helping me
          understand user behavior, identify pain points, and design intuitive
          solutions that aligned both with customer needs and the brand’s
          marketing goals.
        </p>
      </div>

      {/* Here is the Others Page in the ABout Page */}

      <div className="grid justify-between gap-25 p-15">
        <h1 className="text-[#B5B1B1] font-bold md:text-8xl lg:text-8xl text-7xl lg:p-15 p-5">
          Other.
        </h1>
      </div>
      {/* here are the movies i watch */}
      <div className="lg:flex grid lg:p-15 p-5 lg:gap-10 gap-10 md:p-5">
        <div className="grid lg:gap-8 gap-20 w-[100%]">
          <h1 className="text-4xl font-semibold ">What I'm listening to </h1>
          <p className="w-[70%] md:text-2xl lg:mt-[-30%] mt-[-10%] w-[100%]">
            5ive Album by Davido, Not Like Us by Kendrick lamar, City Boys by
            Burna Boy
          </p>
        </div>

        <p className="text-justify py-10 md:text-2xl lg:text-[20px] lg:w-[160%]">
          I spent that period designing and building a digital product—a web
          app—for Zello Bitters, a drink brand. The goal was to create a
          user-friendly platform that allowed customers to easily browse and
          order drinks while also supporting the brand’s digital marketing
          efforts. This project gave me the opportunity to explore the full user
          experience (UX) process—from conducting user research and defining
          customer personas to wireframing, prototyping, and refining the
          interface. Brainstorming sessions were especially valuable, helping me
          understand user behavior, identify pain points, and design intuitive
          solutions that aligned both with customer needs and the brand’s
          marketing goals.
        </p>
      </div>
      {/* here are the musics i listen */}
      <div className="lg:flex grid lg:p-15 p-5 md:p-5 lg:w-[100%]">
        <div className="grid lg:gap-8 gap-20 w-[100%]">
          <h1 className="lg:text-4xl text-2xl item-center w-[100%] md:gap-5 font-semibold ">
            What I'm Listening
          </h1>
          <p className="w-[70%] md:text-2xl lg:mt-[2%] mt-[-10%] w-[100%]">
            Prison Break, Money Heist, Blacklist, Mission Impossible, Suits,
            Jujutsu Kaisen
          </p>
        </div>

        <div className="lg:grid grid lg:grid-cols-3 md:grid-col-3 md:flex grid-cols-1 gap-4 lg:gap-5 lg:w-[100%] w-[100%] p-5">
          <img
            className="rounded-2xl lg:w-[100%] md:w-[50%] w-[100%]"
            src="src/assets/music.png"
            alt="music"
          />
          <img
            className="rounded-2xl lg:w-[100%] md:w-[50%] w-[100%]"
            src="src/assets/music2.png"
            alt="music"
          />
          <img
            className="rounded-2xl lg:w-[100%] md:w-[50%] w-[100%]"
            src="src/assets/music3.png"
            alt="music"
          />
        </div>
      </div>
      {/* here are the movies i watch */}
      <div className="lg:flex grid lg:p-15 p-5 md:p-5 lg:w-[100%]">
        <div className="grid lg:gap-8 gap-20 w-[100%]">
          <h1 className="lg:text-4xl text-2xl item-center w-[100%] font-semibold ">
            What I'm watching
          </h1>
          <p className="w-[70%] md:text-2xl lg:mt-[-40%] mt-[-10%] w-[100%]">
            Prison Break, Money Heist, Blacklist, Mission Impossible, Suits,
            Jujutsu Kaisen
          </p>
        </div>

        <div className="lg:grid grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 lg:gap-5 lg:w-[100%] w-[100%] p-5">
          <img
            className="rounded-2xl lg:w-[100%] md:w-[100%] w-[100%]"
            src="src/assets/movie1.png"
            alt="music"
          />
          <img
            className="rounded-2xl lg:w-[100%] md:w-[100%] w-[100%]"
            src="src/assets/movie2.png"
            alt="music"
          />
          <img
            className="rounded-2xl lg:w-[100%] md:w-[100%] w-[100%]"
            src="src/assets/movie3.png"
            alt="music"
          />
          <img
            className="rounded-2xl lg:w-[100%] md:w-[100%] w-[100%]"
            src="src/assets/movie4.png"
            alt="music"
          />
          <img
            className="rounded-2xl lg:w-[100%] md:w-[100%] w-[100%]"
            src="src/assets/movie5.png"
            alt="music"
          />
          <img
            className="rounded-2xl lg:w-[100%] md:w-[100%] w-[100%]"
            src="src/assets/movie6.png"
            alt="music"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

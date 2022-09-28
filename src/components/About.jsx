import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#102b53] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="maw-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="maw-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Ramzi, nice to meet you, Please take a look around.</p>
          </div>
          <div>
            <p>
              Full Stack developer passionate about new technologies and web
              development area with a curiosity about learning new stuff. I have
              a national degree in computer science from The Higher Institute of
              Applied Sciences and Technology of Sousse (ISSAT Sousse)
              specialized in "Software Engineering And information system". I am
              good at programming and any area related to innovative technology,
              creating Websites and applications with a background in algorithms
              and data structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

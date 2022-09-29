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
            A full Stack developer with a national degree in computer science from The Higher Institute of Applied Sciences and Technology of Sousse (ISSAT Sousse) specialized in "Software Engineering And information system". I am good at programming and any field related to innovative technology, creating websites and applications with good practices in website design as well as experience in algorithms and data structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

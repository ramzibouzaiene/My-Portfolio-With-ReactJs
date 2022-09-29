import React from "react";
import website from "../assets/website.jpg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#102b53] py-6"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Projects
          </p>
          <p className="py-3">Check out some of my recent projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${website})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                4C Backend Laravel
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ramzibouzaiene/4C_Backend_Laravel">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${website})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                4C Frontend Angular
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ramzibouzaiene/4C_frontend_Angular">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${website})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Nachd-IT Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ramzibouzaiene/Nachd-IT-Website-Laravel-7-">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${website})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                My Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ramzibouzaiene/My-Portfolio-ReactJS">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${website})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Team Generator
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ramzibouzaiene/Team-Generator-With-Angular">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${website})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex
                justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Laravel CRUD
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/ramzibouzaiene/CRUD-App-With-Laravel">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white 
                  text-gray-700 font-bold text-lg
                  "
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

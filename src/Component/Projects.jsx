import React from "react";
import "./Global.css";

const Projects = () => {
  return (
    <>
      <div className="w-full Projects p-5 my-3 flex gap-28 justify-center flex-wrap">
        <div
          className="detail border-4 border-white w-96 p-2 boxShadow hover:scale-110 transition-all delay-105"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src="https://w3layouts.b-cdn.net/wp-content/uploads/2017/01/electronic_store_Free30-01-2017_1525658535.jpg" />
          </div>

          <div className="Project-Detail flex flex-col items-center">
            <h1 className="text-white text-2xl my-3 text-center">
              E-commerce Website
            </h1>
            <p className="text-white text-xl text-center">
              The project aims to develop a fully functional e-commerce website
              using ReactJS for the frontend.
            </p>
            <button className="bg-red-400 w-36 h-10 my-4 font-bold">
              <a
                href="https://github.com/Vednidhi930/E-commerce-"
                className="hover:text-black"
              >
                View on Github
              </a>
            </button>
          </div>
        </div>

        <div
          className="detail border-4 boxShadow border-white w-96 p-2 drop-shadow-lg hover:scale-110 transition-all delay-100"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src="https://puretables.com/assets/images/lowercase-to-uppercase-converter-example.png" />
          </div>

          <div className="Project-Detail flex flex-col items-center">
            <h1 className="text-white text-2xl my-3 text-center">
              Text Utilise
            </h1>
            <p className="text-white text-xl text-center">
              Text Utilize enables users to obtain accurate word counts and
              analyze character frequencies within a document
            </p>
            <button className="bg-red-400 w-36 h-10 my-4 font-bold">
              <a
                href="https://github.com/Vednidhi930/ReactFirst-Project"
                className="hover:text-black"
              >
                View on Github
              </a>
            </button>
          </div>
        </div>

        <div
          className="detail border-4 border-white w-96 p-2 boxShadow drop-shadow-lg hover:scale-110 transition-all delay-100"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src="https://i.pinimg.com/originals/a2/6e/42/a26e42330d1517409842ff321f1fa906.png" />
          </div>

          <div className="Project-Detail flex flex-col items-center">
            <h1 className="text-white text-2xl my-3 text-center">
              Food Delivery
            </h1>
            <p className="text-white text-xl text-center">
              Discover new recipes tailored to your taste preferences with
              FoodFusion's personalized recommendation feature.{" "}
            </p>
            <button className="bg-red-400 w-36 h-10 my-4 font-bold">
              <a
                href="https://github.com/Vednidhi930/Food-Websitet"
                className="hover:text-black"
              >
                View on Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

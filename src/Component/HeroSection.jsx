import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section
        style={{backgroundImage: "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)"}}
        className="sm:h-screen flex items-center w-full lg:flex-nowrap sm:flex-wrap"
      >
        <div className="Left-part flex flex-col lg:w-2/4  items-center">
          <div className="Social-links p-2 flex gap-1 justify-center w-1/4">
            <div
              className="Instagram border-2 border-red-400 w-12 h-12 flex items-center justify-center rounded-full"
              style={{backgroundImage: "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)"}}
            >
              <a href="https://www.instagram.com/confident_coder/">
                <FaInstagram className="text-2xl text-white hover:scale-110" />
              </a>
            </div>
            <div
              className="Github border-2 border-red-400 w-12 h-12 flex items-center justify-center rounded-full"
              style={{backgroundImage: "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)"}}
            >
              <a href="https://github.com/vednidhi930">
                <FaGithub className="text-2xl text-white hover:scale-110" />
              </a>
            </div>
          </div>

          <div className="My-detail w-4/4  p-2 my-2">
            <h4 className="text-white text-2xl font-serif ms-24">Hello!</h4>
            <h1 className="text-white text-6xl ms-24 font-bold text-nowrap my-3">
              I'm <span className="text-6xl text-red-400">Vednidhi</span>
            </h1>
            <h3 className="text-white text-2xl font-serif ms-24 my-3">Freelance UI/UX & Website Designer</h3>
            <p className="text-white ms-24 my-2 text-2xl">
              I'M vednidhi,a passionate web developer with a knack for turning
              ideas into captivating online experiences.
            </p>
          </div>
        </div>

        <div className="Right-part flex lg:w-2/4 me-7">
          <img src="https://www.dharmishi.com/img/vectors/developer.png" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;

import React from "react";
import "./Global.css"

const Skills = () => {
  return (
    <>
      <div className="Skills p-3 flex justify-center items-center my-4">
        <div className="skills-Text-part w-3/5 p-3 rounded-lg flex flex-col items-center boxShadow" style={{backgroundImage: "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)"}}>
          <h1 className="text-4xl text-white font-bold text-center">My Skills</h1>
          <p className="text-white text-xl text-center my-5 font-bold">
          
           "Proficient in HTML, CSS, and JavaScript, I design and develop captivating web interfaces with seamless functionality. Leveraging Tailwind CSS, I bring modern, 
              responsive designs to life, ensuring a polished and user-friendly experience."
          </p>

          <div className="skills-Ui flex gap-5 my-5 flex-wrap justify-center items-center">
            <div className="border-2 boxShadow border-white w-64 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-black transition-all delay-100">
              <img
                src="https://clipground.com/images/html-logo-png-3.png"
                className="w-24"
              />
              <h1 className="text-white font-bold text-xl">HTML</h1>
            </div>

            <div className="border-2 boxShadow border-white w-64 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-black transition-all delay-100">
              <img
                src="https://logospng.org/download/css-3/logo-css-3-2048.png"
                className="w-16"
              />
              <h1 className="text-white font-bold text-xl">CSS</h1>
            </div>

            <div className="border-2 boxShadow border-white w-64 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-black transition-all delay-100">
              <img
                src="https://logosdownload.com/logo/javascript-logo-big.png"
                className="w-12"
              />
              <h1 className="text-white font-bold text-xl">Javascript</h1>
            </div>

            <div className="border-2 boxShadow border-white w-64 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-black transition-all delay-100">
              <img
                src="https://logodix.com/logo/1658364.png"
                className="w-24"
              />
              <h1 className="text-white font-bold text-xl">Reactjs</h1>
            </div>

            <div className="border-2 boxShadow border-white w-64 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-black transition-all delay-100">
              <img
                src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
                className="w-24"
              />
              <h1 className="text-white font-bold text-xl">Tailwind</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

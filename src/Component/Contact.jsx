import React from "react";
import "./Global.css";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
    
      <div className="w-full p-2 flex flex-col items-center">
        <div className="w-3/5  p-2 rounded-lg">
          <h1 className="text-6xl text-white text-center my-2">Contact me</h1>
          <p className="text-2xl text-white text-wrap text-center my-4">
            In order to discuss the project in more detail,Please contact me by
            phone <br />
            or through social networks. The productivity will have a personal
            meeting.if you are in Novosibirsk.
          </p>
        </div>
      </div>

      <div className="p-2 flex">
        <div className="w-screen flex justify-center flex-col items-center my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111785.35316550886!2d76.53393224610517!3d28.88966129283455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85a5414251a5%3A0x9f011cc2777a4544!2sRohtak%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709395256083!5m2!1sen!2sin"
            width="100%"
            height="220"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="w-full  flex flex-col items-center p-5">
            <input
              type="text"
              className=" outline-none w-96 my-2 h-12 text-xl p-3 border-b-4 border-black"
              placeholder="First Name"
              style={{ background: "rgba(223, 228, 234,1.0)" }}
            />
            <input
              type="text"
              className="outline-none w-96 my-2 h-12 text-xl p-3  border-b-4 border-black"
              placeholder="Email"
              style={{ background: "rgba(223, 228, 234,1.0)" }}
            />
            <textarea
              className="outline-none w-96 h-36 text-xl p-3 my-4  border-b-4 border-black"
              placeholder="Text your message here..."
              style={{ background: "rgba(223, 228, 234,1.0)" }}
            />
            <button className="bg-red-400 w-24 h-10 font-bold my-2 opacity-80 hover:opacity-100">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

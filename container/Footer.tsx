import localImagesList from "@/constant/imagesList";
import { AppWrap, MotionWrap } from "@/wrapper";
import Image from "next/image";
import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <Image
            src={localImagesList.email}
            alt="email"
            width={500}
            height={500}
          />
          <a href="mailto:khayattullah73@gmail.com" className="p-text">
            khayattullah73@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <Image
            src={localImagesList.mobile}
            alt="phone"
            width={500}
            height={500}
          />
          <a href="https://wa.me/087762804486" className="p-text">
            +62 877 6280 4486
          </a>
        </div>
      </div>

      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              // value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              // value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              // value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className="p-text"
            // onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer app__flex"),
  "contact",
  "app__whitebg"
);

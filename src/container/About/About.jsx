import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";

const abouts = [
  {
    title: "Frontend Development",
    description: "I am highly creative in frontend web development.",
    imgUrl: images.about01,
  },
  {
    title: "Backend Development",
    description: "I am a professional in using backend technologies.",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX Design",
    description: "Industry standard design knowhow.",
    imgUrl: images.about03,
  },
  {
    title: "Web Animations",
    description: "Flawless web animations.",
    imgUrl: images.about04,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Dev</span>
        <br />
        Means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;

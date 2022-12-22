import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <AiFillLinkedin />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <AiFillGithub />
      </div>
    </div>
  );
};

export default SocialMedia;

import React, { useEffect } from "react";
import Navbar from "..//Navbar";
import "..//Home/Home.scss";

import { ColorRing } from "react-loader-spinner";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Home() {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <div className="hero">
          <div className="hero-details">
            <h3>
              <span>👋</span> Hello{" "}
              <span style={{ color: "rgb(2, 251, 168)" }}> I'm</span>
            </h3>
            <h1>Abhay Kumawat</h1>

            <h4>Frontend Developer || React Js Developer</h4>

            <p>
              I am a Frontend Developer with a passion for building visually
              stunning and responsive websites that engage users. With a strong
              foundation in HTML, CSS, JavaScript ane React JS!
            </p>

            <div className="icons">
              <a href="https://www.linkedin.com/in/abhay-kumawat-a62a23213">
                {" "}
                <LinkedInIcon className="social-icons" />
              </a>
              <a href="https://twitter.com/AbhayKu29245043?t=XwnQa01Z7nEDSOjQrsLHKA&s=09">
                {" "}
                <TwitterIcon className="social-icons" />
              </a>
              <a href="https://www.instagram.com/mr.abhaykumawat/">
                {" "}
                <InstagramIcon className="social-icons" />
              </a>
              <a href="https://www.facebook.com/people/Abhay-Kumawat/pfbid02djvyjvBW9ED5p8JRpFhw85SngQE2zBZQoBQf2GRPGXuT7cdDxM91gGPAbm47cwwel/">
                {" "}
                <FacebookRoundedIcon className="social-icons" />
              </a>
              <a href="https://github.com/abhaykmwt">
                {" "}
                <GitHubIcon className="social-icons" />
              </a>
            </div>
            <br />

            <div className="btn-main">
              <a href="mailto:abhaykumawat81@gmail.com">
                {" "}
                <button className="btn">Let's Talk</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

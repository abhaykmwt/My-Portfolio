import React from "react";
import "..//Footers/Footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function Footer() {
  return (
    <>
      <div className="footer-main">
        <h1 style={{ paddingTop: "1.2%" }}>
          Abhay <span style={{ color: "aquamarine" }}>Kumawat</span>
        </h1>
        <h6 style={{ textAlign: "center" }}>
          Passionate Frontend Developer Bringing Ideas to Life Through Code
        </h6>
        <p style={{ textAlign: "center", paddingTop: "1.2%" }}>
          © Copyright 2022. All Rights Reserved
        </p>
        <div className="footer-icons">
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
          <div className="navigate-top">
            <a href="/Home">
              <ArrowUpwardIcon />
            </a>
          </div>
        </div>
        <div className="Footer-container">
          <hr />{" "}
          <p style={{ textAlign: "center" }}>
            Developed By <spna>😎</spna>{" "}
            <span style={{ color: "wheat" }}>Abhay Kumawat</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

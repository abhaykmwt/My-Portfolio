import React from "react";
import "..//About/About.scss";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MonitorIcon from "@mui/icons-material/Monitor";

function About() {
  return (
    <>
      <hr style={{ marginTop: "6%" }} />

      <div className="container">
        <div className="hero-about">
          <h1>
            About <span>Me</span>
          </h1>
        </div>
        <div className="About-me">
          <p>
            As a Frontend Developer, I am dedicated to creating visually
            appealing and user-friendly web experiences. With expertise in HTML,
            CSS, JavaScript, and responsive design principles, I am committed to
            staying up-to-date with the latest industry trends to deliver the
            best results. As a fresher, I am excited to bring my creativity,
            technical skills, and passion to contribute to any project...
          </p>
          <div className="personaldetails">
            <h2 style={{ textAlign: "center" }}>
              Any Type Of Query &
              <span style={{ color: "rgb(0, 255, 170)" }}> Discussion</span>
            </h2>

            <br />

            <div className="per-mob">
              <h5>
                <span>
                  <PersonIcon />
                </span>
                Abhay
                <span style={{ color: "rgb(0, 255, 170)" }}> Kummawat</span>
              </h5>
            </div>
            <br />
            <div className="per-mob">
              <a
                href="tel:+917489433640"
                style={{ textDecoration: "none", color: "white" }}
              >
                <h5>
                  <span>
                    <PhoneIcon />
                  </span>
                  7489433
                  <span style={{ color: "rgb(0, 255, 170)" }}>640</span>
                </h5>
              </a>
            </div>

            <br />

            <div className="per-email">
              <a
                href="mailto:abhaykumawat81@gmail.com"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <h5>
                  <span>
                    <MarkunreadOutlinedIcon />
                  </span>
                  AbhayKumawat81
                  <span style={{ color: "rgb(0, 255, 170)" }}>@gmail.Com</span>
                </h5>
              </a>
            </div>
          </div>
          <br />{" "}
        </div>
        {/* //service i offered */}
        <br />
        <div className="our-services">
          <h3>
            <span>
              <MedicalServicesIcon /> &nbsp;
            </span>
            Our <span style={{ color: "rgb(0, 255, 170)" }}>Services</span>
          </h3>
        </div>
        <div className="tech-service">
          <div className="service">
            <MonitorIcon style={{ fontSize: "115px" }} />
            <h3>
              {" "}
              Frontend{" "}
              <span style={{ color: "rgb(0, 255, 170)" }}>Developer</span>{" "}
            </h3>

            <p>
              I'm a Front-End Engineer and can craft stunning and
              high-performing products with a delightful user experience
            </p>
          </div>

          <div className="react-service">
            {/* <img src="https://img.icons8.com/color/256/react-native.png"></img> */}
            <ion-icon name="logo-react"></ion-icon>
            <h3>
              {" "}
              ReactJS{" "}
              <span style={{ color: "rgb(0, 255, 170)" }}>Developer</span>{" "}
            </h3>
            <p>
              Skilled React JS Developer I'm Ready to Tackle Your Project Needs
              Today!.Building dynamic web apps with ReactJS expertise
            </p>
          </div>
        </div>
        <br />

        <div className="btn11" style={{ textAlign: "center" }}>
          <a href="Resumepdf\Abhay's Resume.pdf" target="blank">
            <button className="btn12">
              <DownloadOutlinedIcon />
              &nbsp;Download{" "}
              <span style={{ color: "rgb(1, 135, 145)" }}>Resume</span>
            </button>
          </a>
        </div>

        {/* //service i offered end  */}
      </div>
    </>
  );
}

export default About;

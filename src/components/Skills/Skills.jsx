import React from "react";
import "..//Skills/Skills.scss";

function Skills() {
  return (
    <>
      <div className="container-skills">
        {/* Our TechnicalSkills section start */}
        <div>
          {" "}
          <h1 style={{ textAlign: "center", paddingTop: "5%" }}>
            Technical <span style={{ color: "rgb(0, 255, 170)" }}>Skills</span>
          </h1>
        </div>
        <div className="tech-skills">
          <div className="skills">
            <img src="https://img.icons8.com/color/256/react-native.png"></img>
          </div>
          <div className="skills">
            <img
              src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp"
              style={{
                height: "145px",
                width: "150px",
              }}
            ></img>
          </div>
          <div className="skills">
            <img src="https://img.icons8.com/color/256/javascript.png"></img>
          </div>
          <div className="skills">
            <img src="https://img.icons8.com/color/256/css3.png"></img>
          </div>

          <div className="skills">
            <img src="https://img.icons8.com/color/256/html-5--v1.png"></img>
          </div>
          <div className="skills">
            <img src="https://img.icons8.com/color/256/bootstrap.png"></img>
          </div>
          <div className="skills">
            <img src="https://img.icons8.com/color/256/sass.png"></img>
          </div>
          <div className="skills">
            <img
              src="https://img.icons8.com/color/256/firebase.png"
              style={{ height: "140px", width: "140px" }}
            ></img>
          </div>
        </div>
        {/* ..........!Our TechnicalSkills section end !..........*/}
        {/*.................! Our TechnicalTools section end !.........*/}
        <h1 style={{ textAlign: "center", paddingTop: "1%" }}>
          Tools <span style={{ color: "rgb(0, 255, 170)" }}>I Use</span>
        </h1>
        <div className="tech-skills">
          <div className="skills">
            <img src="https://img.icons8.com/color/256/git.png"></img>
          </div>
          <div className="skills">
            <img src="https://img.icons8.com/color/256/visual-studio.png"></img>
          </div>
          <div className="skills">
            <img src="https://img.icons8.com/color/256/windows-10.png"></img>
          </div>
          <div className="skills">
            <img src="https://img.icons8.com/color/256/github.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

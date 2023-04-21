import React from "react";
import "..//EducationBar/EducationBar.scss";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
function EducationBar() {
  const style = {
    backgroundColor: "transparent",
    boxShadow: "0px 3px 12px 0px #ccc",
    border: "none",
    width: "50%",
    borderRadius: "5px",
  };
  return (
    <>
      <br />

      <div className="EducationBAr-container">
        <h1 style={{ textAlign: "center" }}>
          Ed<span style={{ color: "rgb(0, 255, 170)" }}>ucation</span>
        </h1>

        <div className="con">
          <main className="row">
            {/* <!****** Education section start *****----> */}
            <section className="col">
              <header>{/* <h2>EDUCATION</h2> */}</header>

              <div className="contens">
                <div className="box">
                  {" "}
                  {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <p style={{ fontSize: "12px" }}>Bhopal</p>
                  </div> */}
                  <img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya_logo.png"></img>
                  <nobr style={{ fontSize: "20px" }}>&nbsp; RGPV</nobr>
                  <h4>2021-2025</h4>
                  <h3>Rajiv Gandhi Proudyogiki Vishwavidyalaya Bhopal</h3>
                  <p>
                    I am doing my bachelor's degree in this institute. My course
                    is Bachelors in technology in computer sceince
                  </p>
                  <a href="https://www.rgpv.ac.in/" target="blank">
                    {" "}
                    <button className="webbtn">
                      Website <CallMissedOutgoingIcon />
                    </button>
                  </a>
                </div>
                <div className="box">
                  {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <p style={{ fontSize: "12px" }}>Online</p>
                  </div> */}
                  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYcv6jsnExU3OvCq_36uALiilk-sleFSOVYGxKtO9m2mlF866zkEEa-7sBkWaEM_MMCsiBo276snPAkhSGFew6TWrfuHsu96316etwkBxVOhUE-ibO_ahM2rIeJurTSjxbz5_aYTEyXNbD-_4bSHdCzrSMOyw4eKeV_U8jKhpZeZ0G0LTdHDaWXrY_hQ/s415/WhatsApp_Image_2023-04-13_at_9.42.40_PM-removebg-preview.png"></img>
                  &nbsp; <nobr style={{ fontSize: "20px" }}>Devsnext</nobr>
                  <a href="https://devsnest.in/">
                    <nobr>
                      <CallMissedOutgoingIcon />
                    </nobr>
                  </a>
                  <h4>07/2022 - 09/2022</h4>
                  <h3>
                    Frontend <span>Developement</span>
                  </h3>
                  <p>
                    I am doing my bachelor's degree in this institute. My course
                    is Bachelors in technology in computer sceince
                  </p>
                  <a
                    href="src\components\EducationBar\Devsnext.jpeg"
                    target="blank"
                  >
                    {" "}
                    <button className="webbtn">
                      Certificate <CallMissedOutgoingIcon />
                    </button>
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default EducationBar;

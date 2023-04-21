import React from "react";
import "..//Projects/Projects.scss";
import { Button } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  return (
    <>
      <div className="container-Projects ">
        <h1>
          My <span style={{ color: "rgb(0, 255, 170)" }}>Projects</span>
        </h1>
        <h5 style={{ textAlign: "center" }}>
          Here are a few projects I've worked on recently.!
        </h5>
        <div className="My-projects">
          <div className="Projects">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPf-oGLMsC1My13pDTsDrqIpuUjxwSgVdSwDiQvsEGIsIgOvvdaKuRCp0OmkoT4n8tagwyM8oo8hSNjuAHB3wShwqT1ipEg86VJlP-lj9bIkld3DXZZh8BAsq9cZMKrrc4mxK1ORbMjgNanvZBv_NZxA1kggyBblRJJM-qhrcQBjuDz86xeOkenhDweg/w451-h251/Screenshot%202023-04-12%20125851.png"
              alt="netflixclone"
            ></img>
            <h3>
              Netflix <span style={{ color: " rgb(5, 195, 209)" }}> Clone</span>
            </h3>{" "}
            <p>
              Netflix Clone : React Js,react-router,Material UI,Bootstrap,TMDB
              Movies and TvShows API...!
            </p>
            <Button
              className="live-btn"
              href="https://anetflix-clone-by-abhay.vercel.app/"
            >
              Live
              <CallMissedOutgoingIcon />
            </Button>
            <Button
              className="live-btn"
              href="https://github.com/abhaykmwt/Netflix-clone"
            >
              Code
              <GitHubIcon />
            </Button>
          </div>
          <div className="Projects">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgF71niHSseniw4B3ghpsqpalkXazD7HzDST16WhpGyy3s6YkmpJliU5gRkYeiTeF5mjJ_BianLLjXuFA6JWfTCrv2HFct7VyEEh3kUvWSclsKMCmxlC4KngqKiNuf4tvBNNfOkiP7upMYM8T59q8J2ob9y0FXeFaXhMRcCsw1uZqeAM4l6yrzzRiwmhA/s1893/Screenshot%202023-04-12%20132234.png
                  "
            ></img>
            <h3>
              PortFolio{" "}
              <span style={{ color: " rgb(5, 195, 209)" }}> WebSite</span>
            </h3>{" "}
            <p>
              PortFolio WebSite : This is my Portfolio Website. I used React js
              ,firebase to build this project...!
            </p>
            <Button className="live-btn" href="/Home">
              Live
              <CallMissedOutgoingIcon />
            </Button>
            <Button className="live-btn" href="">
              Code
              <GitHubIcon />
            </Button>
          </div>
          <div className="Projects">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnKmlMjPfcbHs8Jo90jnGdMiy_KPcfQw3AQz69038VrHHehVvaJhU4GLotjXV8Yg9bpUTYiTwvMBUiYZae3Mt_yRsJhTz2G7vVNPQGXTWZ_XLAgZcbuIoirGGWRsu5BxYQ6FndVvI8ie_5rOCZmyVfGwxaRNA49JlsEhP70456qSRNwmlcDHCpGCuKGQ/s1916/Screenshot%202023-04-13%20112158.png
                  "
            ></img>
            <h3>
              Mentor{" "}
              <span style={{ color: " rgb(5, 195, 209)" }}> Booking</span>
            </h3>{" "}
            <p>
              Mentore Booking : This is a Mentor Booking website i used React js
              ,firebase,EmailJS,Material UI!
            </p>
            <Button
              className="live-btn"
              href="https://mentor-booking-abhay.vercel.app/"
            >
              Live
              <CallMissedOutgoingIcon />
            </Button>
            <Button
              className="live-btn"
              href="https://github.com/abhaykmwt/Mentor-Booking"
            >
              Code
              <GitHubIcon />
            </Button>
          </div>
          <div className="Projects">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1vQ2HlaLbWg9RYUjwMyQPXMpGbyZn9IUiGcLtHSNVzVlpXG0V_Md6__WtjgKCy2BOiMy4HsGFQkwdV8DaQjYrEpBJPHfyW4Qu4sTOL2ENMbKVqpOvB57ROQPsr_ntmoVvuQnsluC4cnKZLbgwIaOPEQwRM3T1HvJb16Rt_Z_0imjcSftlNtAO7Y1M9w/s1916/Screenshot%202023-04-13%20112546.png
                  "
            ></img>
            <h3>
              Weather <span style={{ color: " rgb(5, 195, 209)" }}> APP</span>
            </h3>{" "}
            <p>
              Weather App : React Js,Material UI,Bootstrap,openweathermap
              API...!
            </p>
            <Button
              className="live-btn"
              href="https://weather-app-by-abhay.vercel.app/"
            >
              Live
              <CallMissedOutgoingIcon />
            </Button>
            <Button
              className="live-btn"
              href="https://github.com/abhaykmwt/Weather-app"
            >
              Code
              <GitHubIcon />
            </Button>
          </div>
          <div className="Projects">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEQogwn8Di-a2z4ueJQde0zU7cAjogwr5ZdtV6MjRQwgSX6j-t_seOTxRffb3d7klpkPlvxQG8QtZ0tqxTXUIHZ6nv7JGvmuTav3vKQ37ToWLiz1zvzw08FcMXUK4ng-szSnjA1rdFLmEZjbvWgRLm1DV9FxjqpP1Vwb7jVFelTc2Vj8vfvgPeuW2Q4w/s1896/Screenshot%202023-04-13%20112703.png
                  "
            ></img>
            <h3>
              Blogging{" "}
              <span style={{ color: " rgb(5, 195, 209)" }}> Website</span>
            </h3>{" "}
            <p>
              Blogging Website : React Js,Material UI,Bootstrap,firebase...!
            </p>
            <Button
              className="live-btn"
              href="https://blogging-app-abhay.vercel.app/"
            >
              Live
              <CallMissedOutgoingIcon />
            </Button>
            <Button
              className="live-btn"
              href="https://github.com/abhaykmwt/Blogging-WebApp"
            >
              Code
              <GitHubIcon />
            </Button>
          </div>
          <div className="Projects">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE6XOwuHjuE0sZgB9bLgdY_vU7wJ1XnWZej77olfaPYI__jnPhLjSsraB3hML6y0eU2FEEeMaZZvsyjxif01gB_LWYK_C-IyAG1GOy9v6bYAW2Wb5kC4eU2_jwuLUTrIwYolsuGEJeJ2uJl9KeKOqr80Xwgm60n_lFBPyGGRAimk-SQXJMOniqPhYqug/s1881/Screenshot%202023-04-13%20112911.png
                  "
            ></img>
            <h3>
              ToDo <span style={{ color: " rgb(5, 195, 209)" }}> WEbApp</span>
            </h3>{" "}
            <p>ToDo Wensite : React Js,Material UI,Bootstrap!</p>
            <Button
              className="live-btn"
              href="https://todo-react-abhay.vercel.app/"
            >
              Live
              <CallMissedOutgoingIcon />
            </Button>
            <Button
              className="live-btn"
              href="https://github.com/abhaykmwt/TODO-react-app"
            >
              Code
              <GitHubIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

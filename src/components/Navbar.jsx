import React from "react";

import "..//components/Navbar.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <>
      <div className="navigation">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <a
              className="navbar-brand text-light fs-3 fw-bolder portfolioname"
              href="/"
            >
              <h1>
                {" "}
                My <span style={{ color: "rgb(2, 251, 168)" }}>Portfolio</span>
              </h1>
            </a>
            <button
              className="navbar-toggler text-light
               "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                background: "transparent",
                border: "1px solid",
              }}
            >
              <span>
                <MenuIcon />
              </span>
            </button>
            <div
              className="collapse navbar-collapse mr-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-middle">
                <li className="nav-item ">
                  <a
                    className="nav-link active text-light "
                    aria-current="page"
                    href="http://api.whatsapp.com/send?phone=7489433640"
                    target="black"
                  >
                    Chat
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    href="mailto:abhaykumawat81@gmail.com"
                  >
                    Email
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    href="Resumepdf\Abhay's Resume.pdf"
                    target="black"
                  >
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-light" href="Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

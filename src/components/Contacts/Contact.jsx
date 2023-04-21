import React from "react";
import { useState } from "react";
import "..//Contacts/Contact.scss";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const res = await fetch(
      "https://my-portfolio-2c2ec-default-rtdb.firebaseio.com/My-portfolio.json",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
        }),
      }
    );
    swal({
      title: " success",
      text: `Hello ${formData.name} your message was sent Successfully`,
      icon: "success",
      button: "success",
    });
    setFormData({
      name: "",
      email: "",

      message: "",
    });
    emailjs
    .sendForm(
      "service_lqcnuh9",
      "template_mutyjal",
      event.target,
      "VPphtxslHwCF0OB4T"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    // You can perform any action with the form data here, like send it to a server.
  };
  return (
    <>
      <div className="Contact-page">
        <h1 style={{ textAlign: "center", fontSize: "40px" }}>
          Contact <span style={{ color: "rgb(2, 251, 168)" }}>Me</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="contact-container">
            <div>
              {" "}
              <img src="https://jigarsable.vercel.app/contact.png"></img>
            </div>
            <div className="contact-form">
              <h3>
                Get in <span style={{ color: "rgb(2, 251, 168)" }}>touch</span>
              </h3>
              <p>
                My inbox is always open. Whether you have a question or just
                want to say hello, I will try my best to get back to you!
              </p>
              <input
                type="text"
                placeholder="Name*"
                value={formData.name}
                name="name"
                onChange={handleChange}
              ></input>
              <br />
              <br />
              <input
                type="email"
                placeholder="Email*"
                value={formData.email}
                name="email"
                onChange={handleChange}
              ></input>
              <br />
              <br />
              <div className="textareas">
                {" "}
                <textarea
                  placeholder="Message..."
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </div>
              <br />
              <div>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;

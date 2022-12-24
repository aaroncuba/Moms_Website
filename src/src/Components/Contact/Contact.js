import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div>
        <h2> Contact </h2>
        <span className="line"></span>
      </div>
      <div class="contact">
        <div className="contact-image">
          <div class="contact-form">
            <form
              class="contact-form-box"
              name="contact-form-box"  
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact"/>
              <label for="name"></label>
              <input
                className="input-text-fields"
                type="text"
                id="name"
                placeholder="Your Name"
                name="name"
                required
              />
              <small class="error"></small>
              <label for="email"></label>
              <input
                className="input-text-fields"
                type="email"
                id="email"
                placeholder="Your email"
                name="email"
                required
              />
              <small class="error"></small>

              <label for="subject"></label>
              <textarea
                className="input-text-fields"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              ></textarea>
              <small class="error"></small>
              <label for="message"></label>
              <textarea
                className="input-text-fields"
                id="message"
                name="message"
                placeholder="Your message"
                rows="10"
                required
              ></textarea>
              <small class="error"></small>
              <div data-netlify-recaptcha="true"></div>
              <div class="center">
                <input
                  className="submit"
                  id="btn"
                  type="submit"
                  value={"Send"}
                  class="btn btn-info btn-block"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

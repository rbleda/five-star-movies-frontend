import React from "react";
import "./ContactPage.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="contact-content">
          <h1>Contact Us!</h1>
          <div className="icon-list">
            <a href="mailto:email@example.com">
              <img src="../images/email-icon.jpeg" alt="Email Icon" />
            </a>
            <a href="#" target="_blank">
              <img src="../images/twitter-icon.png" alt="Twitter Icon" />
            </a>
            <a href="#" target="_blank">
              <img src="../images/linkedin-icon.png" alt="Linkedin Icon" />
            </a>
            <a href="#" target="_blank">
              <img src="../images/instagram-icon.webp" alt="Instagram Icon" />
            </a>
            <h3>Thank you for visiting! Hope you enjoyed!</h3>
            <p>
              We hope to see you again in the future. Feel free to leave as many
              reviews as you want. We love any kind of reviews here, and we want
              to know your opinion not only for the general public, that seeks
              information out of this website, but also for our own improvement
              as critics. After all, we are influenced the most by other's love
              and passion for these films.
            </p>
            <div className="leave-review-button">
              <Link to="/reviews">Leave a Movie Review</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

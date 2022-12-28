import React from "react";
import "./Contact.css";
import "../style.css";

export default class Contact extends React.Component {
  render() {
    return (
      <footer id="contact">
        <div className="content-wrap">
          <h2>Contact us! Send us your reviews!</h2>
          <ul className="content-list">
            <li>
              <a href="mailto:email@example.com">fivestar.reviews@gmail.com</a>
            </li>
            <li>
              <a href="http://yourwebsite.com" target="_blank">
                fivestarreviews.com
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

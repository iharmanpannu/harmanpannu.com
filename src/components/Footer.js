import React from "react";
import Resume from "../asset/harman-resume.pdf";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";
const Footer = () => (
  <div>
    <footer className="footer">
      <ul>
        <li>
          <a href="https://github.com/iharmanpannu">
            <FontAwesomeIcon icon={["fab", "github"]} className="tooltip" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/iharmanpannu">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/iharmanpannu/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/iharmanpannu/#">
            <FontAwesomeIcon icon={["fab", "codepen"]} />
          </a>
        </li>
        <li>
          <a href="mailto:iharmanpannu@gmail.com?Subject=Hire Me :)">
            <FontAwesomeIcon icon={["fab", "google"]} />
          </a>
        </li>
        <li>
          <a href="tel://1-206-566-8477">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} />
          </a>
        </li>
        <li>
          <a href={Resume} target="_blank">
            <FontAwesomeIcon icon={Icons.faFilePdf} />
          </a>
        </li>
      </ul>
      <h6>
        <FontAwesomeIcon icon={Icons.faCopyright} /> {new Date().getFullYear()} Handmade By Me
      </h6>
    </footer>
  </div>
);

export default Footer;

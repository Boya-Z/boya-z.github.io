import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../style.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>Copyright © {year} Boya Zeng</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/Boya-Z"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/boyazeng/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;

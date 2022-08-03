import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="container footer__container" id="footer">
      <h2>Zemira_k</h2>
      <a href="fdg">
        <MdAlternateEmail className="footer__icon" />
      </a>
      <a href="fdg">
        <FiGithub className="footer__icon" />
      </a>
      <a href="fdg">
        <FiLinkedin className="footer__icon" />
      </a>
      <a href="fdg">
        <FaWhatsapp className="footer__icon" />
      </a>
      {/* <p>054-760-5849 | kehati10@gmail.com | LinkedIn-link | Git-Link</p> */}
      <div className="footer__copyrights">
        All Rights Reserved © 2022 Zemira_k
      </div>
    </section>
  );
};

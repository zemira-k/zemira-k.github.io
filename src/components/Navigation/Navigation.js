import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const Navigation = () => {
  return (
    <nav>
      <a href="fdg">
        <MdAlternateEmail className="nav__icon" />
      </a>
      <a href="fdg">
        <FiGithub className="nav__icon" />
      </a>
      <a href="fdg">
        <FiLinkedin className="nav__icon" />
      </a>
      <a href="fdg">
        <FaWhatsapp className="nav__icon" />
      </a>
    </nav>
  );
};

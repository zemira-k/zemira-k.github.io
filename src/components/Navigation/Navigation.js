import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

import { FaWhatsapp } from "react-icons/fa";

export const Navigation = () => {
  const emailLink = "mailto:kehati10@gmail.com";
  const gitLink = "https://github.com/zemira-k";
  const linkedinLink = "https://www.linkedin.com/in/zemira-kehati";
  const whatsappLink = "https://wa.me/+972547605849";
  return (
    <nav>
      <a href={emailLink} target="_blank" rel="noreferrer">
        <MdAlternateEmail className="nav__big-icon" />
      </a>
      <a href={gitLink} target="_blank" rel="noreferrer">
        <FiGithub className="nav__big-icon" />
      </a>
      <a href={linkedinLink} target="_blank" rel="noreferrer">
        <FiLinkedin className="nav__big-icon" />
      </a>
      <a href={whatsappLink} target="_blank" rel="noreferrer">
        <FaWhatsapp className="nav__big-icon" />
      </a>
    </nav>
  );
};

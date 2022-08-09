import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const Navigation = () => {
  const gitLink = "https://github.com/zemira-k";
  const linkedinLink = "https://www.linkedin.com/in/zemira-kehati";
  const whatsappLink = "https://wa.me/+972547605849";
  return (
    <nav>
      <a href="mailto:kehati10@gmail.com" target="_blank" rel="noreferrer">
        <MdAlternateEmail className="nav__icon" />
      </a>
      <a href={gitLink} target="_blank" rel="noreferrer">
        <FiGithub className="nav__icon" />
      </a>
      <a href={linkedinLink} target="_blank" rel="noreferrer">
        <FiLinkedin className="nav__icon" />
      </a>
      <a href={whatsappLink} target="_blank" rel="noreferrer">
        <FaWhatsapp className="nav__icon" />
      </a>
    </nav>
  );
};

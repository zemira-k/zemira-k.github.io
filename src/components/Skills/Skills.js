// import pic1 from "../../images/61-2.jpg";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export const Skills = () => {
  return (
    <section className="container skills__container" id="skills">
      <div className="skills__text">
        <h2>skills</h2>
        <ul className="skills__list">
          <li className="skill">
            <FaHtml5 className="skills__icon" />
            <p>html</p>
          </li>
          <li className="skill">
            <FaCss3 className="skills__icon" />
            <p>css</p>
          </li>
          <li className="skill">
            <FaJs className="skills__icon" />
            <p>javascript</p>
          </li>
          <li className="skill">
            <FaReact className="skills__icon" />
            <p>react</p>
          </li>
          <li className="skill">
            <FaNodeJs className="skills__icon" />
            <p>nodejs</p>
          </li>
          <li className="skill">
            <FaGithub className="skills__icon" />
            <p>git</p>
          </li>
          <li className="skill">
            <FaNpm className="skills__icon" />
            <p>npm</p>
          </li>
          <li className="skill">
            <SiMongodb className="skills__icon" />
            <p>mongodb</p>
          </li>
        </ul>
      </div>
      {/* <img src={pic1} alt="" className="skills__image"></img> */}
    </section>
  );
};

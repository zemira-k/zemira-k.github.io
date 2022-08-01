import pic1 from "../../images/61-2.jpg";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaNpm,
} from "react-icons/fa";

export const Skills = () => {
  return (
    <section className="skills__container" id="skills">
      <div className="skills__text">
        <h1>skills</h1>
        <ul className="skills__list">
          <li>
            <h2>
              <FaHtml5 className="skills__icon" />
              html
            </h2>
          </li>
          <li>
            <h2>
              <FaCss3 className="skills__icon" />
              css
            </h2>
          </li>
          <li>
            <FaJs className="skills__icon" />
            <p>javascript</p>
          </li>
          <li>
            <FaReact className="skills__icon" />
            <p>react</p>
          </li>
          <li>
            <FaNodeJs className="skills__icon" />
            <p>nodejs</p>
          </li>
          <li>
            <FaGithub className="skills__icon" />
            <p>git</p>
          </li>
          <li>
            <FaNpm className="skills__icon" />
            <p>npm</p>
          </li>
        </ul>
      </div>
      <img src={pic1} alt="" className="skills__image"></img>
    </section>
  );
};

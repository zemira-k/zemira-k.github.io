import { useState } from "react";

const navList = [
  {
    _id: 1,
    link: "#home",
    text: "Home",
  },
  {
    _id: 2,
    link: "#about",
    text: "About",
  },
  {
    _id: 3,
    link: "#skills",
    text: "Skills",
  },
  {
    _id: 4,
    link: "#projects",
    text: "Projects",
  },
  {
    _id: 5,
    link: "#contact",
    text: "Contact",
  },
];

export const HeaderNav = () => {
  const [toogle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle(!toogle);
  };
  return (
    <>
      <nav className="nav">
        <button className="nav__mobile-button" onClick={toggleNav}>
          <span className="nav__icon"></span>
        </button>
        <ul className={toogle ? "nav__container nav_opened" : "nav__container"}>
          {navList.map((item) => (
            <li key={item._id} className="nav__item">
              <a
                className="nav__link nav__link_type_subscribe"
                href={item.link}
                onClick={toggleNav}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

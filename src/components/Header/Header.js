import React from "react";
// import pic from "../../images/61-2.jpg";

export const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav__container">
        <li className="list__item">
          <a className="nav__item" href="#home">
            Home
          </a>
        </li>
        <li className="list__item">
          <a className="nav__item" href="#about">
            About
          </a>
        </li>
        <li className="list__item">
          <a className="nav__item" href="#skills">
            Skills
          </a>
        </li>
        <li className="list__item">
          <a className="nav__item" href="#projects">
            Projects
          </a>
        </li>
        <li className="list__item">
          <a className="nav__item" href="#contact">
            Contact
          </a>
        </li>
      </nav>
    </header>
  );
};

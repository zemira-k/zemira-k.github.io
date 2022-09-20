import React, { useState } from "react";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import newsImage from "../../images/333.jpg";
import aroundImage from "../../images/111.jpg";
import portland from "../../images/222.jpg";

import { Project } from "../Project/Project.js";

export const Projects = () => {
  const [count, setCount] = useState(1);

  const projects = [
    {
      id: 1,
      imgSrc: newsImage,
      title: "news explorer",
      description:
        "news search engine. find news. login. save articles or delete them.",
      skills: "css, html, react, nodejs, express, restfullApi",
      gitLink: "https://github.com/zemira-k/news-explorer-api",
      siteLink: "https://mynews.students.nomoreparties.sbs/",
    },
    {
      id: 2,
      imgSrc: aroundImage,
      title: "around the us",
      description:
        "A site about u.s. add images, delete your images, like or dislike yours or others images. edit profile name and avatar",
      skills: "css, html, react, nodejs, express, restfullApi",
      gitLink: "https://github.com/zemira-k/web_project_4",
      siteLink: "https://zemira-k.github.io/web_project_4/",
    },
    {
      id: 3,
      imgSrc: portland,
      title: "From Portland to Portland",
      description: "Epic Bicycle Journey from Portland, ME. To Portland, OR.",
      skills: "html, css",
      gitLink: "https://github.com/zemira-k/web_project_3",
      siteLink: "https://zemira-k.github.io/web_project_3/",
    },
  ];

  function handleRightClick() {
    if (count < projects.length) setCount(count + 1);
  }

  function handleLeftClick() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <section className="container" id="projects">
      <h2 className="projects__title">projects</h2>
      <div className="projects__container">
        {count > 1 && (
          <button
            onClick={handleLeftClick}
            className="left__button"
            type="submit"
          >
            <IoMdArrowDropleftCircle className="button__icon" />
          </button>
        )}
        {projects.map(
          (el) => el.id === count && <Project key={el.id} el={el} />,
        )}
        {count < projects.length && (
          <button
            onClick={handleRightClick}
            className="right__button"
            type="submit"
          >
            <IoMdArrowDroprightCircle className="button__icon" />
          </button>
        )}
      </div>
    </section>
  );
};

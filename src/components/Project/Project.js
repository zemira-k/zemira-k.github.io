export const Project = (props) => {
  const { imgSrc, title, description, skills, gitLink, siteLink } = props.el;
  return (
    <div className="project__container">
      <img className="image project__image" alt="" src={imgSrc} />
      <div className="project__info">
        <h2 className="projects__title">projects</h2>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="project__skills">{skills}</p>
        <div className="project__links">
          <a className="link" href={gitLink} target="_blank" rel="noreferrer">
            git link
          </a>
          <a className="link" href={siteLink} target="_blank" rel="noreferrer">
            project link
          </a>
        </div>
      </div>
    </div>
  );
};

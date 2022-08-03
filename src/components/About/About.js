import pic1 from "../../images/61-2.jpg";

export const About = () => {
  return (
    <section className="container about__container" id="about">
      <img src={pic1} alt="" className="about__image"></img>
      <div className="about__text">
        <h2>about me</h2>
        <p>
          Fast learner and a team player who is highly motivated to learn and
          grow as a web developer. Recently I strengthened my technical skills
          by participating in an exclusive program by Practicum100, and I am
          currently looking for my next challenge
        </p>
      </div>
    </section>
  );
};

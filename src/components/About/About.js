import pic1 from "../../images/z (3).jpg";

export const About = () => {
  return (
    <section className="container about__container" id="about">
      <img src={pic1} alt="" className="image"></img>
      <div className="about__text">
        <h2 className="about__title">about me</h2>
        <p className="about__subtitle">Hi,</p>
        <p className="about__subtitle">
          I am Zemira Kehati, and I am a developer.
        </p>
        <p className="about__subtitle">
          From a young age, I have always loved math and computers. I studied
          computer science previously, and the basis that I gained has helped me
          tremendously in learning to code.
        </p>
        <p className="about__subtitle">
          I am excited to put all of this knowledge and experience into
          practice.
        </p>
        <p className="about__subtitle">
          I recently took Yandex's Practicum100 course in web development,
          enjoying every moment. I created several projects during the course.
          and a final project that I completed successfully.
        </p>
        <p className="about__subtitle">
          In addition, I am currently gaining experience working on a new
          open-source project, building a website under the guidance of Shimon
          Moyal from "Cula-Like".
        </p>
        <p className="about__subtitle">
          I am a team player and love to learn new technologies, enjoy dealing
          with challenging problems, and finding solutions. Full of motivation
          to succeed and move forward!!
        </p>
      </div>
    </section>
  );
};

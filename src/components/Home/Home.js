import { Navigation } from "../Navigation/Navigation";
import { HeaderNav } from "../HeaderNav/HeaderNav";

export const Home = () => {
  return (
    <section className="container home__container" id="home">
      <HeaderNav />
      <div className="home__text">
        <h1 className="home__title">zemira kehati</h1>
        <p className="home__subtitle">web developer</p>
        <Navigation />
      </div>
    </section>
  );
};

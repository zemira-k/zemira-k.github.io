import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";

export const App = () => {
  return (
    <div className="page__container">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

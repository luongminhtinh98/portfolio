import { useEffect } from "react";
import imgHome from "../assets/img/IMG_20240201_133429.png";
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoInstagram,
  BiMouse,
} from "react-icons/bi";
import Typewriter from "typewriter-effect/dist/core";

// Text animations
const Home = () => {
  useEffect(() => {
    const app = document.getElementById("animation-text");
    if (app) {
      const typewriter = new Typewriter(app, {
        loop: true,
        delay: 60,
      });

      typewriter
        .typeString("Guitarist")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Front-end Developer")
        .pauseFor(2000)
        .deleteAll()
        .start();
    }
  }, []);

  return (
    <div>
      <section className="home section" id="home">
        <div className="container grid home__container">
          <div className="home__data">
            <span className="home__greeting">Hello, my name</span>
            <h1 className="home__name">Minh Tình</h1>
            <h3 className="home__education text-animation">I am</h3>
            <span id="animation-text" />
            <div className="home__buttons">
              <a className="button button--ghost">Download CV</a>
              <a href="#about" className="button">
                About me
              </a>
            </div>
          </div>
          <div className="home__handle">
            <img src={imgHome} alt className="home__img" />
          </div>
          <div className="home__social">
            <a
              target="_blank"
              href="https://www.facebook.com/luongminhtinh08071998/"
              className="home__social-link"
            >
              <BiLogoFacebookCircle />
            </a>
            <a
              target="_blank"
              href="https://github.com/luongminhtinh08071998"
              className="home__social-link"
            >
              <BiLogoGithub />
            </a>
            <a target="_blank" href="#" className="home__social-link">
              <BiLogoInstagram />
            </a>
          </div>
          <a href="#about" className="home__scroll">
            <BiMouse className="home__scroll-icon" />
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

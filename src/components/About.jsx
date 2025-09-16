// import {useState} from 'react';
import aboutImg from '../assets/img/z5198881668862_09c47c12b7d6f7bdbe547970c95a92a4.jpg';
import { BiParty, BiMusic, BiRightTopArrowCircle } from "react-icons/bi";

const About = () => {
  return (
      <section className="about section" id="about" data-aos="fade-up" data-aos-duration={2000} style={{paddingTop: '60'}}>
        <div className data-aos="fade-up" data-aos-duration={2000}>
          <span className="section__subtitle">My intro</span>
          <h2 className="section__title">About me</h2>
        </div>
        <div className="container grid about__container">
          <img src={aboutImg} alt className="about__img" data-aos="fade-right" data-aos-duration={2000} />   
          <div className="about__data" data-aos="fade-left" data-aos-duration={2000}>
            <div className="about__info">
              <div className="about__box">
                <BiParty />
                <h3 className="about__title">Year of Birth</h3>
                <span className="about__subtitle">Born in 1998</span>
              </div>
              <div className="about__box">
                <BiMusic />
                <h3 className="about__title">Music Type</h3>
                <span className="about__subtitle">Ballad, Pop, Rock, USUK, RnB,...</span>
              </div>
              <div className="about__box">
                <BiRightTopArrowCircle />
                <h3 className="about__title">Distinctive</h3>
                <span className="about__subtitle">Always in time :)))</span>
              </div>
            </div>
            <p className="about__description">I am a passionate and dedicated musician, pouring my heart and soul into the art of music, delivering profound and refined melodies to connect with listeners on all aspects of life.
            </p>
            <a href="#about" className="button">About me</a>
          </div>
        </div>
      </section>
  );
};

export default About;
// import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import FormSendMessage from './FormSendMessage';

const Contact = () => {
 return (
  <div>
   <section className="contact section" id="contact" data-aos="fade-up" data-aos-duration={700}>
  <span className="section__subtitle">Get in touch</span>
  <h2 className="section__title">Connect me</h2>
  <div className="contact__container container grid">
    <div className="contact__content">
      <h3 className="contact__title">Talk to me</h3>
      <div className="contact__info">
        <div className="contact__card" data-aos="fade-right" data-aos-delay={300} data-aos-duration={700}>
          <i className="bx bx-mail-send contact__card-icon" />
          <h3 className="contact__card-title">Email</h3>
          <span className="contact__card-data">luongminhtinh08077@gmail.com</span>
          <a href="mailto:luongminhtinh0807@gmail.com" target="_blank" className="contact__button">
            Write me <BiRightArrowAlt className="contact__button-icon"/>
          </a>
        </div>
        <div className="contact__card" data-aos="fade-right" data-aos-delay={400} data-aos-duration={700}>
          <i className="bx bx-phone-call contact__card-icon" />
          <h3 className="contact__card-title">My phone</h3>
          <span className="contact__card-data">0326.066.660</span>
          <a href="tel:0326066660" target="_blank" className="contact__button">
            Call me <BiRightArrowAlt className="contact__button-icon"/>
          </a>
        </div>
        <div className="contact__card" data-aos="fade-right" data-aos-delay={500} data-aos-duration={700}>
          <i className="bx bxl-messenger contact__card-icon" />
          <h3 className="contact__card-title">Messenger</h3>
          <span className="contact__card-data" />
          <a href="https://m.me/luongminhtinh08071998" target="_blank" className="contact__button">
            Inbox me <BiRightArrowAlt className="contact__button-icon"/>
          </a>
        </div>
      </div>
    </div>
    
    <FormSendMessage />
  </div></section>

  </div>
 );
};

export default Contact;
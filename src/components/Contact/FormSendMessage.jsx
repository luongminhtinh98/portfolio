import { useState } from 'react';
import { notification } from 'antd';
import emailjs from '@emailjs/browser';

const FormSendMessage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  function sendMessage() {
    // Validate các trường nhập
    if (name.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    emailjs.init("AJzH-JqFkvCxv7Ap7");
    var serviceID = "service_brq618f";
    var templateID = "template_1wwoteg";

    var params = {
      sendername: name,
      senderemail: email,
      senderphone: phoneNumber,
      sendermessage: message
    };

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        console.log(res);
        openNotification('topRight');
        // Đặt lại giá trị của các trường nhập sau khi gửi thành công
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      })
      .catch(err => {
        console.error('Error sending email:', err);
        alert('Sorry, there was an error. Please try again later.');
      });
  }

  const openNotification = (placement) => {
    notification.info({
      message: 'Mail sent successfully. Thank you!',
      placement,
    });
  };

  return (
    <div className="contact__content">
      <h3 className="contact__title">Write me your feedbacks</h3>
      <div action className="contact__form">
        <div className="contact__form-div" data-aos="fade-left" data-aos-delay={400} data-aos-duration={700}>
          <label className="contact__form-tag">Name</label>
          <input type="text" placeholder="Insert your name" className="contact__form-input" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="contact__form-div" data-aos="fade-left" data-aos-delay={500} data-aos-duration={700}>
          <label className="contact__form-tag">Email</label>
          <input type="email" placeholder="Insert your email" className="contact__form-input" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="contact__form-div" data-aos="fade-left" data-aos-delay={600} data-aos-duration={700}>
          <label className="contact__form-tag">Phone number</label>
          <input placeholder="Insert your phone number" className="contact__form-input" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="contact__form-div contact__form-area" data-aos="fade-left" data-aos-delay={700} data-aos-duration={700}>
          <label className="contact__form-tag">Feedbacks</label>
          <textarea id="message" cols={30} rows={10} placeholder="Insert your feedback" className="contact__form-input" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button className="button" data-aos="fade-left" data-aos-delay={800} data-aos-duration={700} onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default FormSendMessage;

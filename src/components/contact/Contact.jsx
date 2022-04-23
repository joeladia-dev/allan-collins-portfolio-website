import './contact.css';
// import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_qywlduv',
        'template_6xnlqkc',
        formRef.current,
        'sDTUiRux34bSj2lT3'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's discuss your project</h1>
          <div className='c-info'>
            {/* <div className='c-info-item'>
              <img src={Phone} alt='' className='c-icon' />
              +1 1234 556 75
            </div> */}
            <div className='c-info-item'>
              <img className='c-icon' src={Email} alt='' />
              contact@allansawit.net
            </div>
            <div className='c-info-item'>
              <img className='c-icon' src={Address} alt='' />
              Manila, Philippines
            </div>
          </div>
        </div>
        <div className='c-right'>
          <h3 className='c-desc'>
            <b>Get In Touch</b>
          </h3>
          <p>Please feel free to message for inquiries 😉</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Name'
              name='user_name'
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Email'
              name='user_email'
            />
            <textarea
              style={{ backgroundColor: darkMode && '#333' }}
              rows='5'
              placeholder='Message'
              name='message'
            />
            <button>Submit</button>
            {done && 'Thank you... I will get back to you soon 😃'}
          </form>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer-items'>
          <p className='footer-title'>
            💻 Coded By: Joel Adia - Built Using ReactJS 😎 - All Rights Reserve{' '}
            <span className='copyright'>&copy;</span> 2022
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

import './intro.css';
import Me from '../../img/me.png';

const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, 👋 My name is</h2>
          <h1 className='i-name'>Allan Collins Sawit</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Infrastructure Engineer</div>
              <div className='i-title-item'>Server Administrator</div>
              <div className='i-title-item'>Network Specialist</div>
              <div className='i-title-item'>Dev-Ops Engineer</div>
              <div className='i-title-item'>Database Administrator</div>
            </div>
          </div>
          <p className='i-desc'>
            Venmo offal yuccie street art four loko 3 wolf moon. Selfies
            dreamcatcher tbh, ennui aesthetic jean shorts sustainable 3 wolf
            moon cray williamsburg.
          </p>
        </div>
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={Me} alt='' className='i-img' />
      </div>
    </div>
  );
};

export default Intro;

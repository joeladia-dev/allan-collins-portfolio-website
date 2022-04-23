import './about.css';
import Award from '../../img/award.png';
import AboutImage from '../../img/cyber.jpg';

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={AboutImage} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h2 className='a-title'>About Me </h2>
        <p className='a-sub'>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className='a-desc'>
          Venmo offal yuccie street art four loko 3 wolf moon. Selfies
          dreamcatcher tbh, ennui aesthetic jean shorts sustainable 3 wolf moon
          cray williamsburg. Chartreuse venmo copper mug trust fund next level
          austin health goth keffiyeh food truck lyft pop-up. Green juice
          church-key +1 knausgaard kitsch marfa, banh mi fixie locavore pabst
          microdosing direct trade selvage. Roof party adaptogen pop-up cronut,
          cold-pressed dreamcatcher wayfarers schlitz mixtape brooklyn unicorn
          literally pok pok twee ramps. Salvia chambray 3 wolf moon normcore
          cray, raw denim scenester shabby chic. Taxidermy ennui offal,
          humblebrag health goth vinyl art party leggings ramps ugh la croix
          brunch bicycle rights. Microdosing twee roof party master cleanse
          shoreditch 90's kinfolk snackwave street art occupy succulents.
          Knausgaard edison bulb disrupt glossier.
        </p>
        <div className='a-award'>
          <img src={Award} alt='' className='a-award-img' />
          <div className='a-award-texts'>
            <h4 className='a-award-title'>
              Top Infrastructure Engineer Award for 2021
            </h4>
            <p className='a-award-desc'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

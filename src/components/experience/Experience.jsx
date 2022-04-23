import './experience.css';
import server from '../../img/server.svg';
import infra from '../../img/infra.svg';
import security from '../../img/security.svg';

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h2 className='pl-title'>Services</h2>
        <div className='underline'></div>
        <p className='pl-desc'>
          Salvia sustainable franzen kombucha gentrify, squid jean shorts
          succulents letterpress yr gastropub poutine street art austin selfies.
          La croix portland snackwave austin sriracha vexillologist lo-fi
          heirloom tbh narwhal single-origin coffee.
        </p>
        <div className='pl-img-div'>
          <div>
            <h3 className='pl-header'>Security</h3>
            <img src={security} alt='security' className='pl-img' />
            <p>
              Dolore flannel vexillologist hashtag blue bottle ut, organic
              thundercats. Messenger bag unicorn ut whatever esse aute.
            </p>
          </div>
          <div>
            <h3 className='pl-header'>Server Maintenance</h3>
            <img src={server} alt='server-maintenance' className='pl-img' />
            <p>
              Subway tile you probably haven't heard of them neutra nisi 3 wolf
              moon do normcore taiyaki tilde stumptown locavore.
            </p>
          </div>
          <div>
            <h3 className='pl-header'>Infrastructure</h3>
            <img src={infra} alt='infrastructure' className='pl-img' />
            <p>
              Biodiesel actually reprehenderit, blue bottle cloud bread photo
              booth consequat anim normcore vaporware.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

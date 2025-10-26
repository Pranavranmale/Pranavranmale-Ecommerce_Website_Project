import './Footer.css';
import InstagramIcon from '../../assets/instagram.png';
import FacebookIcon from '../../assets/facebook.png';
import WhatsappIcon from '../../assets/whatsapp.png';
import logo from '../../assets/logo.webp';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-logo">
        <img src={logo} className='h-12' alt="Logo" />
        <p>Shopify</p>
      </div>
      <ul className='FooterLinks'>
            <li>About</li>
            <li>Product</li>
            <li>Offices</li>
            <li>Company</li>
            <li>Contact</li>
      </ul>
      <div className='Footer-Sosial-Icon'>
        <div className='Footer-icon-contener'>
            <img src={InstagramIcon} alt="" className='h-12' />
        </div>
         <div className='Footer-icon-contener' >
            <img src={FacebookIcon} className='h-12' alt="" />
        </div>
         <div className='Footer-icon-contener'>
            <img src={WhatsappIcon} className='h-12' alt="" />
        </div>
      </div>
      <div className='Footer-Copyright'>
        <p>© 2023 Shopify. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
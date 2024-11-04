import { Link } from 'react-router-dom'; 
import { footerData } from '../../utils/data';
const Footer = () => {
  return (
    <div className="footer__section">
      <div className="container">
        <div className="footer__area">
          <div className="row" style={{marginBottom:"80px"}}>

            <div className="col-md-6 pb-4 col-lg-4">
              <div className="footer_logo">
                <Link to="/"><img className="img-fluid" src="https://i.postimg.cc/y8DNYSsf/footer-logo.png" alt="img" /></Link>
                <p className="footer-logo-text">
                  Amet minim mollit non deserunt ullamco est sit
                  <br className="d-none d-lg-block" />
                  aliqua dolor do amet sint. Velit officia consequat
                  <br className="d-none d-lg-block" />
                  duis enim velit mollit. Exercitation veniam consequat
                  <br className="d-none d-lg-block" />
                  sunt nostrud amet.
                </p>
              </div>
            </div>

            <div className="col-md-6 pb-4 col-lg-2">
              <div className="footer-menu">
                <p className="company-title">{footerData.company.title}</p>
                {footerData.company.links.map((link, index) => (
                  <Link key={index} to={link.url}>{link.label}</Link>
                ))}
              </div>
            </div>
            <div className="col-md-6 pb-4 col-lg-2">
              <div className="footer-menu">
                <p className="company-title">{footerData.services.title}</p>
                {footerData.services.links.map((link, index) => (
                  <Link key={index} to={link.url}>{link.label}</Link>
                ))}
              </div>
            </div>

            <div className="col-md-6 pb-4 col-lg-3">
              <div className="footer-menu-2">
                <p className="company-title">{footerData.newsletter.title}</p>
                <form>
                  <input required type="email" className="form-control" placeholder={footerData.newsletter.placeholder} />
                  <button className="btn btn-success subscribe" type="submit">Subscribe</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Privacy Section */}
      <div className="privacy__section">
        <div className="container">
          <div className="privacy__area">
            <div className="privacy-title">
              <p>All Copyrights are reserved by Mamdou Ghaneemy</p>
            </div>
            <div className="social-media">
              <Link href="#"><i className="fa-brands fa-facebook" style={{ color: '#ffffff' }}></i></Link>
              <Link href="#"><i className="fa-brands fa-linkedin" style={{ color: '#ffffff' }}></i></Link>
              <Link href="#"><i className="fa-brands fa-twitter" style={{ color: '#ffffff' }}></i></Link>
              <Link href="#"><i className="fa-brands fa-instagram" style={{ color: '#ffffff' }}></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

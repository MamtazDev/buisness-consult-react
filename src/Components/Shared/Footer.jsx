
const Footer= () => {
  return (
    <div className="footer__section">
      <div className="container">
        <div className="footer__area">
          <div className="row">

            <div className="col-md-6 pb-4 col-lg-4">
              <div className="footer_logo">
                <a href="./index.html">
                  <img className="img-fluid" src="https://i.postimg.cc/y8DNYSsf/footer-logo.png" alt="img" />
                </a>
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
                <p className="company-title">Our Company</p>
                <a href="/">Home</a>
                <a href="/about">About us</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/service">Our services</a>
              </div>
            </div>

            <div className="col-lg-1">
              {/* Null */}
            </div>

            <div className="col-md-6 pb-4 col-lg-2">
              <div className="footer-menu">
                <p className="company-title">Services</p>
                <a href="/service-details">Business Analysis</a>
                <a href="/service-details">Strategic Planning</a>
                <a href="/service-details">Business Consulting</a>
                <a href="/service-details">Marketing Strategy</a>
                <a href="/service-details">Experience Design</a>
                <a href="/service-details">Audit & Evaluation</a>
              </div>
            </div>

            <div className="col-md-6 pb-4 col-lg-3">
              <div className="footer-menu-2">
                <p className="company-title">Subscribe to our newsletter</p>
                <form>
                  <input required type="email" className="form-control" placeholder="Your email here" />
                  <a href="#">
                    <button className="btn btn-success subscribe" type="submit">Subscribe</button>
                  </a>
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
              <a href="#"><i className="fa-brands fa-facebook" style={{ color: '#ffffff' }}></i></a>
              <a href="#"><i className="fa-brands fa-linkedin" style={{ color: '#ffffff' }}></i></a>
              <a href="#"><i className="fa-brands fa-twitter" style={{ color: '#ffffff' }}></i></a>
              <a href="#"><i className="fa-brands fa-instagram" style={{ color: '#ffffff' }}></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

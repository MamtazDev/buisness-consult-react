import { Link } from "react-router-dom";
import { bannerData } from '../../utils/data';
const Banner = () => {
  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero__area">
          <div className="row align-items-center">
            {/* Left Column with Text */}
            <div className="col-lg-6">
              <h1 className="hero-title wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
                {bannerData.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br className="d-none d-lg-block" />
                  </span>
                ))}
                <span id="your_business"></span>
              </h1>

              <p className="hero-para wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="350ms">
                {bannerData.paragraph.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br className="d-block d-lg-none" />
                    <br className="d-none d-lg-block" />
                  </span>
                ))}
              </p>
              <Link to={bannerData.button.link}>
                <button className="btn btn-success dark" type="button">
                  {bannerData.button.text}
                  <i className="fa-solid fa-arrow-right-long icon"></i>
                </button>
              </Link>
            </div>

            {/* Right Column with Images */}
            <div className="col-lg-6">
              {/* Image for mobile */}
              <img className="d-lg-none d-md-block" src={bannerData.images.mobile} alt="background" />

              {/* Images for desktop */}
              <div className="images_items position-relative d-none d-lg-block">
                <img className="img-fluid" src={bannerData.images.desktop} alt="background" />
                <div className="other_img">
                  {bannerData.images.otherImages.map((image, index) => (
                    <img
                      key={index}
                      className={image.className}
                      src={image.src} 
                      alt={image.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

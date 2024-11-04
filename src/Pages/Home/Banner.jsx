import { Link } from "react-router-dom";
import { bannerData } from "../../utils/data";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import WOW from "wow.js";

const Banner = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero__area">
          <div className="row align-items-center">
            {/* Left Column with Text */}
            <div className="col-lg-6">
              <h1
                className="hero-title wow fadeInUp" style={{display:"flex", flexDirection:"column"}}
                data-wow-duration="1.05s"
                data-wow-delay="100ms"
              >
                {/* {bannerData.title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br className="d-none d-lg-block" />
                  </span>
                ))} */}
                Utilize our <br /> solution to expand
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "your business.",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "& Its a big bang",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>

              <p
                className="hero-para wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="350ms"
              >
                {bannerData.paragraph.split("\n").map((line, index) => (
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
                  <i className="fa-solid fa-arrow-right-long icon" style={{marginLeft:"6px"}}></i>
                </button>
              </Link>
            </div>

            {/* Right Column with Images */}
            <div className="col-lg-6">
              {/* Image for mobile */}
              <img
                className="d-lg-none d-md-block"
                src={bannerData.images.mobile}
                alt="background"
              />

              {/* Images for desktop */}
              <div className="images_items position-relative d-none d-lg-block">
                <img
                  className="img-fluid"
                  src={bannerData.images.desktop}
                  alt="background"
                />
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

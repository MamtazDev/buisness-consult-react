import heroArrow from "../../../public/assets/hero-arrow.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero__area">
          <div className="row align-items-center">
            {/* Left Column with Text */}
            <div className="col-lg-6">
              <h1
                className="hero-title wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="100ms"
              >
                Utilize our
                <br className="d-none d-lg-block" />
                solution to expand
                <br className="d-block d-lg-none" />
                <br className="d-none d-lg-block" />
                <span id="your_business"></span>
              </h1>

              <p
                className="hero-para wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="350ms"
              >
                Make your business prosper with our great team of experts.
                <br className="d-block d-lg-none" />
                <br className="d-none d-lg-block" />
                {`We'll make your new business plan a success!`}
              </p>
              <Link to="/about">
                <button className="btn btn-success dark" type="button">
                  {` Let's Talk`}
                  <i className="fa-solid fa-arrow-right-long icon"></i>
                </button>
              </Link>
            </div>

            {/* Right Column with Images */}
            <div className="col-lg-6">
              {/* Image for mobile */}
              <img
                className="d-lg-none d-md-block"
                src="https://i.postimg.cc/6qCjd7HX/bg.png"
                alt="background"
              />

              {/* Images for desktop */}
              <div className="images_items position-relative d-none d-lg-block">
                <img
                  className="img-fluid"
                  src="https://i.postimg.cc/VLk1Ym5N/hero-bg.png"
                  alt="background"
                />
                <div className="other_img">
                  <img
                    className="position-absolute imgOne animatedImg img-fluid"
                    src="https://i.postimg.cc/8zm22YmS/hero1.png"
                    alt="hero1"
                  />
                  <img
                    className="position-absolute imgTwo animatedImg img-fluid"
                    src="https://i.postimg.cc/cJDVH8zk/hero2.png"
                    alt="hero2"
                  />
                  <img
                    className="position-absolute imgThree animatedImg img-fluid"
                    src="https://i.postimg.cc/d1LgTVPs/hero3.png"
                    alt="hero3"
                  />
                  <img
                    className="position-absolute imgFour loader-spinner img-fluid"
                    src="https://i.postimg.cc/BZPdSbBN/hero4.png"
                    alt="loader spinner"
                  />
                  <img
                    className="position-absolute imgFive img-fluid"
                    src={heroArrow}
                    alt="hero arrow"
                  />
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

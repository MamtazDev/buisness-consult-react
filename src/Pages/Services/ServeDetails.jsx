import { Link } from "react-router-dom";

const ServeDetails = () => {
  return (
    <div className="service-details-section">
      <div className="container">
        <div className="service-details-area">
          {/* Top Section */}
          <div className="row align-items-center pb-4">
            <div className="col-lg-7">
              <h4
                className="service-title-2 wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="250ms"
              >
                {`We’re making work meaningful for everyone, everywhere.`}
              </h4>
            </div>
            <div className="col-lg-5">
              <p
                className="service-text wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="350ms"
              >
                Ipsum dolor sit amet, consectetur adipiscing elit arcu eleifend
                quis elementum elementum massa facilisi cras ullamcorper cursus
                praesent.
              </p>
            </div>
          </div>

          {/* Brand & Business Strategy Section */}
          <div className="top">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div style={{ overflow: "hidden", borderRadius: "40px" }}>
                  <img
                    className="img-fluid port-img w-100"
                    src="https://i.postimg.cc/JzMmF6hC/statistics.png"
                    alt="Statistics"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <h4
                  className="side-title wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="250ms"
                >
                  Brand & business strategy
                </h4>
                <p
                  className="side-text wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="300ms"
                >
                  Lorem ipsum dolor sit amet consectetur. Nulla volutpat et
                  tristique vitae. Est elementum dignissim elit egestas massa.
                  Condimentum tincidunt varius quis viverra in enim fermentum.
                </p>
                {[
                  "Nostrud exercitation ullamco",
                  "24 hours response time",
                  "Phone or email consultation",
                  "100% Money-back guarantee",
                ].map((text, index) => (
                  <div
                    className="details-parent wow fadeInUp"
                    data-wow-duration="1.05s"
                    data-wow-delay={`${350 + index * 10}ms`}
                    key={index}
                  >
                    <img
                      className="img-fluid"
                      src="https://i.postimg.cc/mgHXQB4b/tick.png"
                      alt="icon"
                    />
                    <p className="details-text">{text}</p>
                  </div>
                ))}
                <div className="details-btn">
                  <Link to="/about">
                    <button className="btn btn-success dark" type="submit">
                      Read More
                      <i className="fa-solid fa-arrow-right-long icon"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Verbal Identity Systems Section */}
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h4
                className="side-title-2 wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="250ms"
              >
                Verbal identity systems
              </h4>
              <p
                className="side-text wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="300ms"
              >
                Ipsum dolor sit amet consectetur. Nulla volutpat et tristique
                vitae. Est elementum dignissim elit egestas massa. Condimentum
                tincidunt varius quis viverra in enim fermentum.
              </p>
              {[
                "Nostrud exercitation ullamco",
                "24 hours response time",
                "Phone or email consultation",
                "100% Money-back guarantee",
              ].map((text, index) => (
                <div
                  className="details-parent wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay={`${350 + index * 10}ms`}
                  key={index}
                >
                  <img
                    className="img-fluid"
                    src="https://i.postimg.cc/mgHXQB4b/tick.png"
                    alt="icon"
                  />
                  <p className="details-text">{text}</p>
                </div>
              ))}
              <div className="details-btn">
                <Link to="/about">
                  <button className="btn btn-success dark" type="submit">
                    Read More
                    <i className="fa-solid fa-arrow-right-long icon"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <img
                className="img-fluid"
                src="https://i.postimg.cc/PJJKNkKn/service-bg-1.png"
                alt="Service Background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServeDetails;

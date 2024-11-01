import { BsDownload } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="service-details-section">
      <div className="container">
        <div className="service-details-area">
          <p
            className="service-details-text wow fadeInUp"
            data-wow-duration="1.05s"
            data-wow-delay="250ms"
          >
            Business Analysis
          </p>
          <h3
            className="service-details-title wow fadeInUp"
            data-wow-duration="1.05s"
            data-wow-delay="300ms"
          >
            Why Us For International Business Consulting!
          </h3>

          <div className="row">
            <div className="col-lg-4">
              <div
                className="new-left-side-bar wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="350ms"
              >
                <h4 className="side-title">More Services</h4>
                {[
                  "Business Analysis",
                  "Strategic Planning",
                  "Business Consulting",
                  "Marketing Strategy",
                  "Experience Design",
                  "Audit & Evaluation",
                ].map((service, index) => (
                  <Link to="/" key={index}>
                    {" "}
                    <div className="service-parent">
                      <p className="new-service-title">{service}</p>
                      <i className="fa-solid fa-arrow-right-long icon"></i>
                    </div>
                  </Link>
                ))}
              </div>

              <div
                className="new-left-side-bar-2 wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="380ms"
              >
                <h4 className="side-title">Brochure</h4>
                <p className="side-text">
                  when an unknown printer took ga{" "}
                  <br className="d-none d-xl-block" />
                  lley offer typey anddey.
                </p>

                {[...Array(2)].map((_, index) => (
                  <div className="service-parent" key={index}>
                    <div className="pdf-parent">
                      <FaRegFilePdf />
                      <p className="new-service-title-2">PDF. Download</p>
                    </div>
                    <button className="border-0 bg-transparent download-button">
                      <BsDownload />
                    </button>
                  </div>
                ))}
              </div>

              <div
                className="new-left-side-bar-2 wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="390ms"
              >
                <h4 className="side-title">Get A Free Quote</h4>
                <form>
                  <div className="child">
                    <input
                      type="text"
                      className="new-form-control"
                      placeholder="Your Name"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="child">
                    <input
                      type="email"
                      className="new-form-control"
                      placeholder="E-mail Address"
                      required
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="child">
                    <textarea
                      className="new-form-control"
                      placeholder="Type Your Message"
                      rows="3"
                      style={{ width: "100%" }}
                    ></textarea>
                  </div>
                  <button type="button" className="btn btn-primary new-message">
                    Send Message
                  </button>
                </form>
              </div>

              <div
                className="new-contact-parent wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="400ms"
              >
                <h5 className="new-contact-title">
                  If You Need Any Help <br className="d-none d-xl-block" />{" "}
                  Contact With Us
                </h5>
                <div className="new-contact-number">
                  <button className="btn btn-success" type="button">
                    <i className="fa-solid fa-phone"></i> +91705 2101786
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="new-bg-parent">
                <img
                  className="img-fluid wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="250ms"
                  src="https://i.postimg.cc/TYRQKg7J/service-details-bg.png"
                  alt="BG"
                />
                <p
                  className="new-img-bottom-text wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="300ms"
                >
                  {`  Embed a little help from our friends from time to time. Although we offer the one-stop convenience of
                  an integrated range of legal, financial services under one roof, there are occasions when our clients
                  need specialist advice beyond the scope of our own expertise. That's why we've developed close working
                  relationships with a number of strategic partners.`}
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <h5
                    className="new-term-title wow fadeInUp"
                    data-wow-duration="1.05s"
                    data-wow-delay="300ms"
                  >
                    Raise Capital Faster & Negotiate On Your Own Terms
                  </h5>
                  <p
                    className="new-term-text wow fadeInUp"
                    data-wow-duration="1.05s"
                    data-wow-delay="350ms"
                  >
                    When an unknown printer took a galley offer type and
                    scrambled it to make a type specimen book, it has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>

                  <div className="row">
                    {[
                      "100% Better Results",
                      "Budget Friendly Theme",
                      "Valuable Ideas",
                      "Happy Customers",
                    ].map((text, index) => (
                      <div className="col-lg-6" key={index}>
                        <div
                          className="new-term-menu-parent  wow fadeInUp"
                          data-wow-duration="1.05s"
                          data-wow-delay="350ms"
                        >
                          <img
                            className="img-fluid"
                            src="https://i.postimg.cc/mgHXQB4b/tick.png"
                            alt="icon"
                          />
                          <p className="new-menu-text">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-lg-6">
                  {[
                    {
                      img: "https://i.postimg.cc/nr78M73J/finance-icon.png",
                      name: "Finance Consulting",
                      text: "Financial advice integrated.",
                    },
                    {
                      img: "https://i.postimg.cc/GmRR870S/tax-icon.png",
                      name: "Tax Consulting",
                      text: "Comprehensive tax strategy.",
                    },
                  ].map((service, index) => (
                    <div
                      className="new-finance-parent wow fadeInUp"
                      data-wow-duration="1.05s"
                      data-wow-delay="350ms"
                      key={index}
                    >
                      <div className="icon">
                        <img src={service.img} alt="icon" />
                      </div>
                      <div className="content">
                        <p className="new-content-name">{service.name}</p>
                        <p className="new-content-text">{service.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h5
                className="new-quality-title wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="400ms"
              >
                Quality Industrial Working
              </h5>
              <p
                className="new-quality-text wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="420ms"
              >
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book, it has survived not only five
                centuries but also the leap into electronic typesetting.
              </p>

              <div className="row">
                {[1, 2].map((num) => (
                  <div className="col-lg-6" key={num}>
                    <div
                      className="new-quality-img wow fadeInUp"
                      data-wow-duration="1.05s"
                      data-wow-delay="350ms"
                    >
                      <img
                        className="img-fluid"
                        src={`https://i.postimg.cc/HLLfXF63/quality-img-${num}.png`}
                        alt="Quality"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="new-banner">
                <h4
                  className="new-quote-title wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="350ms"
                >
                  “ Success Is Not Final; Failure Is Not Fatal: It Is The
                  Courage To Continue That Counts.”
                </h4>
                <p
                  className="new-writer-name wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="400ms"
                >
                  Winston Churchill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

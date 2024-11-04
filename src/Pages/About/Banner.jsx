import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="about_hero_section">
      <div className="container">
        <div className="about-hero-area">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-parent">
                <img
                  className="img-fluid"
                  src="https://i.postimg.cc/JhL7MYnq/about-bg.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="right-content col-lg-6 ps-5">
              <h3
                className="about-title wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="250ms"
              >
                Take control & learn <br className="d-none d-xl-block" />
                about your money.
              </h3>
              <p
                className="about-text wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="300ms"
              >
                Ei aperiri alienum accommodare his. Ne quas augue deleniti nec.
                Nom <br className="d-none d-xl-block" />
                atqui quaestio duo, te per ridens consulatu. Ex agam magna ius,
                ne mel <br className="d-none d-xl-block" />
                simul inermis consequat. Agam nostrum officiis no vix, ius cu
                primis <br className="d-none d-xl-block" />
                persius quaeque, ei nec sonet impetus.
              </p>
              <div className="btn-parent">
                <Link to="/service">
                  <button className="btn btn-success dark" type="submit">
                    Learn More
                    <i className="fa-solid fa-arrow-right-long icon"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

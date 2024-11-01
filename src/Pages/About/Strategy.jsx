import { strategyData } from "../../utils/data";

const Strategy = () => {
  return (
    <div className="strategy-section">
      <div className="container">
        <div className="strategy-area">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h3
                className="strategy-title wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="250ms"
              >
                Simply said, the <br className="d-none d-xl-block" />
                most effective strategy <br className="d-none d-xl-block" />
                for your business
              </h3>
              <p
                className="strategy-text wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="300ms"
              >
                Ei aperiri alienum accommodare his. Ne quas augue deleniti{" "}
                <br className="d-none d-xl-block" />
                nec. Nom atqui quaestio duo, te per ridens consulatu. Ex agam{" "}
                <br className="d-none d-xl-block" />
                magna ius, ne mel simul inermis consequat. Agam nostrum{" "}
                <br className="d-none d-xl-block" />
                officiis no vix, ius cu primis persius quaeque, ei nec sonet{" "}
                <br className="d-none d-xl-block" />
                impetus.
              </p>
              <button className="btn btn-success dark" type="submit">
                View More <i className="fa-solid fa-arrow-right-long icon"></i>
              </button>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 right-side">
              <div className="row">
                {strategyData.map((item, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div
                      className="left wow fadeInUp"
                      data-wow-duration="1.05s"
                      data-wow-delay="250ms"
                    >
                      <img
                        className="img-fluid"
                        src={item.imgSrc}
                        alt={item.altText}
                      />
                      <h5 className="icon-title">{item.title}</h5>
                      <p className="icon-text">
                        {item.description.split(", ").map((line, i) => (
                          <span key={i}>
                            {line}
                            <br className="d-none d-lg-block" />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;

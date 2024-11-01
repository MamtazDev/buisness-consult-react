import services from '../../utils/data';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="serve__section">
      <div className="container">
        <div className="serve__area">
          <h3 className="serve_title wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="240ms">
            What We Do To Serve Your Best
          </h3>

          <p className="serve-para wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="350ms">
            We provide comprehensive services to support
            <br className="d-block d-md-none" />
            your business by
            <br className="d-none d-lg-block" />
            leveraging
            <br className="d-none d-md-block d-lg-none" />
            strategy to drive
            <br className="d-block d-md-none" />
            people, process, and information.
          </p>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <Link href={service.link}>
                  <div className="card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay={`${450 + index * 50}ms`}>
                    <img src={service.image1} className="card-img-top first" alt={service.title} />
                    <img src={service.image2} className="card-img-top second" alt={service.title} />
                    <div className="card-body">
                      <h5 className="card-title">{service.title}</h5>
                      <p className="card-text">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Service;

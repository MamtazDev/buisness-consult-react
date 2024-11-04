import React from "react";
import { testimonials } from "../../utils/data";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className="testimonial__section">
      <div className="container">
        <h3
          className="testimonial-title wow fadeInUp"
          data-wow-duration="1.05s"
          data-wow-delay="250ms"
        >
          What Our Client Saying?
        </h3>
        <p
          className="testimonial-text wow fadeInUp"
          data-wow-duration="1.05s"
          data-wow-delay="300ms"
        >
          We are trusted by numerous companies from{" "}
          <br className="d-block d-md-none" /> different{" "}
          <br className="d-none d-md-block d-lg-block" /> business to meet their
          needs.
        </p>

        {/* Swiper */}
        <div className="swiper testimonial-swiper">
          <div className="swiper-wrapper">
            
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
              style={{paddingBottom:'30px'}}
            > {testimonials.map((testimonial, index) => (
              <SwiperSlide className="swiper-slide wow fadeInUp" data-wow-duration="1.05s" data-wow-delay={`${350 + index * 50}ms`} key={index}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="testimonal_wrapper position-relative">
                      <img className="img-fluid" src={testimonial.backgroundImg} alt="testimonial background" />
                      <div className="testimonial_others">
                        <img className="position-absolute testimonialOne" src={testimonial.testimonialImg} alt="testimonial" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 text-start">
                    <img className="img-fluid d-none d-lg-block" src={testimonial.quoteImg} alt="quote" />
                    <p className="quote-text">
                      {testimonial.quote.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br className={i === 0 && testimonial.quote.includes('\n') ? 'd-block d-lg-none' : 'd-none d-lg-block'} />
                        </React.Fragment>
                      ))}
                    </p>
                    <img className="img-fluid" src={testimonial.ratingImg} alt="rating" />
                    <p className="client-name">{testimonial.clientName}</p>
                    <p className="client-designation">{testimonial.clientDesignation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        
            
            </Swiper>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

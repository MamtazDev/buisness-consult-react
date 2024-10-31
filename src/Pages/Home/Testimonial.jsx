import React from 'react';

// Sample testimonial data
const testimonials = [
  {
    quote: "Working with Consuly to implement their strategic planning framework has helped us focus on the biggest opportunities for growth.",
    clientName: "Maya Language",
    clientDesignation: "Director ACT",
    backgroundImg: "https://i.postimg.cc/y808ZC39/tesntimonial-Bg-One.png",
    testimonialImg: "https://i.postimg.cc/L5rmJxHN/tesntimonial-Img.png",
    quoteImg: "https://i.postimg.cc/76wG6YBf/quote.png",
    ratingImg: "https://i.postimg.cc/5ytXBKWJ/rating.png",
  },
  // Duplicate the object for additional testimonials or modify as needed
  {
    quote: "Working with Consuly to implement their strategic planning framework has helped us focus on the biggest opportunities for growth.",
    clientName: "Maya Language",
    clientDesignation: "Director ACT",
    backgroundImg: "https://i.postimg.cc/y808ZC39/tesntimonial-Bg-One.png",
    testimonialImg: "https://i.postimg.cc/L5rmJxHN/tesntimonial-Img.png",
    quoteImg: "https://i.postimg.cc/76wG6YBf/quote.png",
    ratingImg: "https://i.postimg.cc/5ytXBKWJ/rating.png",
  },
  {
    quote: "Working with Consuly to implement their strategic planning framework has helped us focus on the biggest opportunities for growth.",
    clientName: "Maya Language",
    clientDesignation: "Director ACT",
    backgroundImg: "https://i.postimg.cc/y808ZC39/tesntimonial-Bg-One.png",
    testimonialImg: "https://i.postimg.cc/L5rmJxHN/tesntimonial-Img.png",
    quoteImg: "https://i.postimg.cc/76wG6YBf/quote.png",
    ratingImg: "https://i.postimg.cc/5ytXBKWJ/rating.png",
  },
  {
    quote: "Working with Consuly to implement their strategic planning framework has helped us focus on the biggest opportunities for growth.",
    clientName: "Maya Language",
    clientDesignation: "Director ACT",
    backgroundImg: "https://i.postimg.cc/y808ZC39/tesntimonial-Bg-One.png",
    testimonialImg: "https://i.postimg.cc/L5rmJxHN/tesntimonial-Img.png",
    quoteImg: "https://i.postimg.cc/76wG6YBf/quote.png",
    ratingImg: "https://i.postimg.cc/5ytXBKWJ/rating.png",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial__section">
      <div className="container">
        <h3 className="testimonial-title wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="250ms">
          What Our Client Saying?
        </h3>
        <p className="testimonial-text wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
          We are trusted by numerous companies from <br className="d-block d-md-none" /> different <br className="d-none d-md-block d-lg-block" /> business to meet their needs.
        </p>

        {/* Swiper */}
        <div className="swiper testimonial-swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div className="swiper-slide wow fadeInUp" data-wow-duration="1.05s" data-wow-delay={`${350 + index * 50}ms`} key={index}>
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
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
        {/* Swiper -/end */}
      </div>
    </div>
  );
};

export default Testimonial;

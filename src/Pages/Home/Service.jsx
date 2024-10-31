

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

          {/* Card Start Here */}
          <div className="row g-4">
            {/* Service Card 1 */}
            <div className="col-md-6 col-lg-4">
              <a href="./service-details.html">
                <div className="card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="450ms">
                  <img src="https://i.postimg.cc/yYvy34Bx/Card-img-1-1.png" className="card-img-top first" alt="Business Analysis" />
                  <img src="https://i.postimg.cc/7683rq1s/Card-img-1.png" className="card-img-top second" alt="Business Analysis" />
                  <div className="card-body">
                    <h5 className="card-title">Business Analysis</h5>
                    <p className="card-text">
                      Using analytics, we can bridge
                      <br className="d-none d-lg-block" />
                      the analysis between technology
                      <br className="d-none d-lg-block" />
                      and business.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="col-md-6 col-lg-4">
              <a href="./service-details.html">
                <div className="card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="500ms">
                  <img src="https://i.postimg.cc/TPy0Xkzw/Card-img-2.png" className="card-img-top first" alt="Strategic Planning" />
                  <img src="https://i.postimg.cc/PxYMCCrn/Card-img-2-1.png" className="card-img-top second" alt="Strategic Planning" />
                  <div className="card-body">
                    <h5 className="card-title">Strategic Planning</h5>
                    <p className="card-text">
                      Develop the most effective
                      <br className="d-none d-lg-block" />
                      strategies and plans to boost your
                      <br className="d-none d-lg-block" />
                      growth and achieve your goals
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="col-md-6 col-lg-4">
              <a href="./service-details.html">
                <div className="card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="600ms">
                  <img src="https://i.postimg.cc/Bb5NVXdB/Card-img-3.png" className="card-img-top first" alt="Business Consulting" />
                  <img src="https://i.postimg.cc/rwwgfyg5/Card-img-3-1.png" className="card-img-top second" alt="Business Consulting" />
                  <div className="card-body">
                    <h5 className="card-title">Business Consulting</h5>
                    <p className="card-text">
                      Create in-depth reports and
                      <br className="d-none d-lg-block" />
                     {` presentations on your business's`}
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Service Card 4 */}
            <div className="col-md-6 col-lg-4">
              <a href="/service-details">
                <div className="card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="700ms">
                  <img src="https://i.postimg.cc/jqGbV9BW/Card-img-4.png" className="card-img-top first" alt="Marketing Strategy" />
                  <img src="https://i.postimg.cc/T3cMDP1m/Card-img-4-1.png" className="card-img-top second" alt="Marketing Strategy" />
                  <div className="card-body">
                    <h5 className="card-title">Marketing Strategy</h5>
                    <p className="card-text">
                      We use a variety of innovative and
                      <br className="d-none d-lg-block" />
                      effective strategies to achieve a target
                      <br className="d-none d-lg-block" />
                      for the business you are developing
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Service Card 5 */}
            <div className="col-md-6 col-lg-4">
              <a href="./service-details.html">
                <div className="card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="800ms">
                  <img src="https://i.postimg.cc/G2dCfsfX/Card-img-5.png" className="card-img-top first" alt="Experience Design" />
                  <img src="https://i.postimg.cc/1tGznQkj/Card-img-5-1.png" className="card-img-top second" alt="Experience Design" />
                  <div className="card-body">
                    <h5 className="card-title">Experience Design</h5>
                    <p className="card-text">
                      We help clients understand, ideate
                      <br className="d-none d-lg-block" />
                      and execute modern interactions
                      <br className="d-none d-lg-block" />
                      across channels and functional areas.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Service Card 6 */}
            <div className="col-md-6 col-lg-4">
              <a href="/service-details">
                <div className="card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="850ms">
                  <img src="https://i.postimg.cc/RFKW7fHG/Card-img-6.png" className="card-img-top first" alt="Audit & Evaluation" />
                  <img src="https://i.postimg.cc/2Sy3HgW1/Card-img-6-1.png" className="card-img-top second" alt="Audit & Evaluation" />
                  <div className="card-body">
                    <h5 className="card-title">Audit & Evaluation</h5>
                    <p className="card-text">
                      We assist a company in staying afloat.
                      <br className="d-none d-lg-block" />
                      and preventing fraud so that it may be
                      <br className="d-none d-lg-block" />
                      dealt with immediately.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* Card End Here */}
        </div>
      </div>
    </div>
  );
};

export default Service;

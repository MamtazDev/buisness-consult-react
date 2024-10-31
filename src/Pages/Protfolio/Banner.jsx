const Banner = () => {
  return (
    <div className="port-hero-section">
      <div className="container">
        <div className="port-hero-area">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="port-parent wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="250ms">
                <img src="./assets/images/Ellipse.png" alt="icon" />
                <p className="port-name">Portfolio</p>
              </div>
              <h3 className="port-title wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="350ms">
                Our work and <br className="d-none d-xl-block" />
                success stories
              </h3>
              <p className="port-text wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="400ms">
                Being a good neighbor is about more than just being there when things go completely wrong. It’s also about being there for all of life’s moments when things go perfectly right.
              </p>
            </div>

            <div className="col-lg-8">
              {/* Video Section Start Here */}
              <div className="video-section">
                <div className="video-area">
                  {/* Video Thumbnail with Play Icon */}
                  <div className="video-thumbnail" data-bs-toggle="modal" data-bs-target="#videoModal">
                    <img className="img-fluid w-100" src="./assets/images/port-bg.png" alt="Video Thumbnail" />
                    <div className="play-icon">&#9654;</div>
                  </div>

                  {/* Modal */}
                  <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              className="iframeClass"
                              src="https://www.youtube.com/embed/QsY8fnvMn6c?si=T3TCzi8mEOJPn94v"
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Modal End */}
                </div>
              </div>
              {/* Video Section End Here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

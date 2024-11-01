const VideoSection = () => {
  return (
    <div className="video-section BG">
      <div className="container">
        <div className="video-area">
          <h3 className="video-title-one wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="250ms">
            We support our clients in bringing<br className="d-none d-lg-block" />
          </h3>
          <h3 className="video-title-two wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="350ms">
            their business concepts to life and<br className="d-none d-lg-block" />
            attaining success.
          </h3>

          {/* Video Thumbnail with Play Icon */}
          <div className="video-thumbnail" data-bs-toggle="modal" data-bs-target="#videoModal">
            <img src="https://i.postimg.cc/j5YNfYXJ/vid-thumnail.png" alt="Video Thumbnail" className="img-fluid" />
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
          {/* End of Modal */}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

const Counting = () => {
  return (
    <div className="counting-section">
      <div className="container">
        <div className="counting-area">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="count-parent">
                <div className="img-sec">
                  <img className="img-fluid" src="https://i.postimg.cc/wxmNVvPR/counting-icon-1.png" alt="Partner with us" />
                </div>
                <div className="info-sec">
                  <div className="d-flex align-items-center gap-2">
                    <h2 className="count-number number">250</h2>
                    <span className="count-number">+</span>
                  </div>
                  <p className="count-text color-d">Partner with us</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="count-parent">
                <div className="img-sec">
                  <img className="img-fluid" src="https://i.postimg.cc/3rmyGq4g/counting-icon-2.png" alt="Cumulative trading volume" />
                </div>
                <div className="info-sec">
                  <div className="d-flex align-items-center gap-2">
                    <h2 className="count-number number">350</h2>
                    <span className="count-number">+</span>
                  </div>
                  <p className="count-text">Cumulative trading volume</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="count-parent">
                <div className="img-sec">
                  <img className="img-fluid" src="https://i.postimg.cc/2yDSTzbn/counting-icon-3.png" alt="Successful Projects" />
                </div>
                <div className="info-sec">
                  <div className="d-flex align-items-center gap-2">
                    <h2 className="count-number number">400</h2>
                    <span className="count-number">K</span>
                  </div>
                  <p className="count-text">Successful Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;

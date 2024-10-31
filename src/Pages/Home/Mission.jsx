

const Mission = () => {
  return (
    <div className="mission__section">
      <div className="container">
        <div className="mission__area">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid d-lg-none d-block"
                src="https://i.postimg.cc/ZRcf595s/teamMain.png"
                alt="Team Image"
              />
              <div className="team_wrapper position-relative d-none d-lg-block">
                <img
                  className="img-fluid w-100"
                  src="https://i.postimg.cc/13nYr5v4/teambg.png"
                  alt="Team Background"
                />
                <div className="team_others">
                  <img
                    className="position-absolute teamOne animatedImg"
                    src="https://i.postimg.cc/59gGxrH9/team1.png"
                    alt="Team Member 1"
                  />
                  <img
                    className="position-absolute teamTwo animatedImg"
                    src="https://i.postimg.cc/tCmM6VtL/team2.png"
                    alt="Team Member 2"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <h3
                className="mission_title wow fadeInUp"
                data-wow-duration="1.10s"
                data-wow-delay="240ms"
              >
                We Lead Your Business
                <br className="d-block d-lg-none" />
                Team To Victory
              </h3>
              <p
                className="mission-para wow fadeInUp"
                data-wow-duration="1.10s"
                data-wow-delay="300ms"
              >
                We are a team of passionate business consultants &
                <br className="d-block d-lg-none" />
                technology
                <br className="d-none d-lg-block" />
                veterans eager to help companies reach their full potential.
              </p>

              {/* Tab Start Here */}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active tab"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Our Mission
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link tab"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Our Vision
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link tab"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Our Value
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  Our strategic planning process rapidly delivers
                  <br className="d-block d-md-none" /> plans that stick,
                  <br className="d-none d-md-block d-lg-none" /> with execution support
                  <br className="d-block d-md-none" /> to make your plans a reality.
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  Our strategic planning process rapidly delivers plans that stick,
                  <br className="d-none d-md-block d-lg-none" /> with execution support
                  <br className="d-block d-md-none" /> to make your plans a reality.
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  Our strategic planning process rapidly delivers plans that stick,
                  <br className="d-none d-md-block d-lg-none" /> with execution support
                  <br className="d-block d-md-none" /> to make your plans a reality.
                </div>
              </div>
              {/* Tab End Here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

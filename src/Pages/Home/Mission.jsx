import  { useState } from 'react';
import { missionData } from '../../utils/data'; // Adjust the path as necessary

const Mission = () => {
  const [activeTab, setActiveTab] = useState(missionData[0].id);

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
                We are a team of passionate business consultants & technology
                veterans eager to help companies reach their full potential.
              </p>

              {/* Tab Start Here */}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {missionData.map((tab) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      className={`nav-link tab ${activeTab === tab.id ? 'active' : ''}`}
                      id={`${tab.id}-tab`}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                      role="tab"
                      aria-controls={tab.id}
                      aria-selected={activeTab === tab.id}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="tab-content" id="myTabContent">
                {missionData.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={`${tab.id}-tab`}
                  >
                    {tab.content}
                  </div>
                ))}
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

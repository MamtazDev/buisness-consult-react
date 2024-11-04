import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Navigation, Pagination } from "swiper/modules";

// const mentors = [
//   {
//     name: "Salehdin Ahdam",
//     designation: "Head of Power MTI",
//     image: "https://i.postimg.cc/fLRwL9vJ/mentor-1.png",
//   },
//   {
//     name: "Muhadi Ahmat",
//     designation: "Senior Client Partner",
//     image: "https://i.postimg.cc/6qDwY1xv/mentor-2.png",
//   },
//   {
//     name: "Jessica Angel",
//     designation: "Director ACT",
//     image: "https://i.postimg.cc/RZx4t8Rr/mentor-3.png",
//   },
//   {
//     name: "Salehdin Ahdam",
//     designation: "Head of Power MTI",
//     image: "https://i.postimg.cc/fLRwL9vJ/mentor-1.png",
//   },
//   {
//     name: "Muhadi Ahmat",
//     designation: "Senior Client Partner",
//     image: "https://i.postimg.cc/6qDwY1xv/mentor-2.png",
//   },
//   {
//     name: "Jessica Angel",
//     designation: "Director ACT",
//     image: "https://i.postimg.cc/RZx4t8Rr/mentor-3.png",
//   },
// ];

const Expert = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="expert__section">
      <div className="container">
        <div className="expert__area">
          <h3
            className="expert-title wow fadeInUp"
            data-wow-duration="1.05s"
            data-wow-delay="250ms"
          >
            Our mentors are <br className="d-block d-lg-none" />
            <br className="d-none d-lg-block" />
            experts in different fields.
          </h3>
          <div
            style={{
              justifyContent: "end",
              display: "flex",
              marginBottom: "30px",
              gap: "8px",
            }}
          >
            <button
              ref={prevRef}
              className="text-[#12182B] prev"
              style={{
                borderRadius: "100%",
                width: "50px",
                height: "50px",
                background: "none",
                borderColor: "#12182B",
              }}
            >
              <IoArrowBackSharp />
            </button>
            <button
              ref={nextRef}
              className="text-[#12182B] next"
              style={{
                borderRadius: "100%",
                width: "50px",
                height: "50px",
                background: "none",
                borderColor: "#12182B",
              }}
            >
              <IoArrowForward />
            </button>
          </div>
        </div>
        <div className="expert-slider-class">
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              className="wow fadeInUp"
              data-wow-duration="1.05s"
              data-wow-delay="300ms"
            >
              <img
                className="img-fluid"
                src="https://i.postimg.cc/DwdFPshw/mentor-1.png"
                alt="img"
              />
              <h4 className="mentor-name">Salehdin Ahdam</h4>
              <p className="mentor-designation">Head of Power MTI</p>
            </div>
            <div
              className="wow fadeInUp"
              data-wow-duration="1.05s"
              data-wow-delay="350ms"
            >
              <img
                className="img-fluid img-middle"
                src="https://i.postimg.cc/hGDnyj4b/mentor-2.png"
                alt="img"
              />
              <h4 className="mentor-name">Muhadi Ahmat</h4>
              <p className="mentor-designation">Senior Client Partner</p>
            </div>
            <div
              className="wow fadeInUp"
              data-wow-duration="1.05s"
              data-wow-delay="400ms"
            >
              <img
                className="img-fluid"
                src="https://i.postimg.cc/LXq8DXvQ/mentor-3.png"
                alt="img"
              />
              <h4 className="mentor-name">Jessica Angel</h4>
              <p className="mentor-designation">Director ACT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;

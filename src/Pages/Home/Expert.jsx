import React, { useRef } from "react";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const mentors = [
  {
    name: "Salehdin Ahdam",
    designation: "Head of Power MTI",
    image: "https://i.postimg.cc/fLRwL9vJ/mentor-1.png",
  },
  {
    name: "Muhadi Ahmat",
    designation: "Senior Client Partner",
    image: "https://i.postimg.cc/6qDwY1xv/mentor-2.png",
  },
  {
    name: "Jessica Angel",
    designation: "Director ACT",
    image: "https://i.postimg.cc/RZx4t8Rr/mentor-3.png",
  },
  {
    name: "Salehdin Ahdam",
    designation: "Head of Power MTI",
    image: "https://i.postimg.cc/fLRwL9vJ/mentor-1.png",
  },
  {
    name: "Muhadi Ahmat",
    designation: "Senior Client Partner",
    image: "https://i.postimg.cc/6qDwY1xv/mentor-2.png",
  },
  {
    name: "Jessica Angel",
    designation: "Director ACT",
    image: "https://i.postimg.cc/RZx4t8Rr/mentor-3.png",
  },
];

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
        {/* Swiper Slider */}
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={16}
          slidesPerView={3}
          modules={[Navigation]}
          className="expert-slider-class"
        >
          {mentors.map((mentor, index) => (
            <SwiperSlide key={index}>
              <div
                className="wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay={`${300 + index * 50}ms`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img className="img-fluid" src={mentor.image} alt="img" />
                <h4 className="mentor-name">{mentor.name}</h4>
                <p className="mentor-designation">{mentor.designation}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Expert;

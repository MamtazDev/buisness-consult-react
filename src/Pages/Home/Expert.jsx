import { useRef } from "react";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          {/* Additional Slides */}
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Expert;

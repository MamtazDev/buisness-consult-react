import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { sliderData } from "../../utils/data";

const Business = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="business__section">
      <div className="container">
        <div className="business__area">
          <div className="row align-items-center">
            {/* Left Column with Title */}
            <div className="col-lg-6">
              <h2
                className="business-title wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="100ms"
              >
                We Provide The Best
                <Link to="/about">
                  <img
                    style={{ marginLeft: "8px" }}
                    className="img-fluid img-res"
                    src="https://i.postimg.cc/65rH1vB2/slide-logo.png"
                    alt="slide logo"
                  />
                </Link>
                <br className="d-none d-lg-block" /> Solution For Your
                <br className="d-block d-lg-none" /> Business <br className="d-none d-lg-block" />
                Development
                <Link to="/services">
                  <img
                    style={{ marginLeft: "8px" }}
                    className="img-fluid img-res"
                    src="https://i.postimg.cc/t4DB9GZ9/slide-img.png"
                    alt="slide img"
                  />
                </Link>
              </h2>
            </div>

            {/* Right Column with Description */}
            <div className="col-lg-3 offset-lg-2">
              <p
                className="business-para wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="100ms"
              >
                We provide all the services that you need to{" "}
                <br className="d-none d-lg-block" /> boost your business up to
                a high level.
              </p>
            </div>
            <div
              style={{
                justifyContent: "end",
                display: "flex",
                marginBottom: "30px",
                gap: "10px",
              }}
            >
              <button
                ref={prevRef}
                className="text-white prev"
                style={{
                  borderRadius: "100%",
                  width: "50px",
                  height: "50px",
                  background: "none",
                  borderColor: "#fff",
                }}
              >
                <IoArrowBackSharp />
              </button>
              <button
                id="swiper-next2"
                ref={nextRef}
                className="text-white next"
                style={{
                  borderRadius: "100%",
                  width: "50px",
                  height: "50px",
                  background: "none",
                  borderColor: "#fff",
                }}
              >
                <IoArrowForward />
              </button>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="row">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              freeMode={true}
              modules={[Pagination, Navigation]}
              pagination={{ type: "fraction" }}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // 1440: {
                //   slidesPerView: 4,
                //   spaceBetween: 20,
                // },
              }}
              className="mySwiper cursor-pointer swiper-no-bg"
            >
              {sliderData.map((slide) => (
                <div className="mb-4" key={slide.id}>
                  <SwiperSlide>
                    <img
                      className="img-fluid"
                      src={slide.imageUrl}
                      alt={slide.altText}
                      style={{ borderRadius: "24px" }}
                    />
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

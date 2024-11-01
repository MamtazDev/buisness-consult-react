import { IoArrowBackSharp, IoArrowForward } from 'react-icons/io5';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

const mentors = [
  {
    name: 'Salehdin Ahdam',
    designation: 'Head of Power MTI',
    image: 'https://i.postimg.cc/fLRwL9vJ/mentor-1.png',
  },
  {
    name: 'Muhadi Ahmat',
    designation: 'Senior Client Partner',
    image: 'https://i.postimg.cc/6qDwY1xv/mentor-2.png',
  },
  {
    name: 'Jessica Angel',
    designation: 'Director ACT',
    image: 'https://i.postimg.cc/RZx4t8Rr/mentor-3.png',
  },
  {
    name: 'Salehdin Ahdam',
    designation: 'Head of Power MTI',
    image: 'https://i.postimg.cc/fLRwL9vJ/mentor-1.png',
  },
  {
    name: 'Muhadi Ahmat',
    designation: 'Senior Client Partner',
    image: 'https://i.postimg.cc/6qDwY1xv/mentor-2.png',
  },
  {
    name: 'Jessica Angel',
    designation: 'Director ACT',
    image: 'https://i.postimg.cc/RZx4t8Rr/mentor-3.png',
  },
];

const Expert = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <div className="expert__section">
      <div className="container">
        <div className="expert__area">
          <h3 className="expert-title wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="250ms">
            Our mentors are <br className="d-block d-lg-none" />
            <br className="d-none d-lg-block" />
            experts in different fields.
          </h3>
          <div style={{justifyContent:'end', display:'flex',marginBottom:"30px"}}>
            <button
              ref={prevRef}
              className="text-[#12182B] prev"
              style={{borderRadius:'100%' ,width:'70px', height:"70px" ,background:"none" ,borderColor:"#12182B"}}
            >
              <IoArrowBackSharp />
            </button>
            <button
              ref={nextRef}
              className="text-[#12182B] next"
              style={{borderRadius:'100%' ,width:'70px', height:"70px" ,background:"none" ,borderColor:"#12182B"}}
            >
              <IoArrowForward />
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-[88px] pb-[100px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            modules={[Pagination, Navigation]}
            pagination={{
              type: "fraction",
              renderFraction: () => null, 
            }}
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
              1440: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mySwiper cursor-pointer"
          >
            {mentors.map((mentor, index) => (
              <SwiperSlide className="wow fadeInUp" data-wow-duration="1.05s" data-wow-delay={`${300 + index * 50}ms`} key={index}>
                <img className="img-fluid" src={mentor.image} alt={mentor.name} />
                <h4 className="mentor-name">{mentor.name}</h4>
                <p className="mentor-designation">{mentor.designation}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Expert;

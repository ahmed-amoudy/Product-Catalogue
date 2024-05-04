// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/images/sponsor/01.png";
import image2 from "../../assets/images/sponsor/02.png";
import image3 from "../../assets/images/sponsor/03.png";
import image4 from "../../assets/images/sponsor/04.png";
import image5 from "../../assets/images/sponsor/05.png";
import image6 from "../../assets/images/sponsor/06.png";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const sponsorList = [
  {
    imgUrl: image1,
  },
  {
    imgUrl: image2,
  },
  {
    imgUrl: image3,
  },
  {
    imgUrl: image4,
  },
  {
    imgUrl: image5,
  },
  {
    imgUrl: image6,
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              loop={"true"}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  width: 0,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 5.5,
                },
              }}
            >
              {sponsorList.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

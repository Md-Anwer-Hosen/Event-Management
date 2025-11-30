import React from "react";
import bgImage1 from "../../assets/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg";
import bgImage2 from "../../assets/decorated-banquet-hall-with-served-round-table-with-hydrangea-centerpiece-chiavari-chairs.jpg";
import bgImage3 from "../../assets/decorated-wedding-hall-with-candles-round-tables-centerpieces.jpg";
import bgImage4 from "../../assets/luxurious-dinner-hall-with-large-crystal-chandelier.jpg";
import bgImage5 from "../../assets/bunch-flowers-leaves-table.jpg";
import bgImage6 from "../../assets/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Header = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" w-full" src={bgImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src={bgImage2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src={bgImage3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src={bgImage4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src={bgImage5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full" src={bgImage6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;

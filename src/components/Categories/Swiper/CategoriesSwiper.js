/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/zoom';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './CategoriesSwiper.scss';

import { Zoom, Navigation, Pagination } from 'swiper';

export default function CategoriesSwiper() {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      zoom
      navigation
      pagination={{
        clickable: true,
      }}
      slidesPerView={4}
      modules={[Zoom, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <figure>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="business card" />
            <figcaption>Business</figcaption>
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <figure>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="education card" />
            <figcaption>Education</figcaption>
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <figure>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="healthcare card" />
            <figcaption>Healtchare</figcaption>
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <figure>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="dientes card" />
            <figcaption>Dientes</figcaption>
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <figure>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="example card" />
            <figcaption>Dientes</figcaption>
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <figure>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="dentista card" />
            <figcaption>Dientes</figcaption>
          </figure>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

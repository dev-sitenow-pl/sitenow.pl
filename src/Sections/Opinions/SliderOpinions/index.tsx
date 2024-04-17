import { SliderOpinionsItem } from './SliderOpinionsItem'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

import opinionData from '../../../data/Opinions.json'

import 'swiper/css';
import 'swiper/css/pagination';


const SliderOpinions = () => {
  return <div className="flex-row">
    <div className="colflex-12">
      <div className="feedback__slider-box">
        <Swiper
          rewind={true}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            550: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {opinionData.map(slider => (
            <SwiperSlide>
              <SliderOpinionsItem opinionData={slider} />
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </div>
  </div>
}

export { SliderOpinions };
import { SliderOpinionsItem } from './SliderOpinionsItem'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const opinionData = [
  {
    text: 'Sebastian to niezawodny programista frontendowy, tworzący estetyczne i funkcjonalne podstrony i Landing Page dla takich marek, jak Froneri, Beko i BJK. Jego umiejętności, sprawna współpraca zespołowa i innowacyjność z pewnością zasługują na uznanie.',
    author: 'Marek D.',
    brandName: 'Agencja 4all',
  },
  {
    text: 'Przyjazne rozwiązania UX, imponująca wiedza i stała potrzeba bycia na bieżąco to cechy, które najlepiej określają pracę Sebastiana. Jego zaangażowanie oraz pełny profesjonalizm wpłynęły na dobrą funkcjonalność portalu kooperatywni.pl.',
    author: 'Ewa W.-D.',
    brandName: 'OrganicBe',
  },
  {
    text: 'Praca z Sebastianem jest przyjemnością. To profesjonalista, który tworzy niezawodne rozwiązania UX, dzięki którym strona zyskuje na estetyce i przejrzystości. Sebastian jest kreatywny, godny zaufania i zawsze terminowy. Polecamy z czystym sumieniem.',
    author: 'Piotr W.',
    brandName: 'E-manufactura',
  },
]

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
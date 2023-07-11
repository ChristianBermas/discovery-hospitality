import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// image
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

const Slider = () => {
  const images = [image1, image2, image3];

  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        pagination={{ dynamicBullets: true }}
        modules={[Navigation, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;

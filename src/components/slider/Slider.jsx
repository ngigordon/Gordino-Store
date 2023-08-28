import React from "react";
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper";
// importing swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {SliderProducts} from '../../data/products'

const Slider = () => {
    return (
        <div className="slider_cont">
            <Swiper
                modules={[Pagination, Navigation]}
                className="xidon_swiper"
                loopFillGroupWithBlank={true}
                navigation={true}
                slidesPerView={3}
                spaceBetween={40}
                slidePerGroup={1}
                loop={true}>
                {SliderProducts.map((slide, i) => {
                    return (
                        <SwiperSlide>
                            <div className="left_s">
                                <div className="name">
                                    <span>{slide.name}</span>
                                    <span>{slide.detail}</span>
                                </div>
                            <span>CFA{slide.price}</span>
                            <div>Shop Now</div>
                            </div>
                            <img src={slide.img} alt="product" className="img_p" />
                        </SwiperSlide>
                    )
                }

                
               )}
                
                
            </Swiper> 
      </div>
  )
};

export default Slider;

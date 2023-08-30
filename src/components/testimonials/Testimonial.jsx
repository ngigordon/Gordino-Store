import React from "react";
import css from './testimonial.module.css'
import Hero from '../../assets/testimonialHero.png'
import { Swiper, SwiperSlide } from "swiper/react";
import {TestimonialsData} from '../../data/testimonials'

const Testimonial = () => {
    return <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>

            <span>Top Rated</span>
            <span>Buy from us and we are going to treate you accordingly and make sure you buy the best</span>
            </div>

        <img src={Hero} alt="testimonial" />

        <div className={css.container}>
            <span>100k</span>
            <span>Happy Customers with us</span>
        </div>
        </div>

        {/* review section */}
        <div className={css.review}>Review</div>
        <div className={css.carousel}>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className={css.tcarousel}
                breakpoints={{
                    856:{slidesPerView:3},
                    640:{slidesPerView:2},
                    0:{slidesPerView:1}
                }}
            >
                {
                    TestimonialsData.map((testi,i) => (
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                <img src={testi.image} alt="" />
                                <span>{testi.comment}</span>
                                <hr />
                                <span>{ testi.name}</span>
                            </div>
                    </SwiperSlide>
                ))    
}
            </Swiper>
        </div>
  </div>;
};

export default Testimonial;

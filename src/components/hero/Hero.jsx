import React from "react";
import css from './Hero.module.css'
import heroIMG from '../../assets/hero.png'

import {RiShoppingBagFill,} from 'react-icons/ri'
import {FaArrowRight} from 'react-icons/fa'

const Hero = () => {
    return (
         <div className={css.container}>
            {/* left side  */}
            <div className={css.h_side}>
                <span className={css.text1}>skin production Cream</span>
                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>my name is Ngi Nganjo Gordon and I am an aspiring professional footbaler, am looking forward to become a professional baller</span>
                </div>
            </div>
            {/* midle */}
            <div className={css.wrapper}>
                <div className={css.bluecircle}></div>
                <img src={heroIMG} alt="Hero section"  />
                <div className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best signup offers</span>
                        <div>
                            <FaArrowRight/>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* right side */}
            <div className={css.h_side}>
                <div className={css.trafic}>
                    <span>1.5m</span>
                    <span>Monthly traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
   
};

export default Hero;

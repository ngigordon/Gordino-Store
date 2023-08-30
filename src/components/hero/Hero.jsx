import React from "react";
import css from './Hero.module.css'
import heroIMG from '../../assets/hero.png'

import {RiShoppingBagFill,} from 'react-icons/ri'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from "framer-motion";

const Hero = () => {
    const transition = {duration:3,type:"spring"}
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
                {/* bluecircle */}
                <motion.div
                    initial={{ bottom: "2rem" }}
                    whileInView={{bottom:"0rem"}}
                    className={css.bluecircle}
                transition={transition}
                ></motion.div>

                {/* Hero Image */}
                <motion.img
                    transition={transition}
                    initial={{bottom:"-2rem"}}
                    whileInView={{bottom:"0rem"}}
                    src={heroIMG} alt="Hero section" />
                

                {/* cart div animating */}
                <motion.div
                    transition={transition}
                    initial={{right:"4%"}}
                    whileInView={{right:"2%"}}
                    className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best signup offers</span>
                        <div>
                            <FaArrowRight/>
                        </div>
                    </div>
                </motion.div>
                
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

import React from "react";
import css from './Virtual.module.css'
import shade from '../../assets/shade.png'
import ReactCompareImage from "react-compare-image";
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Virtual = () => {
    return <div className={css.Virtuals}>
        <div className={css.left}>
            <span> Try-On Our Virtuals</span>
            <span>Bringing to you reliable services</span>
            <img src={shade} alt="" />
            <span>Right-On</span>
        </div>
        <div className={css.right}>
            <div className={css.wrapper}>

            <ReactCompareImage leftImage={ Before} rightImage={After} />
            </div>
        </div>
  </div>;
};

export default Virtual;

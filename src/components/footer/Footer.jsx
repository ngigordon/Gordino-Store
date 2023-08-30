import React from "react";
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UserIcon,LinkIcon} from '@heroicons/react/outline' 

const Footer = () => {
    return <div className={css.footer_wrapper}>
        <hr />
        <div className={css.cfooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Gordino</span>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>Maison Damas, Yaounde, Cameroon</span>
                    </span>
                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon} />
                        <span>+237673940346</span>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon} />
                        <span>ngigordon4@gmail.com</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        <span>Sign in</span>
                    </span>
                   
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UserIcon className={css.icon} />
                        <span>About Us</span>
                    </span>
                   
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon} />
                        <span>Safety, Privacy & Terms</span>
                    </span>
                   
                </div>
            </div>

        </div>
        <div className={css.copyright}>
            <span>Copyright 2023 by Gordino, Inc</span>
            <span>All Right Reserve</span>
        </div>
  </div>;
};

export default Footer;

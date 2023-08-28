import React from "react";
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import { CgShoppingCart } from "react-icons/cg";
const Header = () => {
    return (
    <div className={css.container}>
            <div className={css.logo}>
                <img src={logo} alt="" />
                <span>Gordino</span>
            </div>
            <div className={css.right}>
                    <div className={css.menu}>
                    <ul className={css.menu}>
                        <li>Collection</li>
                        <li>Sales</li>
                        <li>New</li>
                        <li>Brands</li>
                        <li>Eng</li>
                        </ul>
                    </div>
                    <input type="text" placeholder="search" className={css.search}></input>
                <CgShoppingCart className={ css.cart} />
            </div>
    </div>
    )
}

export default Header;

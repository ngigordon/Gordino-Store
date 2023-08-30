import React, { useState } from "react";
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import { CgShoppingCart } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
const Header = () => {
    const [ShowMenu, setShowMenu] = useState(true)
    const toggleMenu=() => {
        setShowMenu((ShowMenu)=>!ShowMenu)
    }
    return (
    <div className={css.container}>
            <div className={css.logo}>
                <img src={logo} alt="" />
                <span>Gordino</span>
            </div>
            <div className={css.right}>
                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars/>
                </div>
                    <ul className={css.menu} style={{display:ShowMenu?"inherit":'none'}}>
                        <li>Collection</li>
                        <li>Sales</li>
                        <li>New</li>
                        <li>Brands</li>
                        <li>Eng</li>
                        </ul>
                  
                    <input type="text" placeholder="search" className={css.search}></input>
                <CgShoppingCart className={ css.cart} />
            </div>
    </div>
    )
}

export default Header;

import React from "react";
import css from './Products.module.css'
import plane from '../../assets/plane.png'
import { ProductsData } from "../../data/products";
import { useState } from "react";
import {useAutoAnimate} from '@formkit/auto-animate/react'
const Products = () => {
    const [MenuProduct, setMenuProduct] = useState(ProductsData)
    const [parent]= useAutoAnimate()
    const filter = (type) => { 
        setMenuProduct(ProductsData.filter((product) => 
            product.type === type
        ))
     }
    return <div className={css.container}>
        <img src={plane} alt="products" />
        <h1>OUR FEATURED PRODUCTS</h1>
        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setMenuProduct(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditional</li>
                <li onClick={()=>filter("foundation")}>Foundation</li>
            </ul>
            <div className={css.lists} ref={parent}>
                {
                    MenuProduct.map((item, i) => (
                        <div className={css.product}>
                            <div className="left_s">
                                <div className="name">
                                    <span>{item.name}</span>
                                    <span>{item.detail}</span>
                                   
                                </div>
                                <span>CFA{item.price}</span>
                                <div>Show Now</div>
                            </div>
                            <img src={item.img} alt="" className="img_p" />
                        </div>
                    ))
                }

            </div>
        </div>

  </div>;
};

export default Products;

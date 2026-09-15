import React from 'react'
import './Css/ProductCard.css'
import { IoCart } from "react-icons/io5";

const ProductCard = ({imageUrl}) => {
  return (
    <>
        <div className='mainnn'>
            <div className="ProductCard-main-outer">
                <button>25%</button>
                <div className="ProductCard-image">
                    <img src={imageUrl}/>
                </div>
                <div className="ProductCard-text">
                    <p>Flowers In Vase</p>
                    <div className='ProductCard-text-pc'>
                        <p>₹1649 <del>₹1699</del></p>
                        <button><IoCart /></button>
                    </div>
                    <p className='product-card-text-p'>Earliest Delivery:<span> Today</span></p>
                    <div className="star-reviews">
                        <p><button>4.6</button>⭐⭐⭐⭐⭐</p>
                        <p>7490 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard
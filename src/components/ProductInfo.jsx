import React from 'react'
import '@styles/ProductInfo.scss'
import roundShelf from '@images/round-shelf.webp'
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductInfo = () => {
    return (
        <>
            <img src={roundShelf} alt="" class="product-img" />
            <div className="product-info">
                <div>
                    <p>$ 120,00</p>
                    <p>Round shelf</p>
                </div>
                <figure>
                    <img src={addToCart} alt="" />
                </figure>
            </div>
        </>
    );
}

export default ProductInfo;
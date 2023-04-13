import React from 'react'
import '@styles/ShoppingCartItem.scss'
import roundShelf from '@images/round-shelf.webp'
import closeButton from '@icons/icon_close.png'

const ShoppingCartItem = () => {
    return (
        <div className="shopping-cart">
                <figure>
                    <img src={roundShelf} alt=""/>
                </figure>
                <p>Round shelf</p>
                <p>$ 120,00</p>
                <img src={closeButton} alt="close"/>
            </div>
    );
}

export default ShoppingCartItem;
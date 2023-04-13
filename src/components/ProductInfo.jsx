import React from 'react';
import '@styles/ProductInfo.scss';
import Image from 'next/image';
import roundShelf from '@images/round-shelf.webp';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <>
      <Image src={roundShelf} alt="" class="product-img" />
      <div className="product-info">
        <div>
          <p>$ 120,00</p>
          <p>Round shelf</p>
        </div>
        <figure>
          <Image src={addToCart} alt="" />
        </figure>
      </div>
    </>
  );
};

export default ProductInfo;

import React from 'react';
import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import closeButton from '@icons/icon_close.png';
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <Image src={closeButton} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;

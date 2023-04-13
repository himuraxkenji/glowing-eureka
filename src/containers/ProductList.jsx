import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const { products, loading } = useGetProducts(API)

	return (
		<section className="main-container">
			{!loading ?			
			<div className="ProductList">
				{products.map(product => <ProductItem product={product} key={product.id} />)}
			</div>
			:
			<div>
				Espere, se estan cargando los productos...
			</div>
			}
		</section>
	);
}

export default ProductList;
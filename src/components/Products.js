import React, {useContext} from 'react';
import ProductContext from '../contexts/ProductContext';
// Components
import Product from './Product';

const Products = () => {
	const { products, addItem, cart, removeItem } = useContext(ProductContext);
console.log(cart)

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
					cart={cart}
					removeItem={removeItem}
					id={product.id}
				/>
			))}
		</div>
	);
};

export default Products;

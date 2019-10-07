import React from 'react';

const Product = props => {
	const alreadyAdded = props.cart.find(el => el.id === props.product.id);
	const onClickHandler = alreadyAdded ? ()=>props.removeItem(props.id) : ()=>props.addItem(props.product);
	const clickText = alreadyAdded ? "Remove from cart" :"Add to cart";
	
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={onClickHandler}>
				{clickText}
			</button>
		</div>
	);
};

export default Product;

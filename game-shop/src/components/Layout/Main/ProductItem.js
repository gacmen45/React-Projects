import { useContext } from 'react'
import { Link } from 'react-router-dom'

import classes from './ProductItem.module.scss'
import CartContext from '../../../store/cart-context'

import ProductCartButton from './ProductCartButton'

const ProductItem = props => {

const scroll = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}


	const cartCtx = useContext(CartContext)
	const addToCartHandler = amount => {
		cartCtx.addItem({
			id: props.product.id,
			name: props.product.name,
			amount: amount,
			price: props.product.price,
			photo: props.product.gallery[0],
		})
	}

	return (
				<Link onClick={scroll} to={`${props.product.id}`} style={{ textDecoration: 'none' }}>
		<div className={classes.product}>
				<h2 className={classes['product__name']}>{props.product.name}</h2>

				<img className={classes['product__img']} src={props.product.gallery[0]} />

				<p className={classes['product__text']}>
					{props.product.producent}{props.product.developer}</p>
				

				<div className={classes['product__price']}>
					<p className={classes['product__price-txt']}>{props.product.price} zł</p>
					<div className={classes['product__price-btn']}>
						<ProductCartButton onAddToCart={addToCartHandler} showCartModalHandler={props.showCartModalHandler} />
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductItem

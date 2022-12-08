import { useContext } from 'react'
import CartContext from '../../store/cart-context'

import CartItem from './CartItem'

import Wrapper from './../UI/Wrapper'
import classes from './Cart.module.scss'

const Cart = props => {
	const cartCtx = useContext(CartContext)

	const totalAmount = `${cartCtx.totalAmount.toFixed(2)}zł`
	const hasItems = cartCtx.items.length > 0

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0)

	const cartItemAddHandler = item => {
		cartCtx.addItem({ ...item, amount: 1 })
	}

	const cartItemRemoveHandler = id => {
		cartCtx.removeItem(id)
	}
	const cartItemDeleteHandler = id => {
		cartCtx.deleteItem(id)
	}

	const cartItems = (
		<ul>
			{cartCtx.items.map(item => (
				<CartItem
					item={item}
					key={item.id}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
					onDelete={cartItemDeleteHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	)

	return (
		<Wrapper>
			<div className={classes.cart}>
				<h2>Cart {hasItems && <span>({numberOfCartItems})</span>}</h2>
				{!hasItems && <p className={classes['cart-info']}>no products in cart</p>}
				{cartItems}
				<div className={classes['cart__amount']}>
					<p>Total Amount: </p>
					<span>{totalAmount}</span>
					{hasItems && <button className={classes['cart-btn']}>Order</button>}
				</div>
			</div>
		</Wrapper>
	)
}

export default Cart

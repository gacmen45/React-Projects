import { useContext } from 'react'
import CartContext from '../../store/cart-context'

import classes from './CartModal.module.scss'

import Modal from '../UI/Modal'
import CartModalForm from './CartModalForm'

import { Link } from 'react-router-dom'

const CartModal = props => {
	const cartCtx = useContext(CartContext)

	const cartItemAddHandler = item => {
		console.log(cartCtx)
		cartCtx.addItem({ ...item, amount: 1 })
	}

	const cartItemRemoveHandler = id => {
		if (cartCtx.currentItem.amount === 1) {
			return
		} else {
			cartCtx.removeItem(id)
		}
	}

	const totalPrice = (cartCtx.currentItem.price * cartCtx.currentItem.amount).toFixed(2)

	return (
		<Modal hideCartModalHandler={props.hideCartModalHandler} className={classes['cart-modal']}>
			<h3 className={classes['cart-modal__header']}>ADD PRODUCT TO CART</h3>
			<div className={classes['cart-modal__item']}>
				<div className={classes['cart-modal__product']}>
					<img className={classes['cart-modal__product-img']} src={cartCtx.currentItem.photo} alt='' />
					<p className={classes['cart-modal__product-name']}> {cartCtx.currentItem.name}</p>
				</div>
					<CartModalForm
						onRemove={cartItemRemoveHandler.bind(null, cartCtx.currentItem.id)}
						onAdd={cartItemAddHandler.bind(null, cartCtx.currentItem)}
						hideCartModalHandler={props.hideCartModalHandler}
						totalAmount={cartCtx.currentItem.amount}
						totalPrice={totalPrice}
					/>
			</div>

			<div className={classes['cart-modal__btns']}>
				<button className={classes['cart-modal__btns-btn']} onClick={props.hideCartModalHandler}>
					add and continue{' '}
				</button>
				<Link to='cart'>
					<button className={classes['cart-modal__btns-btn']} onClick={props.hideCartModalHandler}>
						add and go to cart
					</button>
				</Link>
			</div>
		</Modal>
	)
}

export default CartModal

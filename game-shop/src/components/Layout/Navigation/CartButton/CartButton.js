import { useContext } from 'react'
import CartContext from '../../../../store/cart-context'
import { useNavigate } from 'react-router-dom'

import {cartIcon} from '../../../../assets/fontAwesomeIcons'

import classes from './CartButton.module.scss'

const CartButton = props => {

	let navigate = useNavigate()
	const routeChange = () => {
		let path = 'cart'
		navigate(path)
	}

	const cartCtx = useContext(CartContext)

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0)

	return (
		<button className={classes['cart-btn']} onClick={routeChange}>
			<span>{cartIcon}</span>
				<span className={classes['cart-btn__items']}>{numberOfCartItems}</span>
		</button>
	)
}

export default CartButton

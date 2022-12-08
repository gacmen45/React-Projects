import { Link } from 'react-router-dom'

import { trashIcon } from '../../assets/fontAwesomeIcons'

import classes from './CartItem.module.scss'


const CartItem = props => {

	const newPrice = (props.item.price * props.item.amount).toFixed(2)
	return (
		<li className={classes['cart-item']}>
			<Link to={`/${props.item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
				<div className={classes['cart-item__box']}>
					<img className={classes['cart-item__box-img']} src={props.item.photo} alt='' />
					<div className={classes['cart-item__box-txt']}>
						<h3>{props.item.name}</h3>
					</div>
				</div>
			</Link>
			<div className={classes['cart-item__summary']}>
				<div className={classes['cart-item__summary-box']}>
			<button className={`${classes['cart-item__summary__btns-btn']} ${classes['cart-item__summary__btns-btn--trash']}`} onClick={props.onDelete}>{trashIcon}</button>
				<p className={classes['cart-item__summary-price']}>{newPrice}zł</p>
				</div>
				<div className={classes['cart-item__summary__btns']}>
					
					<button className={classes['cart-item__summary__btns-btn']} onClick={props.onRemove}>
						−
					</button>
					<p className={classes['cart-item__summary__btns-amount']}>{props.item.amount}</p>
					<button className={classes['cart-item__summary__btns-btn']} onClick={props.onAdd}>
						+
					</button>
				</div>
			</div>
		</li>
	)
}

export default CartItem

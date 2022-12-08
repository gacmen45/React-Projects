import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Input from '../UI/Input'

import classes from './CartModalForm.module.scss'

const CartModalForm = props => {
	return (
			<div className={classes['form']} >
					<div className={classes['form__box']}>
				<button className={classes['form__btn']} onClick={props.onRemove}>−</button>
				<p className={classes['form__amount']}>{props.totalAmount }</p>
				<button className={classes['form__btn']} onClick={props.onAdd}>+</button>
				</div>
				<p className={classes['form__price']}>{props.totalPrice}zł</p>
			</div>

	)
}

export default CartModalForm

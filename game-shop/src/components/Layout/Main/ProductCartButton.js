import { cartIconHandler } from '../../../assets/fontAwesomeIcons'

import classes from './ProductCartButton.module.scss'

const ProductItemActions = (props) => {

	const submitHandler = (event) => {
	  event.preventDefault();
  
	  const enteredAmount = 1;
  
  
	  props.onAddToCart(enteredAmount);
	};

	const onClick = e => {
		submitHandler(e)
		props.showCartModalHandler()
	}

	return <div onClick={onClick} className={classes['cart-btn']}>{cartIconHandler}</div>
	
;
}

export default ProductItemActions
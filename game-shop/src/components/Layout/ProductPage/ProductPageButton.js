import classes from './ProductPageButton.module.scss'
const ProductPageButton = (props) => {


	const submitHandler = (event) => {
	  event.preventDefault();
  
	  const enteredAmount = 1;
  
  
	  props.onAddToCart(enteredAmount);
	};

	const onClick = e => {
		submitHandler(e)
		props.showCartModalHandler()
	}

	
	

	return <button className={classes.btn} onClick={onClick}>ADD TO CART</button>
	
;
}

export default ProductPageButton
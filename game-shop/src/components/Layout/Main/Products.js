import PRODUCT_LIST from '../../../data/PRODUCT_LIST'
import Wrapper from '../../UI/Wrapper'

import ProductItem from './ProductItem'

import classes from './Products.module.scss'

const Products = props => {
	const filteredProducts = PRODUCT_LIST.filter(product => {
		if (props.changeCategory === 'all') {
			return product
		}

		return product.category === props.changeCategory
	})

	const productListFiltered = filteredProducts.map(product => (
		<ProductItem product={product} key={product.id} id={product.id} showCartModalHandler={props.showCartModalHandler} />
	))

	return (
		<Wrapper>
			<div className={classes.container}>{productListFiltered}</div>
		</Wrapper>
	)
}
export default Products

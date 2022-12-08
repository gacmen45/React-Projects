import { Link } from 'react-router-dom'

import CATEGORY_LIST from '../../../../data/CATEGORY_LIST'

import classes from './NavigationItems.module.scss'

const NavigationItems = props => {
	const changeCategoryHandler = e => {
		props.onChangeCategory(e.currentTarget.dataset.id)
		window.scrollTo({ top: 0, behavior: 'smooth' })
		props.closeNav(false)
	}

	return (
		<div>
			<ul className={`${classes.categories}  ${props.mobile ? classes.active : ''}`}>
				{CATEGORY_LIST.map((category, index) => (
					<Link to={'/'} className={classes['categories__item']}>
						<li className={classes['categories__item']} onClick={changeCategoryHandler} data-id={category} key={index}>
							{category}
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default NavigationItems

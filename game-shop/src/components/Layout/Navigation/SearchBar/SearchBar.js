import { useState } from 'react'
import { Link } from 'react-router-dom'

import PRODUCT_LIST from '../../../../data/PRODUCT_LIST'
import { searchIcon } from '../../../../assets/fontAwesomeIcons'

import classes from './SearchBar.module.scss'

const SearchBar = () => {

	const [inputText, setInputText] = useState('')
	const [isActive, setIsActive] = useState(false)

	const inputHandler = e => {
		const text = e.target.value.toLowerCase()
		setInputText(text)
	}

	const filteredData = PRODUCT_LIST.filter(el => {
		const findByName = el?.name?.trim().toLowerCase().includes(inputText);
		const findByPlatform = el?.platform?.trim().toLowerCase().includes(inputText);

		if (inputText === '') {
			return null
		} else {
			return findByName || findByPlatform
		}
	})
	

	const handleClick = () => {
		setIsActive(current => !current)
		setInputText('')
	}

	return (
		<div className={classes['search-bar']}>
			<div className={isActive ? classes.active : classes['search-bar__input']}>
				<input  type='text' value={inputText} onChange={inputHandler} placeholder='Search in shop...' />
				<div className={classes.result}>
					<ul className={classes['result__list']}>
						{filteredData.map((item,index) => (
							<li key={index} onClick={handleClick}>
								<Link to={item.id} style={{ textDecoration: 'none' , color:'black'}}>
									<div  className={classes['result__list-item']}>
										<img src={item.gallery[0]} alt=''/>
										<p>{item.name}</p>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
				<button className={classes['search-btn']} onClick={handleClick}>
					{searchIcon}
				</button>
		</div>
	)
}

export default SearchBar

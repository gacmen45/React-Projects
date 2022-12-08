import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {logo} from '../../../assets/fontAwesomeIcons'
import { Squash as Hamburger } from 'hamburger-react'
import Wrapper from '../../UI/Wrapper'

import NavigationItems from './NavigationItems/NavigationItems'
import CartButton from './CartButton/CartButton'
import SearchBar from './SearchBar/SearchBar'

import classes from './Navigation.module.scss'

const Navigation = props => {
	const [isOpen, setOpen] = useState(false)
	const [matchesLG, setMatchesLG] = useState(window.matchMedia('(min-width: 992px)').matches)
	const [matchesMD, setMatchesMD] = useState(window.matchMedia('(min-width: 576px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 992px)').addEventListener('change', e => setMatchesLG(e.matches))
	}, [])
	useEffect(() => {
		window.matchMedia('(min-width: 576px)').addEventListener('change', e => setMatchesMD(e.matches))
	}, [])

	const changeCategory = target => {
		props.changeCategory(target)
	}

	return (
		<Wrapper>
			<nav className={classes.nav}>
				<div className={classes['nav__box']}>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<div className={classes['nav__header']}>
							{logo}
							<h1 className={classes['nav__header-heading']}>GameShop</h1>
						</div>
					</Link>
					<NavigationItems onChangeCategory={changeCategory} mobile={isOpen} closeNav={setOpen} />
				</div>
				<div className={classes['nav__box']}>
					{matchesMD && <SearchBar />}
					<CartButton showCartHandler={props.showCartHandler} />
					{!matchesLG && <Hamburger toggled={isOpen} toggle={setOpen}></Hamburger>}
				</div>
				{!matchesMD && (
					<div className={classes['nav__search-bar--mobile']}>
						<SearchBar />
					</div>
				)}
			</nav>
		</Wrapper>
	)
}

export default Navigation

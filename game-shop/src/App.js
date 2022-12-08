

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navigation from './components/Layout/Navigation/Navigation'
import Products from './components/Layout/Main/Products'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'
import CartModal from './components/CartModal/CartModal'
import ProductPage from './components/Layout/ProductPage/ProductPage'
import Footer from './components/Layout/Footer/Footer'

function App() {
	const [category, setCategory] = useState('all')

	//CART MODAl
	const [cartModalIsShown, setCartModalIsShown] = useState(false)
	const showCartModalHandler = () => {
		setCartModalIsShown(true)
	}
	const hideCartModalHandler = () => {
		setCartModalIsShown(false)
	}

	return (
		<CartProvider>
			<Navigation changeCategory={setCategory} />
			{cartModalIsShown && <CartModal hideCartModalHandler={hideCartModalHandler} />}
			<Routes>
				<Route
					path='/'
					element={<Products showCartModalHandler={showCartModalHandler} changeCategory={category} />}></Route>
				<Route path=':id' element={<ProductPage showCartModalHandler={showCartModalHandler} />}></Route>
				<Route path='cart' element={<Cart />}></Route>
			</Routes>
			<Footer/>
		</CartProvider>
	)
}

export default App

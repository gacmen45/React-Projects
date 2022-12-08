import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
	items: [],
	totalAmount: 0,
	current:{}
}

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

		const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
		const existingCartItem = state.items[existingCartItemIndex]
		let updatedItems
		let currentItem

		if (existingCartItem) {
			const updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount, }
			updatedItems = [...state.items]
			updatedItems[existingCartItemIndex] = updatedItem
			currentItem = updatedItem
		}else {
			updatedItems = state.items.concat(action.item)
			currentItem = action.item
			console.log(updatedItems)
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
			currentItem:currentItem
			
		}
	}
	if (action.type === 'REMOVE') {
		const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
		const existingItem = state.items[existingCartItemIndex]
		const updatedTotalAmount = state.totalAmount - existingItem.price
		let updatedItems
		let currentItem
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== action.id)
		} else {
      const updatedItem = {...existingItem,amount:existingItem.amount -1}
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
	  currentItem=updatedItem
	  
		}

    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount,
	  currentItem:currentItem
    }
	}
	//TEST
	if (action.type === 'DELETE'){
		const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
		const existingItem = state.items[existingCartItemIndex]
		const updatedTotalAmount = state.totalAmount - (existingItem.price*existingItem.amount)
		let updatedItems
		// let currentItem
		updatedItems = state.items.filter(item => item.id !== action.id)
		return {
			items:updatedItems,
			totalAmount:updatedTotalAmount,
			// currentItem:currentItem
		  }
	}
	
	

return defaultCartState
}

const CartProvider = props => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

	const addItemToCartHandler = item => {
		dispatchCartAction({ type: 'ADD', item: item })
	}

	const removeItemFromCartHandler = id => {
		dispatchCartAction({ type: 'REMOVE', id: id })
	}
	const deleteItemFromCartHandler = id => {
		dispatchCartAction({ type: 'DELETE', id: id })
	}



	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		deleteItem: deleteItemFromCartHandler,
		currentItem:cartState.currentItem
	}

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider

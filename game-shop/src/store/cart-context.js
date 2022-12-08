import React from "react";


const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    currentItem:{}
})

export default CartContext
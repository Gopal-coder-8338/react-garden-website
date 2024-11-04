import { createContext, useContext, useState } from "react"


const CartContext = createContext();
export function CartProvider({children}) {

    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        // setCartCount(cartCount + 1);    
        setCartItems((prevItem) => [...prevItem, item]);
    };
    const cartCount = cartItems.length;

    return(
        <CartContext.Provider value={{cartItems ,addItemToCart, cartCount , setCartItems}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
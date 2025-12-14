import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";




export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, boolean);


export const addItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems = addCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}


export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}


export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}






const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
    if (existingCartItem.quantity === 1) {
        // return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
        return cartItems;
    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}



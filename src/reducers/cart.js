import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EMPTY_CART,
    INCREMENT_QTY,
    DECREMENT_QTY } from "../constants/ActionTypes";

function getPricePerSize(item, size) {
    if(item.pricePerSize) {
        let selItem = item.pricePerSize.filter((value, index) => value.size === size);
        return selItem[0].price;
    }
    return item.price;
}

export default function cartReducer(state = {
    cart: []
}, action) {

    switch (action.type) {
        case ADD_TO_CART:
            const productId = action.product.id 
            //console.log("action.variant ", action);
            const price = getPricePerSize(action.product, action.size);
            let foundCartItem = -1;
            //console.log(product.variants.filter((variant) => (variant.flavour === action.variant)))
            if(action.variant) {
                foundCartItem = state.cart.findIndex(
                    product => product.id === productId && 
                    product.choosenSize === action.size && 
                    product.flavour === action.variant)
            } else {
                foundCartItem = state.cart.findIndex(
                    product => product.id === productId && 
                    product.choosenSize === action.size)
            }
            //console.log("foundCartItem ", foundCartItem);
            if (foundCartItem !== -1) {
                //console.log("here");
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === productId 
                            && product.choosenSize === action.size 
                            && product.flavour === action.variant) {
                        //console.log('price: '+product.price+'Qty: '+product.qty)
                        
                        cartAcc.push({ 
                            ...product, qty: product.qty+action.qty, 
                            sum: (price - (price*product.discount/100))*(product.qty+action.qty), 
                            choosenSize:action.size, choosenPrice:price, flavour:action.variant 
                        }) // Increment qty
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }
            //console.log("here ", state.cart)
            return { ...state, 
                        cart: [...state.cart, 
                            { ...action.product, 
                                qty: action.qty, 
                                sum: (price-(price*action.product.discount/100))*action.qty, 
                                choosenSize:action.size, choosenPrice:price, 
                                flavour:action.variant }] }

        case DECREMENT_QTY:
            console.log("action ", action);
            if (state.cart.findIndex(
                product => 
                    product.id === action.productId && 
                    product.choosenSize === action.size &&
                    product.flavour === action.variant) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === action.productId && 
                        product.choosenSize === action.size && 
                        product.flavour === action.variant && 
                        product.qty > 1) {
                        const price = getPricePerSize(product, action.size);
                        cartAcc.push({ ...product, qty: product.qty-1, sum: (price - (price*product.discount/100))*(product.qty-1) }) // Decrement qty
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }

            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: action.product.price*action.qty }] }

        case REMOVE_FROM_CART:
            //console.log("action.product_id ", action)
            return {
                cart: state.cart.filter(id => id !== action.product_id)
            }

        case EMPTY_CART:
            //console.log("here in empty cart");
            return { cart:[]}   

        default:
    }
    return state;
}

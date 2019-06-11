import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QTY,
    DECREMENT_QTY } from "../constants/ActionTypes";

function getPricePerSize(item, size) {
    //console.log("item ", item)
    //console.log("size ", size)
    if(item.pricePerSize) {
        let selItem = item.pricePerSize.filter((value, index) => value.size === size);
        //console.log("sel Item ", selItem)
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
            //console.log("action.product ", action);
            const price = getPricePerSize(action.product, action.size);
            //console.log("state.cart ", state.cart);
            if (state.cart.findIndex(product => product.id === productId && product.choosenSize === action.size) !== -1) {
                //console.log("here");
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === productId && product.choosenSize === action.size) {
                        //console.log('price: '+product.price+'Qty: '+product.qty)
                        
                        cartAcc.push({ ...product, qty: product.qty+1, sum: (price - (price*product.discount/100))*(product.qty+1), choosenSize:action.size, choosenPrice:price }) // Increment qty
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }
            //console.log("here11")
            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: (price-(price*action.product.discount/100))*action.qty, choosenSize:action.size, choosenPrice:price }] }

        case DECREMENT_QTY:
            
            if (state.cart.findIndex(product => product.id === action.productId && product.choosenSize === action.size) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === action.productId && product.choosenSize === action.size && product.qty > 1) {
                        //console.log('action.size: ', action.size);
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
            return {
                cart: state.cart.filter(id => id !== action.product_id)
            }

        default:
    }
    return state;
}

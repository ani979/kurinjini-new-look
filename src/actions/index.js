import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import store from "../store";
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const fetchProductsBegin = () => ({
    type: types.FETCH_PRODUCTS_BEGIN
});



export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    dispatch(fetchProductsBegin());
    shop.getProducts(products => {
        dispatch(receiveProducts(products));
        return products;
    })
}
export const fetchSingleProduct = productId => ({
    type: types.FETCH_SINGLE_PRODUCT,
    productId
})




//it seems that I should probably use this as the basis for "Cart"
export const addToCart = (product,qty, size) => (dispatch) => {
    toast.success("Item Added to Cart");
        dispatch(addToCartUnsafe(product, qty, size))

}
export const addToCartAndRemoveWishlist = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty));
    dispatch(removeFromWishlist(product));
}
export const addToCartUnsafe = (product, qty, size) => ({
    type: types.ADD_TO_CART,
    product,
    qty,
    size
});
export const removeFromCart = product_id => ({
    type: types.REMOVE_FROM_CART,
    product_id
});
export const incrementQty = (product,qty, size) => (dispatch) => {
    dispatch(addToCartUnsafe(product, qty, size))

}
export const decrementQty = (productId,size) => ({
    type: types.DECREMENT_QTY,
    productId,
    size
});



//it seems that I should probably use this as the basis for "Wishlist"
export const addToWishlist = (product) => (dispatch) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))

}
export const addToWishlistUnsafe = (product) => ({
    type: types.ADD_TO_WISHLIST,
    product
});
export const removeFromWishlist = product_id => ({
    type: types.REMOVE_FROM_WISHLIST,
    product_id
});


//Compare Products
export const addToCompare = (product) => (dispatch) => {
    toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))

}
export const addToCompareUnsafe= (product) => ({
    type: types.ADD_TO_COMPARE,
    product
});
export const removeFromCompare = product_id => ({
    type: types.REMOVE_FROM_COMPARE,
    product_id
});


// Filters
export const filterGoodFor = (goodFor) => ({
    type: types.FILTER_GOODFOR,
    goodFor
});
// Filters
export const filterType = (type) => ({
    type: types.FILTER_TYPE,
    type
});
export const filterCategory = (category) => ({
    type: types.FILTER_CATEGORY,
    category
});
export const filterSubCategory = (subCategory) => ({
    type: types.FILTER_SUBCATEGORY,
    subCategory
});
export const filterSolutionFor = (tags) => ({
    type: types.FILTER_SOLUTIONFOR,
    tags
});
export const filterPrice = (value) => ({
    type: types.FILTER_PRICE,
    value
});
export const filterSort = (sort_by) => ({
    type: types.SORT_BY,
    sort_by
});


// Currency
export const changeCurrency = (symbol) => ({
    type: types.CHANGE_CURRENCY,
    symbol
});


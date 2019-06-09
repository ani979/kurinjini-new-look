import * as types from '../constants/ActionTypes'


const filtersReducerDefaultState = {
    tags: [],
    goodFor: [],
    value: { min: 250, max: 950 },
    sortBy: "Newest",
    category:[],
    subCategory:[]
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    // console.log('Action Result');
    //console.log(action);
    switch (action.type) {
        case types.FILTER_GOODFOR:
            return {
                ...state,
                goodFor: action.goodFor
            };
        case types.FILTER_SOLUTIONFOR:
            return {
                ...state,
                tags: action.tags
            };
        case types.FILTER_PRICE:
            return {
                ...state,
                value: {min: action.value.value.min, max: action.value.value.max }
            };
        case types.SORT_BY:
            return {
                ...state,
                sortBy: action.sort_by
            };
        case types.FILTER_CATEGORY:
        return {
            ...state,
            category: action.category
        };
        case types.FILTER_SUBCATEGORY:
        return {
            ...state,
            subCategory: action.subCategory
        };
        default:
            return state;
    }
}

export default filtersReducer;
import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from "../actions/types";

const initialStore = {
    data: [],
    productsByCategory: [],
    isFetching: false,
    error: null
}

export default (state = initialStore, action) => {
    console.log("productReducer running.");
    console.log("Action: ", action);
    console.log("State: ", state);
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.products,
                productsByCategory: action.payload.productsByCategory
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}
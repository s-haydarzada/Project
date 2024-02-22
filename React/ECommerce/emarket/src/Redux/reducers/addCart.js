import { POST_ADDED, POST_REMOVED } from "../actions/ActionTypes/index";
import {data} from "../../data"

const initialState = {
    dataList:data,
    basket: [],
    count: 0,
    isProductExists: false,
};

const addCarts = (state = initialState, action) => {
    switch (action.type) {
        case POST_ADDED:
            return {...state,basket:[...state.basket,action.payload]}
            // const bag = [...state.basket];
            // const _addedProduct = action.payload;
            // const _isProductExists = state.basket?.some((v) => _addedProduct.id === v.id);
            // console.log(_isProductExists);
            // if (!_isProductExists) {
            //     bag.push(action.payload);
            //     state.basket = [...bag];
            //     state.count = ++state.count;
            //     return state;
            // } else {
            //     state.isProductExists = _isProductExists;
            //     alert("Mehsul movcuddur");

            // };
            // break;

        case POST_REMOVED:
            if(state.count>0){
                state.count = --state.count;
            }
            else{
                state.count=0;
            }
            return state = state?.filter((x) =>
                x.id !== action.payload.id
            );

        default:
            return state;
    }
};


export default addCarts;

